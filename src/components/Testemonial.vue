<template>
  <div>
    <strong>
      <p>“</p>
      {{ title }}
    </strong>
    <p>
      {{ msg }}
    </p>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Testemonial',
  props: {
    title: String,
    msg: String,
    name: String
  }
}
</script>

<style lang="scss" scoped>
div {
  font-family: $font-family;
  margin: 3rem auto 3rem;
  text-align: center;
  font-size: 1.25rem;
  max-width: 50vw;

  @media (max-width: 900px) {
    max-width: 80vw;
  }

  strong {
    font-size: 1.5rem;
    color: $text-primary;

    p {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 3rem;
      line-height: 2rem;
    }
  }
  span {
    font-size: 1rem;
    color: $text-secondary;
  }
}
</style>
