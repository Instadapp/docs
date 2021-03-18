<template>
  <div class="font-montserrat">
    <Header></Header>
    <Nuxt/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/mixins.scss";

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
