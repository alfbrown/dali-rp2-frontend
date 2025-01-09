<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24">
      <BaseSection>
        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase"
            ></span
          >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
          <span class="text-header-gradient">Free</span> Cryptocurrency <span class="text-header-gradient">Cost Basis</span> Calculator
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            Break free from extra fees. Calculate your crypto cost basis across multiple platforms.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
          <a
            v-smooth-scroll
            data-aos="flip-down"
            data-aos-delay="150"
            href="#input-form"
            class="aos-animate aos-init bg-gradient-to-r border border-[#0c66ee] from-[#468ef9] max-w-full px-8 py-4 rounded-full text-white to-[#0c66ee]"
          >
            <span>Get Started</span>
          </a>
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              :src="heroImage"
              class="-mt-4"
              alt=""
            />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('@/assets/img/pattern/ellipse-1.png')"
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('@/assets/img/pattern/ellipse-2.png')"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('@/assets/img/pattern/ellipse-3.png')"
          class="hidden sm:block absolute bottom-56 right-24 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('@/assets/img/pattern/star.png')"
          class="hidden sm:block absolute top-20 sm:top-20 right-16 lg:right-0 lg:left-[30rem] w-8"
        />
      </BaseSection>
    </section>

    <!-- Crypto statistic section -->
    <section
      class="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
    >
      <div class="w-full flex flex-col lg:flex-row items-center justify-center">
        <LandingCryptoStatistic
          data-aos="fade-up"
          title="🔥 Trending"
          :datasets="trendings"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="150"
          title="🚀 Top Gainers"
          :datasets="topGainers"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="300"
          title="💎 Recently Added"
          :datasets="recents"
          class="lg:px-8"
        />
      </div>
    </section>

    <!-- Upload Documents section -->
    <section class="w-full my-24">
      <BaseSection>
        <UploadDocuments/>
      </BaseSection>
    </section>

    <!-- Partners section -->
    <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold">Collaborators and Attribution</h3>
        <p data-aos="flip-down" class="paragraph">This project builds upon the work of many talented individuals and organizations</p>
        <div data-aos="fade-up" class="flex flex-wrap items-center justify-center gap-6">
          <div class="text-center p-4">
            <p class="text-gray-700">
              This project builds upon: <a href="https://github.com/eprbell" target="_blank" rel="noopener noreferrer" 
              class="text-blue-600 hover:text-blue-800 underline">DALI and RP2</a>
            </p>
          </div>
          <!-- Add additional attributions here -->
          <div class="text-center p-4">
            <p class="text-gray-700">
              UI Design: Based on design by <a href="https://github.com/RSurya99/nefa" target="_blank" rel="noopener noreferrer" 
              class="text-blue-600 hover:text-blue-800 underline">NEFA</a>
            </p>
          </div>
          <div class="text-center p-4">
            <p class="text-gray-700">
              Images: Designed by <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" 
              class="text-blue-600 hover:text-blue-800 underline">Freepik</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Credit card section -->
    <!--section class="w-full my-36">
      <BaseSection data-aos="fade-down">
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img :src="require('@/assets/img/nefa-cc.webp')" class="w-[95%]" alt="" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 class="text-4xl font-semibold">
            Introducing the <span class="text-header-gradient">NEFA</span> Credit Card
          </h2>
          <p class="paragraph">Subject to cardholder and rewards terms which will be available at application.</p>
          <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Up to 3% back on purchases" />
            <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA" />
            <LandingListItem title="No annual fee" />
          </ul>
          <BaseButton
            class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base"
            >Join the waitlist</BaseButton
          >
        </div>
      </BaseSection>
    </section-->

    <!-- Advanced trading tools section -->
    <!--section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <LandingTradingToolImage class="sm:hidden" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 class="text-4xl font-semibold">Advanced Trading <span class="text-header-gradient">Tools</span></h2>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Professional Access, Non-stop Availability</h4>
            <p class="paragraph text-sm xl:text-base">
              We provide premium access to crypto trading for both individuals and institutions through high liquidity,
              reliable order execution and constant uptime.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">A Range of Powerful Apis</h4>
            <p class="paragraph text-sm xl:text-base">
              Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and
              HTTP APIs. Connect to our WebSocket for real-time data streaming.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Customer Support</h4>
            <p class="paragraph text-sm xl:text-base">
              Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers
              for partners.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row">
            <a
              v-smooth-scroll
              data-aos="flip-down"
              data-aos-delay="150"
              href="#input-form"
              class="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base"
            >
              <span>Get Started</span>
            </a>
            <BaseButton class="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full">
              Learn More
            </BaseButton>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6" v-bind="$attrs">
    <div class="w-full sm:mt-20 xl:mt-0">
      <img src='@/assets/img/advanced-trading-tools.jpg' class="w-full" alt="" />
    </div>
  </div>
      </div>
    </section-->

    <!-- Industry-leading security section -->
    <section class="w-full my-24">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('@/assets/img/industry-leading-security.png')" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8">
          <h2 class="text-4xl font-semibold">About Us</h2>
          <ul class="space-y-8 sm:space-y-4">
            <LandingListItem title="Safety, security and compliance">
              <p class="text-sm text-gray-700 leading-relaxed">
                NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the
                cybersecurity audits conducted by the New York Department of Financial Services.
                <span class="underline">Learn more</span> about our commitment to security.
              </p>
            </LandingListItem>
            <LandingListItem title="Hardware security keys">
              <p class="text-sm text-gray-700 leading-relaxed">
                With NEFA you can secure your account with a hardware security key via WebAuthn.
              </p>
            </LandingListItem>
            <LandingListItem title="SOC Certifications">
              <p class="text-sm text-gray-700 leading-relaxed">
                NEFA is <span class="underline">SOC 1 Type 2</span> and
                <span class="underline">SOC 2 Type 2</span> compliant. We are the world’s first cryptocurrency exchange
                and custodian to complete these exams.
              </p>
            </LandingListItem>
          </ul>
        </div>
      </div>
    </section>

    <!-- Getting started section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
          Get started in just a few minutes
        </h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingStep v-for="step in steps" :key="step.title" :step="step" />
          <img
            :src="require('@/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            :src="require('@/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('@/assets/img/faq.png')" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Frequently asked questions</h2>

          <ul class="shadow-box">
            <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
        </div>
      </BaseSection>
    </section>

    <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
  </div>
</template>

<script>
import BaseSection from '@/components/base/Section.vue'
import LandingCryptoStatistic from '@/components/landing/CryptoStatistic.vue'
import BaseAccordion from '@/components/base/Accordion.vue';
import LandingStep from '@/components/landing/Step.vue';
import LandingListItem from '@/components/landing/ListItem.vue';
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue';
import aosMixin from '@/mixins/aos';
//import BaseButton from '@/components/base/Button.vue';
import UploadDocuments from '@/components/landing/UploadDocuments.vue';
import heroImage from '@/assets/img/tax-calculator.png';

export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  components: {
    BaseSection,
    LandingListItem,
    BaseAccordion,
    LandingStep,
    ArrowUpIcon,
    LandingCryptoStatistic,
   // BaseButton,
    UploadDocuments
  },
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      currencySelected: {
        img: 'country-icon/eng.png',
        name: 'USD',
      },
      currencies: [
        {
          img: 'country-icon/eng.png',
          name: 'USD',
        },
      ],
      cryptoSelected: {
        img: 'crypto-icon/bitcoin.png',
        name: 'BTC',
      },
      cryptocurrencies: [
        {
          img: 'crypto-icon/bitcoin.png',
          name: 'BTC',
        },
      ],
      trendings: [
        {
          id: 1,
          name: 'Bitcoin',
          price: 43180.13,
          logo: 'bitcoin.png',
          increase: true,
          data: [40, 35, 60, 75, 60, 75, 50],
        },
        {
          id: 2,
          name: 'Ethereum',
          price: 3480.65,
          logo: 'ethereum.png',
          increase: false,
          data: [25, 30, 60, 50, 80, 55, 80],
        },
        {
          id: 3,
          name: 'Solana',
          price: 150.2,
          logo: 'solana.png',
          increase: true,
          data: [40, 45, 40, 80, 50, 60, 35],
        },
        {
          id: 4,
          name: 'Dogecoin',
          price: 0.1572,
          logo: 'dogecoin.png',
          increase: true,
          data: [35, 70, 60, 80, 50, 60, 40],
        },
      ],
      topGainers: [
        {
          id: 1,
          name: 'PAPPAY',
          price: 0.00374,
          logo: 'pappay.png',
          increase: true,
          data: [30, 50, 45, 60, 70, 40, 45],
        },
        {
          id: 2,
          name: 'Bitcoin Asia',
          price: 0.02096,
          logo: 'bitcoin-asia.png',
          increase: true,
          data: [25, 60, 50, 60, 35, 50, 70],
        },
        {
          id: 3,
          name: 'MoonRock',
          price: 0.004907,
          logo: 'moonrock.png',
          increase: true,
          data: [40, 35, 40, 25, 50, 70, 45],
        },
        {
          id: 4,
          name: 'NinjaFloki',
          price: 0.000123,
          logo: 'ninjafloki.png',
          increase: true,
          data: [45, 35, 40, 30, 25, 45, 35],
        },
      ],
      recents: [
        {
          id: 1,
          name: 'MetaCraft',
          price: 0.0608,
          logo: 'metacraft.png',
          increase: false,
          data: [40, 50, 45, 60, 35, 40, 45],
        },
        {
          id: 2,
          name: 'Frog',
          price: 0.5875,
          logo: 'frog.png',
          increase: false,
          data: [25, 50, 45, 48, 40, 60, 45],
        },
        {
          id: 3,
          name: 'Musk Doge',
          price: 0.04041,
          logo: 'musk-doge.png',
          increase: true,
          data: [25, 35, 60, 45, 50, 45, 45],
        },
        {
          id: 4,
          name: '2SHARE',
          price: 1366.24,
          logo: '2share.png',
          increase: true,
          data: [35, 30, 60, 50, 35, 45, 40],
        },
      ],
      accordions: [
        {
          title: 'How does this work?',
          description:
              "Our platform offers a simple, web-based interface for calculating cryptocurrency taxes using the powerful, privacy-focused tools DaLI and RP2. Whether you’re an individual investor, tax professional, or business, you can choose to run DaLI, RP2, or a combined process by uploading your transaction and configuration CSV files directly on our site. We handle all the technical details without storing your data, ensuring your privacy and security. Once processed, you’ll receive a ZIP file with your tax results, including Form 8949. Best of all, our service is completely free to use. For a detailed walkthrough, please visit our: <a href='https://blog.com' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>Blog Post</a>"
        },
        {
          title: 'How much does this cost?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: "I am a business or tax professional, can I use this?",
          description:
            "For now, it is free for everyone. We may make changes to this, which will depend on use or any unexpected overhead costs.",
        },
        {
          title: 'How do I reach out for support?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: "What's next?",
          description:
            "With the upcoming IRS regulation changes there are additional updates and modifications that will need to be made for this software to maintain relevance. While we can, we aim to continue to make this free, but it is completely up to our users on next steps. If there is continued Interest, we will continue to enhance the site for years to come.",
        },
      ],
      steps: [
        {
          img: 'sign-up.png',
          title: 'Upload',
          description:
            'Upload your crytocurrency transaction history from exchanges, wallets, and other sources to our platform',
        },
        {
          img: 'fund.png',
          title: 'Generate',
          description:
            'Generate your tax reports using our platform. We support FIFO, LIFO, and HIFO methods for calculating taxes',
        },
        {
          img: 'download.png',
          title: 'Download',
          description:
            'Download your generated tax summary and report your capital gains and losses on your tax return.',
        },
      ],
      heroImage,
    }
  },
}
</script>
<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
