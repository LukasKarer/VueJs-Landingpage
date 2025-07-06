<template>
  <div>
    <span>
      <h2>{{ $t("problemSolving.title") }}</h2>
      <p>
        {{ $t("problemSolving.subtitle") }}
      </p>
    </span>
    <IconWebsiteHolder class="svg" />
  </div>
</template>

<script>
import IconWebsiteHolder from './icons/IconWebsiteHolder.svg'

export default {
  components: { IconWebsiteHolder }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  place-items: center;
  justify-content: center;
  flex-direction: row;
  width: calc(100vw - 2rem);
  background-color: $bg-secondary;
  margin: 1rem;
  border-radius: 1rem;
  text-align: center;
  font-family: $font-family;

  .svg {
    max-width: 30vw;
    @media (max-width: 1200px) {
      display: none;
    }
  }

  span {
    display: flex;
    place-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 3rem 3rem 3rem 5vw;
    max-width: 30vw;

    @media (max-width: 1200px) {
      margin: 3rem 0;
      max-width: 80vw;
    }

    h2 {
      font-size: 2rem;
      color: $text-primary;
    }
    p {
      font-size: 1.25rem;
      margin-top: 1rem;
      color: $text-secondary;
    }
  }
}
</style>
