<template>
  <div class="container">
    <div>
      <p class="strong">{{ $t('packages.title') }}</p>
      <p>
        {{ $t('packages.subtitle') }}
      </p>
    </div>
    <span class="row">
      <span>
        <text>{{ $t('packages.startingAt') }}</text> <br />
        <strong>{{ $t('packages.basic.price') }}</strong
        ><text>{{ $t('packages.eur') }}</text> <br />
        <p><IconCheck class="check" />{{ $t('packages.basic.features.0') }}</p>
        <p><IconCheck class="check" />{{ $t('packages.basic.features.1') }}</p>
        <p><IconCheck class="check" />{{ $t('packages.basic.features.2') }}</p>
        <p><IconCheck class="check" />{{ $t('packages.basic.features.3') }}</p>
        <a href="#contact" class="button-primary" @click="handleClick($event, 'contact')">{{
          $t('packages.getStarted')
        }}</a>
        <a href="mailto:inquiry@karer.tech" class="bookacall">{{ $t('packages.bookCall') }}</a>
      </span>
      <span class="center">
        <text>{{ $t('packages.startingAt') }}</text> <br />
        <strong>{{ $t('packages.premium.price') }}</strong
        ><text>{{ $t('packages.eur') }}</text> <br />
        <p><IconCheck class="check" />{{ $t('packages.premium.features.0') }}</p>
        <p><IconCheck class="check" />{{ $t('packages.premium.features.1') }}</p>
        <p><IconCheck class="check" />{{ $t('packages.premium.features.2') }}</p>
        <p><IconCheck class="check" />{{ $t('packages.premium.features.3') }}</p>
        <a href="#contact" class="button-primary" @click="handleClick($event, 'contact')">{{
          $t('packages.getStarted')
        }}</a>
        <a href="mailto:inquiry@karer.tech" class="bookacall">{{ $t('packages.bookCall') }}</a>
      </span>
      <span>
        <text>{{ $t('packages.startingAt') }}</text> <br />
        <strong>{{ $t('packages.hosting.price') }}</strong
        ><text>{{ $t('packages.eurPerMonth') }}</text> <br />
        <p><IconCheck class="check" />{{ $t('packages.hosting.features.0') }}</p>
        <p><IconCheck class="check" />{{ $t('packages.hosting.features.1') }}</p>
        <p><IconCheck class="check" />{{ $t('packages.hosting.features.2') }}</p>
        <p><IconCheck class="check" />{{ $t('packages.hosting.features.3') }}</p>
        <a href="#contact" class="button-primary" @click="handleClick($event, 'contact')">{{
          $t('packages.getStarted')
        }}</a>
        <a href="mailto:inquiry@karer.tech" class="bookacall">{{ $t('packages.bookCall') }}</a>
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import IconCheck from './icons/IconCheck.svg'
import { handleAnchorClick } from '../utils/scrollUtils'

const handleClick = (event: Event, targetId: string) => {
  handleAnchorClick(event, targetId)
}
</script>

<style lang="scss" scoped>
div.container {
  display: flex;
  place-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: $font-family;
  margin: 1rem;
  border-radius: 1rem;

  div {
    margin: 2rem auto 0 auto;
    text-align: center;

    p {
      font-size: 1.25rem;
      color: $text-secondary;
      width: 60vw;
      margin-bottom: 1rem;

      @media (max-width: 900px) {
        width: 80vw;
      }
    }
    p.strong {
      text-align: center;
      font-size: 2rem;
      color: $text-primary;
      margin-bottom: 1rem;
    }
  }
  span.row {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 1rem;

    @media (max-width: 1200px) {
      flex-direction: column;
    }

    span {
      background-color: $bg-primary;
      width: 20vw;
      margin: 0.5rem;
      border-radius: 1rem;
      padding: 2rem;

      @media (max-width: 1200px) {
        width: 80vw;
      }

      /* p {
        font-size: 1rem;
        color: $text-secondary;
      }
      span {
        font-size: 1.5rem;
        line-height: 2rem;
        color: $text-primary;
      } */
      text {
        font-size: 1rem;
        color: $text-secondary;
      }
      strong {
        font-size: 3rem;
        color: $text-primary;
        font-weight: bold;
        margin-right: 0.25rem;
      }
      .check {
        fill: $text-primary;
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.25rem 0.25rem 0 0;
      }
      p {
        display: flex;
        place-content: inherit;
        flex-direction: row;
        font-size: 1rem;
        color: $text-secondary;
        line-height: 2rem;
      }
      &:first-child {
        @media (min-width: 1201px) {
          margin-left: 0;
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
    span.center {
      background-color: $bg-tertiary;

      .button-primary {
        background-color: $bg-primary;
      }
    }
  }
}
.button-primary {
  display: block;
  width: 100%;
  text-align: center;
  margin: 2rem 0 1rem 0;
}
.bookacall {
  display: block;
  width: 100%;
  text-align: center;
  color: $text-primary;
  font-size: 0.85rem;
}
</style>
