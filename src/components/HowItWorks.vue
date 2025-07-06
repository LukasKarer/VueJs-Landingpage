<template>
  <div>
    <span class="title">
      <p class="strong">{{ $t('howItWorks.title') }}</p>
      <p>
        {{ $t('howItWorks.subtitle') }}
      </p>
    </span>
    <span class="row">
      <div>
        <IconChat class="img" />
        <span>
          {{ $t('howItWorks.step1.description') }}
        </span>
      </div>
      <div>
        <IconSparkles class="img" />
        <span>
          {{ $t('howItWorks.step2.description') }}
        </span>
      </div>
      <div>
        <IconRocket class="img" />
        <span>
          {{ $t('howItWorks.step3.description') }}
        </span>
      </div>
    </span>
    <a href="#packages" class="button-primary" @click="handleClick($event, 'packages')">{{ $t('howItWorks.seePackages') }}</a>
  </div>
</template>

<script setup lang="ts">
import IconChat from './icons/IconChat.svg'
import IconSparkles from './icons/IconSparkles.svg'
import IconRocket from './icons/IconRocket.svg'
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
  flex-direction: column;
  font-family: $font-family;
  background-color: $bg-secondary;
  margin: 1rem;
  border-radius: 1rem;
  text-align: center;

  span.title {
    margin: 3rem auto 1.5rem auto;

    p {
      font-size: 1.25rem;
      color: $text-secondary;
      width: 60vw;
      margin-bottom: 1rem;
    }
    p.strong {
      font-size: 2rem;
      color: $text-primary;
      margin-bottom: 1rem;
    }
  }
  span.row {
    display: flex;
    place-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 2rem;
    align-items: flex-start;

    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: stretch;
    }

    div {
      display: flex;
      place-items: top;
      justify-content: center;
      flex-direction: column;
      width: 20vw;
      margin: 1rem 2.5vw;

      @media (max-width: 1200px) {
        width: 80vw;
        flex-direction: row;
        text-align: left;
        justify-content: flex-start;
        align-items: center;
        margin: 1rem;
      }

      .img {
        width: 3rem;
        height: 3rem;
        margin-bottom: 1rem;

        @media (max-width: 1200px) {
          margin: 0 1rem 0 0;
        }
      }
      span {
        font-size: 1rem;
        color: $text-primary;
        @media (max-width: 1200px) {
          flex: 1;
        }
      }
      &:first-child {
        @media (min-width: 1201px) {
          margin-left: 0;
        }
      }
      &:last-child {
        @media (min-width: 1201px) {
          margin-right: 0;
        }
      }
    }
  }
}
.button-primary {
  margin-bottom: 3rem !important;
}
</style>
