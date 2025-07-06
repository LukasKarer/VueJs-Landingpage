<template>
  <!-- Desktop Navbar -->
  <div class="nav-bg"></div>
  <nav role="navigation" class="desktop-nav">
    <span class="left">
      <router-link to="/" class="home-link" exact>WebKarer</router-link>
    </span>
    <span class="big">
      <div>
        <ul>
          <li><a href="#how" class="link" @click="handleClick($event, 'how')" exact>How</a></li>
          <!-- <li><a href="#work" class="link" @click="handleClick($event, 'work')">Work</a></li> -->
          <li>
            <a href="#packages" class="link" @click="handleClick($event, 'packages')">Price</a>
          </li>
          <li>
            <a href="#contact" class="link" @click="handleClick($event, 'contact')">Contact</a>
          </li>
          <li><a href="#faq" class="link" @click="handleClick($event, 'faq')">FAQ</a></li>
        </ul>
      </div>
    </span>
    <span class="right">
      <a href="#contact" class="button-primary" @click="handleClick($event, 'contact')"
        >Get Started</a
      >
    </span>
  </nav>

  <!-- Mobile Navbar -->
  <MobileNavbar />
</template>

<script setup lang="ts">
import { handleAnchorClick } from '../utils/scrollUtils'
import MobileNavbar from './MobileNavbar.vue'

const handleClick = (event: Event, targetId: string) => {
  handleAnchorClick(event, targetId)
}
</script>

<style lang="scss" scoped>
.nav-bg {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 1.5rem; // Adjust to match the border-radius of the navbar
  background-color: $bg;
  z-index: 999;
}
.desktop-nav {
  position: fixed;
  display: flex;
  width: calc(100vw - 2rem);
  margin: 0 1rem 1rem 1rem;
  padding: 1rem 0;
  border-radius: 1rem;
  background-color: $bg-secondary;
  font-family: $font-family;
  z-index: 1000;
}

span {
  display: inline-flex;
  text-decoration: none;
  width: 20vw;
  justify-content: center;
  align-items: center;
  .home-link {
    color: $text-primary;
    font-family: 'Just Another Hand', cursive;
    font-size: 2.5rem;
    line-height: 3rem;
    padding-top: 0.5rem;
    text-decoration: none;
    text-align: left;
  }
}
span.big {
  width: calc(60vw - 2rem);
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    background-color: $bg-primary;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      padding: 0;
      margin: 1rem;
      li {
        margin: 0 1rem;
        .link {
          color: $text-primary;
          font-size: 1.2rem;
          text-decoration: none !important;
          cursor: pointer;
          transition: color 0.2s;
          &:hover {
            color: $color-secondary;
          }
        }
      }
    }
  }
}

// Hide desktop navbar on mobile screens
@media (max-width: 900px) {
  .desktop-nav {
    display: none;
  }
}
</style>
