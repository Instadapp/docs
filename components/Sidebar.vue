<template>
  <div
    :class="[sidebarOpened ? 'w-4/5' : 'w-0']"
    class="h-full shadow-lg bg-white fixed z-10 top-0 left-0 overflow-x-hidden overflow-y-auto transition-all duration-300 block md:hidden"
  >
    <div class="flex items-center border-b border-blue px-5 py-6">
      <img
        @click="close"
        class="cursor-pointer"
        src="~/assets/images/close.svg"
        decoding="async"
        alt=""
      >
      <NuxtLink
        class="flex items-center ml-10"
        to="/"
      >
        <img
          class="inline-block"
          src="~/assets/images/logo.svg"
          alt=""
        >
        <span class="uppercase text-black font-bold text-lg ml-1.5">Developers</span>
      </NuxtLink>
    </div>
    <SideNav class="pl-10 pt-8 pb-10"></SideNav>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useSidebar } from "~/composables/useSidebar"

export default defineComponent({
  name: "Sidebar",
  setup() {
    const { close, opened } = useSidebar();

    return {
      close,
      sidebarOpened: opened
    }
  }
})
</script>

<style scoped>
</style>
