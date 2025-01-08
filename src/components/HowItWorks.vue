<template>
  <div>
    <span>
      <p class="strong">How It Works</p>
      <p>
        We're your one-stop shop for high-impact websites, gorgeous brand design and reliable
        hosting. Attract more clients, elevate your brand, and scale your business!
      </p>
    </span>
    <span class="row">
      <div>
        <IconChat class="img" />
        <span>
          At WebKarer we kickoff our project with a strategy meeting, where a outline of the project
          will be written down, containing integral, unique parts that the endproduct will feature
        </span>
      </div>
      <div>
        <IconSparkles class="img" />
        <span>
          With all outlines setup for straightup success, we use all your integral, unique parts to
          craft a website that will become the brigthest star in an starlit sky of websites
        </span>
      </div>
      <div>
        <IconRocket class="img" />
        <span>
          After some possible rounds of revisions, the only thing left to do is to take your
          endproduct to the launchpad and shoot it into a world full of eagerly waiting customers
        </span>
      </div>
    </span>
    <a href="#packages" class="button-primary">See Packages</a>
  </div>
</template>

<script>
import IconChat from './icons/IconChat.svg'
import IconSparkles from './icons/IconSparkles.svg'
import IconRocket from './icons/IconRocket.svg'

export default {
  components: { IconChat, IconSparkles, IconRocket }
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

  span {
    margin: 3rem auto;

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
    margin: 1rem;

    div {
      display: flex;
      place-items: top;
      justify-content: center;
      flex-direction: column;
      width: 20vw;
      margin: 1rem 2.5vw;

      .img {
        width: 3rem;
        height: 3rem;
      }
      span {
        font-size: 1rem;
        color: $text-primary;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.button-primary {
  margin-bottom: 3rem !important;
}
</style>
