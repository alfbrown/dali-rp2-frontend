import ccxt from 'ccxt';

export default class CryptoAPI {
  constructor() {
    this.exchange = new ccxt.binanceus({
      rateLimit: 1000,
      enableRateLimit: true
    });
    this.placeholderImage = require('@/assets/img/crypto-icon/bitcoin.png');
    this.stablecoins = ['USDT', 'USD', 'USDC'];
    this.timeframes = {
      POINTS: 7,           // Number of data points
      INTERVAL: '2h',      // 1 hour intervals
      DURATION: '24h'       // Total duration to show
    };
  }

  async fetchTickers() {
    try {
      const tickers = await this.exchange.fetchTickers();
      const consolidatedTickers = this.consolidatePairs(tickers);
      return {
        trendings: this.getTopByVolume(consolidatedTickers, 4),
        topGainers: this.getTopByGains(consolidatedTickers, 4),
        losers: this.getTopByLosses(consolidatedTickers, 4)
      };
    } catch (error) {
      console.error('Error fetching tickers:', error);
      return {
        trendings: this.getDefaultData(),
        topGainers: this.getDefaultData(),
        losers: this.getDefaultData()
      };
    }
  }

  async fetchHistoricalData(symbol, timeframe = this.timeframes.INTERVAL, limit = this.timeframes.POINTS) {
    try {
      const ohlcv = await this.exchange.fetchOHLCV(
        symbol,
        timeframe,
        undefined,
        limit
      );
      
      return ohlcv.map(candle => ({
        time: candle[0],
        volume: candle[5]
      }));
    } catch (error) {
      console.error('Error fetching historical data:', error);
      return Array(this.timeframes.POINTS).fill({ time: Date.now(), volume: 0 });
    }
  }
  consolidatePairs(tickers) {
    const consolidated = {};
    
    Object.entries(tickers).forEach(([symbol, data]) => {
      const [base, quote] = symbol.split('/');
      if (!this.stablecoins.includes(quote)) return;
      
      if (!consolidated[base]) {
        consolidated[base] = { volume: 0, last: 0, percentage: 0, count: 0 };
      }
      
      consolidated[base].volume += data.baseVolume || 0;
      consolidated[base].last += data.last || 0;
      consolidated[base].percentage += data.percentage || 0;
      consolidated[base].count++;
    });

    return Object.entries(consolidated).map(([symbol, data]) => ({
      symbol,
      baseVolume: data.volume,
      last: data.last / data.count,
      percentage: data.percentage / data.count
    }));
  }

  getTopByVolume(tickers, limit) {
    return tickers
      .sort((a, b) => b.baseVolume - a.baseVolume)
      .slice(0, limit)
      .map((data, index) => ({
        id: index + 1,
        name: data.symbol,
        price: this.formatPrice(data.last),
        logo: this.placeholderImage,
        increase: data.percentage > 0,
        data: this.generateVolumeData(data.baseVolume)
      }));
  }

  getTopByGains(tickers, limit) {
    return tickers
      .filter(data => data.percentage > 0)
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, limit)
      .map((data, index) => ({
        id: index + 1,
        name: data.symbol,
        price: this.formatPrice(data.last),
        logo: this.placeholderImage,
        increase: true,
        data: this.generateVolumeData(data.baseVolume)
      }));
  }

  getTopByLosses(tickers, limit) {
    return tickers
      .filter(data => data.percentage < 0)
      .sort((a, b) => a.percentage - b.percentage)
      .slice(0, limit)
      .map((data, index) => ({
        id: index + 1,
        name: data.symbol,
        price: this.formatPrice(data.last),
        logo: this.placeholderImage,
        increase: false,
        data: this.generateVolumeData(data.baseVolume)
      }));
  }

  formatPrice(price) {
    return parseFloat(price < 1 ? price.toFixed(6) : price.toFixed(2));
  }

  generateVolumeData(volume) {
    // Calculate dynamic scale factor
    const scaleFactor = this.calculateScaleFactor(volume);
    const baseValue = volume / scaleFactor;
    
    // Generate 7 points with meaningful variation
    return Array(7).fill(0).map(() => 
      Math.max(1, Math.floor(baseValue * (0.85 + Math.random() * 0.3)))
    );
  }

  calculateScaleFactor(volume) {
    // Find appropriate divisor to keep values between 1-100
    const magnitude = Math.floor(Math.log10(volume));
    return Math.pow(10, magnitude - 2);
  }

  generatePercentageData(percentage) {
    // Scale percentage changes to visible chart movements
    const baseValue = Math.abs(percentage) * 5;
    return Array(7).fill(0).map((_, i) => 
      Math.max(1, Math.floor(baseValue * ((i + 1) / 7)))
    );
  }

  getDefaultData() {
    return [{
      id: 1,
      name: 'Bitcoin',
      price: 1,
      logo: this.placeholderImage,
      increase: true,
      data: [0, 3, 6, 7, 6, 7, 5]
    }];
  }
}