<template>
  <div class="w-full overflow-hidden">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24">
      <BaseSection class="md:mx-20">
        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 2xl:mt-12 4xl:mt-16 5xl:mt-24 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase"
            ></span
          >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl 2xl:text-7xl 4xl:text-[5rem] 5xl:text-8xl 6xl:text-9xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
          <span class="text-header-gradient">Free</span> Cryptocurrency <span class="text-header-gradient">Cost Basis</span> Calculator
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block text-base 2xl:text-lg 3xl:text-[1.4rem] 4xl:text-2xl 5xl:text-[1.8rem] 6xl:text-[2.5rem] 6xl:leading-[3rem]">
            Break free from extra fees. Calculate your crypto cost basis across multiple platforms.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2 2xl:mt-4 4xl:mt-16"
          >
          <a
            v-smooth-scroll
            data-aos="flip-down"
            data-aos-delay="150"
            href="#input-form"
            class="aos-animate aos-init bg-gradient-to-r border border-[#0c66ee] from-[#468ef9] px-[7%] py-[3.5%] 3xl:py-[4%] rounded-full text-white to-[#0c66ee] text-base 2xl:text-lg 3xl:text-[1.3rem] 4xl:text-2xl 5xl:text-[1.7rem] 6xl:text-[2.2rem]"
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
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-[1.8%]"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('@/assets/img/pattern/ellipse-2.png')"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] 2xl:right-[36rem] 3xl:right-[40rem] 4xl:right-[44rem] 5xl:right-[48rem] 6xl:right-[66rem] w-[1.8%]"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('@/assets/img/pattern/ellipse-3.png')"
          class="hidden sm:block absolute bottom-56 right-24 w-[1.8%]"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('@/assets/img/pattern/star.png')"
          class="hidden sm:block absolute top-20 sm:top-20 right-16 lg:right-0 lg:left-[30rem] 2xl:left-[35rem] 4xl:left-[38.5rem] 5xl:left-[46rem] 6xl:left-[61rem] w-[2.5%]"
        />
      </BaseSection>
    </section>

    <!-- Crypto statistic section -->
    <section
      class="6xl:max-w-[2410px] 5xl:max-w-[1990px] 4xl:max-w-[1750px] 3xl:max-w-[1630px] 2xl:max-w-[1430px] sm:max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
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
          title="⛈️ Top Losers"
          :datasets="losers"
          class="lg:px-8"
        />
      </div>
    </section>

    <!-- Upload Documents section -->
    <section class="w-full my-24" id="input-form">
      <BaseSection>
        <UploadDocuments/>
      </BaseSection>
    </section>

    <!-- Partners section -->
    <section class="bg-partner relative max-w-full sm:mx-6 md:mx-0 my-24 shadow sm:rounded-2xl md:rounded-none overflow-hidden">
      <div class="w-full text-base 2xl:text-lg 3xl:text-[1.3rem] 4xl:text-2xl 5xl:text-[1.7rem] 6xl:text-[1.9rem] px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="text-neutral-800 font-semibold">Collaborators and Attribution</h3>
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
          <div class="text-center p-4">
            <p class="text-gray-700">
              Icons: From<a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" 
              class="text-blue-600 hover:text-blue-800 underline">Lucide</a>
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

     <!-- About Us Section -->
     <section class="w-full my-24">
      <div class="relative max-w-screen-xl px-8 mx-auto 4xl:mx-40 5xl:mx-44 6xl:mx-[32rem] grid grid-cols-12 gap-x-6 2xl:gap-x-28 4xl:gap-x-32 5xl:gap-x-36 6xl:gap-x-42">
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
          <div class="w-full 2xl:w-[40rem] 3xl:w-[42rem] 4xl:w-[48rem] 5xl:w-[55rem] 6xl:w-[60rem]">
            <img :src="require('@/assets/img/industry-leading-security.png')" class="w-full" alt="Cryptocurrency tax calculation interface" />
          </div>
        </div>
        <div data-aos="fade-left" class="col-span-12 lg:col-span-5 2xl:col-span-6 space-y-8 sm:space-y-6 mt-8 xl:px-8">
          <h2 class="text-4xl font-semibold">About Us</h2>
          <ul class="space-y-8 sm:space-y-4">
            <AboutListItem title="Privacy-First Approach">
              <p class="text-sm 2xl:text-base 3xl:text-lg 4xl:text-[1.3rem] 5xl:text-2xl 6xl:text-[1.7rem] text-gray-700 leading-relaxed">
                We prioritize your privacy and security. Our platform is designed to handle your transaction data without storing it, ensuring your information remains confidential.
              </p>
            </AboutListItem>
            <AboutListItem title="Powerful Tools Made Simple">
              <p class="text-sm 2xl:text-base 3xl:text-lg 4xl:text-[1.3rem] 5xl:text-2xl 6xl:text-[1.7rem] text-gray-700 leading-relaxed">
                Upload your transaction files and let our platform handle the complexities. Whether you choose DaLI, RP2, or both, we'll calculate your tax cost basis for you.
              </p>
            </AboutListItem>
            <AboutListItem title="Free and Accessible">
              <p class="text-sm 2xl:text-base 3xl:text-lg 4xl:text-[1.3rem] 5xl:text-2xl 6xl:text-[1.7rem] text-gray-700 leading-relaxed">
                Our service is completely free to use, making cryptocurrency tax compliance accessible to everyone - from individual investors to tax professionals and businesses.
              </p>
            </AboutListItem>
          </ul>
        </div>
      </div>
    </section>

    <!-- Getting started section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-0 my-24 shadow lg:rounded-none sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
          Get started in just a few minutes
        </h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingStep v-for="step in steps" :key="step.title" :step="step" />
          
        </div>
      </div>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('@/assets/img/faq_image.png')" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6 2xl:text-4xl 3xl:text-5xl 4xl:text-[3rem] 5xl:text-[3.5rem] 6xl:text-[4rem]">Frequently asked questions</h2>

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
        href="#hero"
        class="px-[2%] py-[1%] flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700 text-base 2xl:text-lg 3xl:text-[1.3rem] 4xl:text-2xl 5xl:text-[1.7rem] 6xl:text-[2.2rem]"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="12"/>
      </a>
    </div>
  </div>
</template>

<script>
import BaseSection from '@/components/base/Section.vue'
import LandingCryptoStatistic from '@/components/landing/CryptoStatistic.vue'
import BaseAccordion from '@/components/base/Accordion.vue';
import LandingStep from '@/components/landing/Step.vue';
//import LandingListItem from '@/components/landing/ListItem.vue';
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue';
import aosMixin from '@/mixins/aos';
//import BaseButton from '@/components/base/Button.vue';
import UploadDocuments from '@/components/landing/UploadDocuments.vue';
import heroImage from '@/assets/img/tax-calculator.png';
import CryptoAPI from '@/services/cryptoAPI'
import AboutListItem from '@/components/landing/AboutListItem.vue'



export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  components: {
    AboutListItem,
    BaseSection,
   // LandingListItem,
    BaseAccordion,
    LandingStep,
    ArrowUpIcon,
    LandingCryptoStatistic,
   // BaseButton,
    UploadDocuments
  },
  data() {
    return {
      trendings: [],
      topGainers: [],
      losers: [],
      loading: false,
      error: null,
      cryptoAPI: new CryptoAPI(),
      selected: 0,
      heroImage,
      //dropdownConcurency: false,
      //dropdownCrypto: false,
      accordions: [
        {
          title: 'How does this work?',
          description:
              "Our platform offers a simple, web-based interface for calculating cryptocurrency taxes using the powerful, privacy-focused tools DaLI and RP2. Whether you’re an individual investor, tax professional, or business, you can choose to run DaLI, RP2, or a combined process by uploading your transaction and configuration CSV files directly on our site. We handle all the technical details without storing your data, ensuring your privacy and security. Once processed, you’ll receive a ZIP file with your tax results, including Form 8949. Best of all, our service is completely free to use. For a detailed walkthrough, please visit our: <a href='https://blog.com' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>Blog Post</a>"
        },
        {
          title: 'How accurate is this?',
          description:
              "While our tools have been successfully used by many for cryptocurrency tax calculations, we encourage users to exercise their own judgment and compare results with other platforms. We strive for accuracy but assume no liability for any discrepancies. The final responsibility for tax reporting lies with the user. We recommend verifying calculations and consulting with tax professionals when needed."
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
         // img: 'sign-up.png',
          title: 'Upload',
          description:
            'Upload your crytocurrency transaction history from exchanges, wallets, and other sources to our platform',
        },
        {
        //  img: 'fund.png',
          title: 'Generate',
          description:
            'Generate your tax reports using our platform. We support FIFO, LIFO, and HIFO methods for calculating taxes',
        },
        {
         // img: 'download.png',
          title: 'Download',
          description:
            'Download your generated tax summary and report your capital gains and losses on your tax return.',
        },
      ],
      
    }
  },
  async created() {
    try {
      this.loading = true;
      const { trendings, topGainers, losers } = await this.cryptoAPI.fetchTickers();
      this.trendings = trendings;
      this.topGainers = topGainers;
      this.losers = losers;
    } catch (error) {
      console.error('Failed to fetch crypto data:', error);
      this.error = 'Failed to load cryptocurrency data';
    } finally {
      this.loading = false;
    }
  }
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
