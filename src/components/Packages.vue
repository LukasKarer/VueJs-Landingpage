<template>
  <div class="container">
    <div>
      <p class="strong">Packages</p>
      <p>
        A few examples of services we are providing. <br />
        Custom requests always possible via email and call!
      </p>
    </div>
    <span class="row">
      <span>
        <text>Starting at</text> <br />
        <strong>1000</strong><text>EUR</text> <br />
        <p><IconCheck class="check" />5 high-converting pages</p>
        <p><IconCheck class="check" />Basic brand design</p>
        <p><IconCheck class="check" />Website usage training</p>
        <p><IconCheck class="check" />Post launch support</p>
        <router-link to="#" class="button-primary">Get Started</router-link>
        <a href="#" class="bookacall">Book a call</a>
      </span>
      <span class="center">
        <text>Starting at</text> <br />
        <strong>5000</strong><text>EUR</text> <br />
        <p><IconCheck class="check" />Custom interactive webapp</p>
        <p><IconCheck class="check" />Custom copywriting</p>
        <p><IconCheck class="check" />Templates & checklists</p>
        <p><IconCheck class="check" />Advanced brand design</p>
        <router-link to="#" class="button-primary">Get Started</router-link>
        <a href="#" class="bookacall">Book a call</a>
      </span>
      <span>
        <text>Starting at</text> <br />
        <strong>250</strong><text>EUR/month</text> <br />
        <p><IconCheck class="check" />Reliable & secure webhosting</p>
        <p><IconCheck class="check" />Ongoing maintenance</p>
        <p><IconCheck class="check" />Basic SEO optimization</p>
        <p><IconCheck class="check" />Analytics (work in progress)</p>
        <router-link to="#" class="button-primary">Get Started</router-link>
        <a href="#" class="bookacall">Book a call</a>
      </span>
    </span>
  </div>
</template>

<script>
import IconCheck from './icons/IconCheck.svg'
export default {
  components: { IconCheck }
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

    span {
      background-color: $bg-primary;
      width: 20vw;
      margin: 0.5rem;
      border-radius: 1rem;
      padding: 2rem;

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
        margin-left: 0;
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
