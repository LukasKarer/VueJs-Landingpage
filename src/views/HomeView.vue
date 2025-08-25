<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import Testemonial from '../components/Testemonial.vue'
import ProblemSolving from '../components/ProblemSolving.vue'
import HowItWorks from '../components/HowItWorks.vue'
import ClientShowcase from '../components/ClientShowcase.vue'
import Packages from '../components/Packages.vue'
import FAQ from '../components/FAQ.vue'
import ContactUs from '../components/ContactUs.vue'
import Footer from '../components/Footer.vue'
import { AnalyticsClient } from 'tslib-analytics-client';

new AnalyticsClient({
  endpoint: 'http://localhost:3000/api', // Your backend URL
  projectId: '687074760036a83a7cb6'
}).autoTrack();

const { t } = useI18n()
useHead({
  title: 'WebKarer | Home',
  meta: [
    { name: 'description', content: t('hero.subtitle') },
    { property: 'og:title', content: t('hero.title') },
    { property: 'og:description', content: t('hero.subtitle') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.karer.tech/' },
    { property: 'og:locale', content: 'de_DE' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<template>
  <div>
    <Navbar />
    <HeroSection />
    <Testemonial
      :title="$t('testimonials.leadMagnet.title')"
      :msg="$t('testimonials.leadMagnet.message')"
      :name="$t('testimonials.leadMagnet.name')"
    />
    <ProblemSolving />
    <Testemonial
      :title="$t('testimonials.growth.title')"
      :msg="$t('testimonials.growth.message')"
      :name="$t('testimonials.growth.name')"
    />
    <div id="how-mobile" style="height: 0; position: relative; top: -60px"></div>
    <HowItWorks id="how" />
    <!-- <Testemonial
      title="SEO Success"
      msg="I was lost in the search engine wilderness. WebKarer got me back on track and now I'm ranking on page one!"
      name="Sarah" /> -->
    <!-- <ClientShowcase id="work" /> -->
    <div id="packages-mobile" style="height: 0; position: relative; top: -60px"></div>
    <Packages id="packages" />
    <div id="contact-mobile" style="height: 0; position: relative; top: -60px"></div>
    <ContactUs id="contact" />
    <div id="faq-mobile" style="height: 0; position: relative; top: -60px"></div>
    <FAQ id="faq" />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
/* Add any component-specific styles here if needed */
</style>
