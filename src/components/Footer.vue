<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-left">
        <span class="footer-title">WebKarer</span>
      </div>
      <div class="footer-right">
        <nav>
          <ul>
            <li>
              <a href="#how" class="footer-link" @click="handleClick($event, 'how')">{{
                $t('nav.how')
              }}</a>
            </li>
            <!-- <li><a href="#work" class="footer-link" @click="handleClick($event, 'work')">Work</a></li> -->
            <li>
              <a href="#packages" class="footer-link" @click="handleClick($event, 'packages')">{{
                $t('nav.price')
              }}</a>
            </li>
            <li>
              <a href="#contact" class="footer-link" @click="handleClick($event, 'contact')">{{
                $t('nav.contact')
              }}</a>
            </li>
            <li>
              <a href="#faq" class="footer-link" @click="handleClick($event, 'faq')">{{
                $t('nav.faq')
              }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <hr class="footer-divider" />
    <div class="footer-bottom">
      <span>{{ $t('footer.copyright') }}</span>
      <RouterLink to="/impressum" class="footer-bottom-link">{{
        $t('footer.impressum')
      }}</RouterLink>
      <RouterLink to="/datenschutz" class="footer-bottom-link">{{
        $t('footer.datenschutz')
      }}</RouterLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { handleAnchorClick } from '../utils/scrollUtils'

const handleClick = (event: Event, targetId: string) => {
  handleAnchorClick(event, targetId)
}
</script>

<style lang="scss" scoped>
.footer {
  width: calc(100vw - 2rem);
  background-color: $bg-secondary;
  color: $text-primary;
  font-family: $font-family;
  margin: 1rem;
  padding: 2rem 0 1rem 0;
  box-sizing: border-box;
  border-radius: 1rem;

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    max-width: 1600px;
    margin: 0 auto 0 auto;

    @media (max-width: 900px) {
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .footer-left {
      @media (max-width: 900px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .footer-title {
          text-align: center;
          padding: 0;
        }
      }

      .footer-title {
        color: $text-primary;
        font-family: 'Just Another Hand', cursive;
        font-size: 2.5rem;
        line-height: 3rem;
        padding-top: 0.5rem;
        text-decoration: none;
      }
    }
    .footer-right {
      @media (max-width: 900px) {
        display: none;
      }

      nav ul {
        display: flex;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .footer-link {
        color: $text-primary;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 500;
        transition: color 0.2s;
        cursor: pointer;
        &:hover {
          color: $color-secondary;
        }
      }
    }
  }
  .footer-divider {
    border: none;
    border-top: 1px solid $text-primary;
    margin: 1.5rem auto 1.5rem auto;
    width: 90vw;
    max-width: 1600px;

    @media (max-width: 900px) {
      width: 80vw;
    }
  }

  .footer-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    font-size: 1rem;
    color: $text-secondary;
    flex-wrap: wrap;

    span {
      color: $text-secondary;
    }
    .footer-bottom-link {
      color: $text-primary;
      text-decoration: underline;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      font-size: 1rem;
      &:hover {
        color: $color-secondary;
      }
    }
  }
}
</style>
