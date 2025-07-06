<template>
  <div class="language-switcher">
    <button
      @click="switchLanguage('en')"
      :class="{ active: currentLocale === 'en' }"
      class="lang-btn"
    >
      EN
    </button>
    <span class="separator">|</span>
    <button
      @click="switchLanguage('de')"
      :class="{ active: currentLocale === 'de' }"
      class="lang-btn"
    >
      DE
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()

const currentLocale = computed(() => locale.value)

const switchLanguage = (lang: string) => {
  locale.value = lang
  // Store the language preference in localStorage
  localStorage.setItem('preferred-language', lang)
}
</script>

<style lang="scss" scoped>
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: $font-family;
  margin: 0 1rem;

  @media (max-width: 900px) {
    margin: 1rem 1rem 2rem 1rem;
  }

  .lang-btn {
    background: none;
    border: none;
    color: $text-secondary;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    transition: all 0.2s ease;

    &:hover {
      color: $text-primary;
      background-color: rgba(255, 255, 255, 0.1);
    }

    &.active {
      color: $text-primary;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  .separator {
    color: $text-secondary;
    font-size: 0.8rem;
  }
}
</style>
