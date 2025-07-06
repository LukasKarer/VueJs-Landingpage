<template>
  <div>
    <span>
      <h2>We know the value of your work, it's time your customers do so too</h2>
      <p>
        You put your heart and soul into your business. But hard work can only get you so far and a
        poor brand presence will have you working overtime and not seeing results. <br /><br />
        So it's time to set yourself apart as the industry leader you've become with a kick-ass
        brand your customers genuinely love and a website that works as hard as you do.
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
