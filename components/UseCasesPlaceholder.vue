<template>
  <div v-else class="grid grid-cols-3 gap-4">
    <div v-for="item in 12" :key="item" class="rounded-lg px-9 py-8 animate-pulse border border-gray-300">
      <div class="text-black font-semibold text-2xl mb-4 capitalize bg-gray-300 h-4 w-1/2"></div>
      <div class="text-black font-medium bg-gray-300 h-8 w-full"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UseCasesPlaceholder"
}
</script>

<style scoped>

</style>
