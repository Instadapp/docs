<template>
  <div id="sidebar"
       class="h-full shadow-lg bg-white w-0 fixed z-10 top-0 left-0 overflow-x-hidden overflow-y-auto transition-all duration-300 block md:hidden">
    <div class="flex items-center border-b border-blue px-5 py-6 mb-8">
      <img @click="closeSidebar" class="cursor-pointer" src="~/assets/images/close.svg" decoding="async" alt="">
      <NuxtLink class="flex items-center ml-10" to="/">
        <img class="inline-block" src="~/assets/images/logo.svg" alt="">
        <span class="uppercase text-black font-bold text-lg ml-1.5">Developers</span>
      </NuxtLink>
    </div>
    <SideNav class="pl-10"></SideNav>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    closeSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.style.width = '0'
    }
  }
}
</script>

<style scoped>

</style>
