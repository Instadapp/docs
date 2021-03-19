<template>
  <div class="font-montserrat">
    <Nuxt/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/mixins.scss";

html, body {
  scroll-behavior: smooth;
}

.tooltip {
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
}

h2 {
  font-size: 32px;
  @include sm {
    font-size: 40px;
  }
}

h3 {
  font-size: 24px;
  @include sm {
    font-size: 32px;
  }
}
</style>
