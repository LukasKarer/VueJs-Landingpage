<template>
  <div class="mobile-nav-bg"></div>
  <nav class="mobile-nav" role="navigation">
    <div class="mobile-nav-header">
      <router-link to="/" class="home-link" exact>WebKarer</router-link>
      <button class="hamburger-btn" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <!-- Full screen overlay menu -->
    <div class="mobile-menu-overlay" :class="{ active: isMenuOpen }" @click="closeMenu">
      <div class="mobile-menu-content" @click.stop>
        <div class="mobile-menu-header">
          <router-link to="/" class="mobile-home-link" @click="closeMenu">WebKarer</router-link>
          <button class="close-btn" @click="closeMenu">
            <span class="close-line"></span>
            <span class="close-line"></span>
          </button>
        </div>
        <ul class="mobile-menu-items">
          <li><a href="#how" class="mobile-link" @click="handleClick($event, 'how')">How</a></li>
          <li>
            <a href="#packages" class="mobile-link" @click="handleClick($event, 'packages')"
              >Price</a
            >
          </li>
          <li>
            <a href="#contact" class="mobile-link" @click="handleClick($event, 'contact')"
              >Contact</a
            >
          </li>
          <li><a href="#faq" class="mobile-link" @click="handleClick($event, 'faq')">FAQ</a></li>
        </ul>
        <div class="mobile-menu-footer">
          <a href="#contact" class="mobile-button-primary" @click="handleClick($event, 'contact')">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { handleAnchorClick } from '../utils/scrollUtils'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Prevent body scroll when menu is open
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleClick = async (event: Event, targetId: string) => {
  closeMenu()
  await nextTick() // Wait for DOM update (menu closed)
  // Map desktop targetId to mobile-specific targetId
  const mobileTargetMap: Record<string, string> = {
    how: 'how-mobile',
    packages: 'packages-mobile',
    contact: 'contact-mobile',
    faq: 'faq-mobile'
  }
  const mobileTargetId = mobileTargetMap[targetId] || undefined
  handleAnchorClick(event, targetId, 0, mobileTargetId)
}
</script>

<style lang="scss" scoped>
.mobile-nav-bg {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 1.5rem; // Adjust to match the border-radius of the navbar
  background-color: $bg;
  z-index: 999;
  @media (min-width: 901px) {
    display: none;
  }
}

.mobile-nav {
  position: fixed;
  display: flex;
  width: calc(100vw - 2rem);
  margin: 0 1rem 1rem 1rem;
  padding: 1rem 0;
  border-radius: 1rem;
  background-color: $bg-secondary;
  font-family: $font-family;
  z-index: 1000;

  // Hide mobile navbar on desktop screens
  @media (min-width: 901px) {
    display: none;
  }
}

.mobile-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
}

.home-link {
  color: $text-primary;
  font-family: 'Just Another Hand', cursive;
  font-size: 2.5rem;
  line-height: 3rem;
  padding-top: 0.5rem;
  text-decoration: none;
}

.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  padding: 0;
  z-index: 1001;
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background-color: $text-primary;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger-btn.active {
  display: none;
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $bg;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu-content {
  background-color: $bg-secondary;
  height: calc(100vh - 2rem);
  width: calc(100vw - 2rem);
  max-width: 400px;
  border-radius: 1rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-home-link {
  color: $text-primary;
  font-family: 'Just Another Hand', cursive;
  font-size: 2.5rem;
  line-height: 3rem;
  padding-top: 0.5rem;
  text-decoration: none;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-line {
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: $text-primary;
  border-radius: 2px;
}

.close-line:nth-child(1) {
  transform: rotate(45deg);
}

.close-line:nth-child(2) {
  transform: rotate(-45deg);
}

.mobile-menu-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-link {
  color: $text-primary;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  display: block;
  padding: 1rem 0;
  text-align: center;
  transition: color 0.2s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    color: $color-secondary;
  }

  &:last-child {
    border-bottom: none;
  }
}

.mobile-menu-footer {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}

.mobile-button-primary {
  background-color: $bg-tertiary;
  color: $text-primary;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: darken($color-primary, 10%);
  }
}
</style>
