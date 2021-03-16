<template>
  <div class="bg-black-dark md:px-14 md:py-4 md:flex md:items-center md:justify-between">
    <NuxtLink class="md:flex md:items-center" to="/">
      <img class="inline-block" src="~/assets/images/logo.svg" alt="">
      <span class="uppercase text-white md:font-bold md:text-lg md:ml-1.5">Developers</span>
    </NuxtLink>
    <button class="bg-blue text-white rounded focus:outline-none md:text-sm md:font-semibold md:py-2 md:px-4">start now
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
