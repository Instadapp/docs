<template>
  <div class="bg-black-dark p-4 flex items-center justify-between md:px-14 md:py-4 ">
    <div class="flex">
      <slot name="sidebar"></slot>
      <NuxtLink class="md:flex md:items-center" to="/">
        <img class="inline-block" src="~/assets/images/logo.svg" alt="">
        <span class="uppercase text-white hidden md:block md:font-extrabold md:text-xl md:ml-1.5">Developers</span>
      </NuxtLink>
    </div>
    <button class="bg-blue text-white rounded focus:outline-none py-2 px-4 capitalize font-semibold md:text-sm md:">start now
      <img class="inline-block align-middle" src="~/assets/images/right-arrow.svg" decoding="async" alt=""></button>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
