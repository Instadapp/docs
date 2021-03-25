<template>
  <div>
    <Header></Header>
    <div class="md:mx-14 md:py-12">
      <nuxt-content :document="docs"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "getStarted",
  data() {
    return {
      docs: ''
    }
  },
  async created() {
    const docs = await this.$content('home').only(['body']).fetch();
    this.docs = docs;
  }
}
</script>

<style scoped>

</style>
