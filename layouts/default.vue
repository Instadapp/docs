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
.silver-border-gradient {
  padding: 1px;
  border-radius: 6px;
  cursor: pointer;
  background: linear-gradient(180deg, #DADEF0 0%, #9BA4C4 100%);
}
</style>
