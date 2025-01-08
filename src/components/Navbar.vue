<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav role="navigation">
    <span class="left">
      <router-link to="/" class="home-link" exact>WebKarer</router-link>
    </span>
    <span class="big">
      <div>
        <ul>
          <li><a href="#how" class="link" exact>How</a></li>
          <li><a href="#work" class="link">Work</a></li>
          <li><a href="#packages" class="link">Price</a></li>
          <li><a href="#faq" class="link">FAQ</a></li>
        </ul>
      </div>
    </span>
    <span class="right">
      <router-link to="#" class="button-primary">Get Started</router-link>
    </span>
  </nav>
</template>

<style lang="scss" scoped>
nav[role='navigation'] {
  position: fixed;
  display: flex;
  width: calc(100vw - 2rem);
  margin: 1rem;
  font-family: $font-family;
}
span {
  display: inline-flex;
  text-decoration: none;
  width: 20vw;
  justify-content: center;
  align-items: center;
  .home-link {
    color: $text-primary;
    font-family: 'Just Another Hand', cursive;
    font-size: 2.5rem;
    line-height: 3rem;
    padding-top: 0.5rem;
    text-decoration: none;
  }
}
span.big {
  width: calc(60vw - 2rem);
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    background-color: $bg-primary;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      padding: 0;
      margin: 1rem;
      li {
        margin: 0 1rem;
        .link {
          color: $text-primary;
          font-size: 1.2rem;
          text-decoration: none !important;
        }
      }
    }
  }
}
</style>
