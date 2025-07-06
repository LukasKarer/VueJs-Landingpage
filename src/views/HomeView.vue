<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import Testemonial from '../components/Testemonial.vue'
import ProblemSolving from '../components/ProblemSolving.vue'
import HowItWorks from '../components/HowItWorks.vue'
import ClientShowcase from '../components/ClientShowcase.vue'
import Packages from '../components/Packages.vue'
import FAQ from '../components/FAQ.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
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
    <Contact id="contact" />
    <div id="faq-mobile" style="height: 0; position: relative; top: -60px"></div>
    <FAQ id="faq" />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
/* Add any component-specific styles here if needed */
</style>
