<template>
  <div class="font-montserrat tracking-tighter">
    <Header>
      <template #sidebar>
        <img
          @click="openSidebar"
          class="md:hidden mr-4 cursor-pointer"
          src="~/assets/images/menu.svg"
          decoding="async"
          alt=""
        >
      </template>
    </Header>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useSidebar } from "~/composables/useSidebar";

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
      const { open : openSidebar } = useSidebar();

    return {
      openSidebar
    }
  }
})
</script>

<style lang="scss">
@import "~/assets/scss/mixins.scss";

html,
body {
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
  background: linear-gradient(180deg, #dadef0 0%, #9ba4c4 100%);
}
</style>
