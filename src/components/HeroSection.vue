<template>
  <div>
    <span>
      <h1>{{ $t('hero.title') }}</h1>
      <p>
        {{ $t('hero.subtitle') }}
      </p>
      <a href="#packages" class="button-primary" @click="handleClick($event, 'packages')">{{
        $t('hero.seePackages')
      }}</a>
    </span>
  </div>
</template>

<script setup lang="ts">
import { handleAnchorClick } from '../utils/scrollUtils'

const handleClick = (event: Event, targetId: string) => {
  handleAnchorClick(event, targetId)
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  place-items: center;
  justify-content: center;
  font-family: $font-family;
  height: calc(100vh - 2rem);
  background-color: $bg-secondary;
  margin: 1rem;
  border-radius: 1rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: $text-primary;
    margin-bottom: 1rem;
    max-width: 70vw;

    @media (max-width: 900px) {
      max-width: 80vw;
    }
  }
  p {
    font-size: 1.5rem;
    color: $text-secondary;
    margin-bottom: 2rem;
    max-width: 70vw;

    @media (max-width: 900px) {
      max-width: 80vw;
    }
  }
}
</style>
