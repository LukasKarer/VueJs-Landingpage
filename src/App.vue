<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import Testemonial from './components/Testemonial.vue'
import ProblemSolving from './components/ProblemSolving.vue'
import HowItWorks from './components/HowItWorks.vue'
import ClientShowcase from './components/ClientShowcase.vue'
import Packages from './components/Packages.vue'
import FAQ from './components/FAQ.vue'
</script>

<script lang="ts"></script>

<template>
  <div>
    <Navbar />
    <HeroSection />
    <Testemonial
      title="Lead Magnet Activated"
      msg="My website was pretty, but it wasn't converting visitors. WebKarer optimized it for lead capture, and now my sales funnel is overflowing!"
      name="David"
    />
    <ProblemSolving />
    <Testemonial
      title="Growth on Autopilot"
      msg="This team built a website that gets results! My startup has seen a surge in new customers."
      name="John"
    />
    <HowItWorks id="how" />
    <!-- <Testemonial
      title="SEO Success"
      msg="I was lost in the search engine wilderness. WebKarer got me back on track and now I'm ranking on page one!"
      name="Sarah" /> -->
    <ClientShowcase id="work" />
    <Packages id="packages" />
    <FAQ id="faq" />
  </div>
</template>

<style lang="scss">
html,
body {
  scroll-behavior: smooth;
  background-color: $bg;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
