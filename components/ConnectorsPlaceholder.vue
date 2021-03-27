<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="item in 9" :key="item" class="rounded-lg p-6 border border-gray-300">
      <div class="flex items-center">
        <div class="w-18 h-16 rounded-full flex items-center justify-center bg-gray-300"></div>
        <div class="text-2xl ml-4 font-semibold w-full h-8 bg-gray-300"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConnectorsPlaceholder"
}
</script>

<style scoped>

</style>
