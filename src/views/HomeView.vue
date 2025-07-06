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
      title="Lead Magnet Activated"
      msg="My website was pretty, but it wasn't converting visitors. WebKarer optimized it for lead capture, and now my sales funnel is overflowing!"
      name="Peter"
    />
    <ProblemSolving />
    <Testemonial
      title="Growth on Autopilot"
      msg="This team built a website that gets results! My business has seen a surge in new customers."
      name="Thomas"
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
