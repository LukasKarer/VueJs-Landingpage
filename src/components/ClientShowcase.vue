<template>
  <div class="container">
    <span>
      <p class="strong">{{ $t('clientShowcase.title') }}</p>
      <p>{{ $t('clientShowcase.subtitle') }}</p>
    </span>
    <div class="grid">
      <div class="grid-item grid-item-1">
        <strong>{{ $t('clientShowcase.brief') }}</strong>
        <IconWebsiteHolder class="img" />
        <p>
          {{ $t('clientShowcase.description') }}
        </p>
      </div>
      <div class="grid-item grid-item-2"></div>
      <div class="grid-item grid-item-3"></div>
      <div class="grid-item grid-item-4"></div>
      <div class="grid-item grid-item-5">
        <strong>{{ $t("clientShowcase.brief") }}</strong>
        <IconWebsiteHolder class="img" />
        <p>
          {{ $t("clientShowcase.description") }}
        </p>
      </div>
      <div class="grid-item grid-item-6"></div>
      <div class="grid-item grid-item-7"></div>
      <div class="grid-item grid-item-8"></div>
    </div>
  </div>
</template>

<script>
import IconWebsiteHolder from './icons/IconWebsiteHolder.svg'

export default {
  components: { IconWebsiteHolder }
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

  span {
    text-align: center;
    margin: 3rem auto 1rem auto;

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
  div.grid {
    width: calc(100vw - 12rem);
    display: grid;
    gap: 1rem;
    grid-auto-columns: 1fr;
    grid-template-areas:
      'grid-item-1 grid-item-2 grid-item-3 grid-item-4'
      'grid-item-1 grid-item-5 grid-item-3 grid-item-6'
      'grid-item-7 grid-item-5 grid-item-8 grid-item-8';
    margin: 1rem 6rem;

    div.grid-item {
      background-color: $bg-secondary;
      border-radius: 1rem;
      padding: 2rem;
    }
    .grid-item-1 {
      grid-area: grid-item-1;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;

      strong {
        font-size: 1.5rem;
        color: $text-primary;
      }
      .img {
        width: 15rem;
        height: 15rem;
      }
      p {
        font-size: 1rem;
        color: $text-secondary;
      }
    }
    .grid-item-2 {
      grid-area: grid-item-2;
      height: 100%;
      width: 100%;
    }
    .grid-item-3 {
      grid-area: grid-item-3;
      height: 100%;
      width: 100%;
    }
    .grid-item-4 {
      grid-area: grid-item-4;
      height: 100%;
      width: 100%;
    }
    .grid-item-5 {
      grid-area: grid-item-5;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      padding: 1rem;

      strong {
        font-size: 1.5rem;
        color: $text-primary;
      }
      .img {
        width: 15rem;
        height: 15rem;
      }
      p {
        font-size: 1rem;
        color: $text-secondary;
      }
    }
    .grid-item-6 {
      grid-area: grid-item-6;
      height: 100%;
      width: 100%;
    }
    .grid-item-7 {
      grid-area: grid-item-7;
      height: 100%;
      width: 100%;
    }
    .grid-item-8 {
      grid-area: grid-item-8;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
