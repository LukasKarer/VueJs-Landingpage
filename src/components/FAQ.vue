<template>
  <div class="container">
    <h2>Frequently asked questions</h2>
    <div class="faqblock">
      <span
        class="question"
        v-for="question in questions"
        :key="question.id"
        @click="toggleQuestion($event.currentTarget)"
      >
        <div>
          <IconPlus class="img" />
          <span class="text">{{ question.text }}</span>
        </div>
        <span class="answer">{{ question.answer }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import IconPlus from './icons/IconPlus.svg'
import { ref } from 'vue'

export default {
  setup() {
    const questions = ref([
      { id: 1, text: 'A single simple question', answer: 'A single simple answer' },
      { id: 2, text: 'A single simple question', answer: 'A single simple answer' },
      { id: 3, text: 'A single simple question', answer: 'A single simple answer' },
      { id: 4, text: 'A single simple question', answer: 'A single simple answer' },
      { id: 5, text: 'A single simple question', answer: 'A single simple answer' }
    ])

    const toggleQuestion = (question) => {
      console.log(question)
      const icon = question.querySelector('.img') 
      const answer = question.querySelector('.answer') 

      if (answer.classList.contains('active')) {
        answer.classList.add('remove') 
        icon.classList.add('remove') 
        setTimeout(() => {
          answer.classList.remove('remove') 
          answer.classList.remove('active') 
          icon.classList.remove('remove') 
          icon.classList.remove('rotated') 
        }, 500)
      } else {
        answer.classList.add('active')
        icon.classList.add('rotated')
      } 
    }

    return {
      questions,
      toggleQuestion
    }
  },
  components: { IconPlus }
}
</script>

<style lang="scss" scoped>
div.container {
  display: flex;
  place-items: center;
  justify-content: center;
  flex-direction: row;
  width: calc(100vw - 4rem);
  margin: 2rem;
  border-radius: 1rem;
  font-family: $font-family;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 0;
  }

  h2 {
    max-width: 25vw;
    font-size: 2rem;
    color: $text-primary;
    text-align: center;
    margin-right: 1rem;

    @media (max-width: 1200px) {
      max-width: 80vw;
      margin-bottom: 1rem;
    }
  }

  div.faqblock {
    display: flex;
    place-items: center;
    justify-content: center;
    flex-direction: column;

    span.question {
      cursor: pointer;
      padding: 1rem;
      margin-bottom: 0.5rem;
      background-color: $bg-secondary;
      width: 40vw;
      font-size: 1.25rem;
      line-height: 2rem;

      @media (max-width: 1200px) {
        width: 80vw;
      }

      &:first-child {
        border-radius: 1rem 1rem 0 0;
      }
      &:last-child {
        border-radius: 0 0 1rem 1rem;
      }

      div {
        display: flex;
        place-items: initial;
        justify-content: initial;
        flex-direction: row;
      }

      .img {
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.25rem;
        transition: transform 0.2s ease;
        transform: rotate(0deg);
      }
      .img.rotated {
        animation: rotateRight ease 0.5s forwards;
      }
      .img.rotated.remove {
        animation: rotateLeft ease 0.5s forwards;
      }

      span.answer {
        width: calc(100% - 2rem);
        padding-left: 2rem;
        margin-top: 0.5rem;
        color: $text-secondary;
        display: none;
      }
      span.answer.active {
        display: block;
        animation: fadeIn ease-in 0.5s forwards;
      }
      span.answer.remove {
        animation: fadeOut ease-out 0.5s forwards;
      }
    }
  }
}

span {
  
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes rotateRight {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(45deg);
  }
}
@keyframes rotateLeft {
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
