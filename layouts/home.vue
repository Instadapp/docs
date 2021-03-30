<template>
  <div class="font-montserrat tracking-tighter">
    <Header></Header>
    <Nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
import {defineComponent, useMeta} from "@nuxtjs/composition-api";

export default defineComponent({
  name: 'DefaultLayout',
  head: {},
  setup() {
    const {title} = useMeta()
    title.value = 'Instadapp Docs'
  }
})
</script>

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
