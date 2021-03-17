<template>
  <div class="mb-16 md:mb-18">
    <h3 class="text-black font-semibold mb-8 md:leading-7 md:mb-10">Supported Protocols</h3>
    <div id="protocols" class="md:grid md:grid-cols-3 md:gap-6">
      <div class="protocol">
        <div class="rounded-lg p-6">
          <div class="flex items-center">
            <img src="~/assets/images/protocols/makerdao.svg" alt="">
            <div class="text-2xl ml-4 font-semibold">Maker Dao</div>
          </div>
        </div>
      </div>
      <div class="protocol">
        <div class="rounded-lg p-6">
          <div class="flex items-center">
            <img src="~/assets/images/protocols/compound.svg" alt="">
            <div class="text-2xl ml-4 font-semibold">Compound</div>
          </div>
        </div>
      </div>
      <div class="protocol">
        <div class="rounded-lg p-6">
          <div class="flex items-center">
            <img src="~/assets/images/protocols/uniswap.svg" alt="">
            <div class="text-2xl ml-4 font-semibold">Uniswap</div>
          </div>
        </div>
      </div>
      <div class="protocol">
        <div class="rounded-lg p-6">
          <div class="flex items-center">
            <img src="~/assets/images/protocols/kyber.svg" alt="">
            <div class="text-2xl ml-4 font-semibold">Kyber</div>
          </div>
        </div>
      </div>
      <div class="protocol">
        <div class="rounded-lg p-6">
          <div class="flex items-center">
            <img src="~/assets/images/protocols/curve.svg" alt="">
            <div class="text-2xl ml-4 font-semibold">Curve</div>
          </div>
        </div>
      </div>
      <div class="protocol">
        <div class="rounded-lg p-6">
          <div class="flex items-center">
            <img src="~/assets/images/protocols/gobbler.svg" alt="">
            <div class="text-2xl ml-4 font-semibold">dYdX</div>
          </div>
        </div>
      </div>
      <div class="protocol">
        <div class="rounded-lg p-6">
          <div class="flex items-center">
            <img src="~/assets/images/protocols/aave.svg" alt="">
            <div class="text-2xl ml-4 font-semibold">Aave</div>
          </div>
        </div>
      </div>
      <div class="protocol">
        <div class="rounded-lg p-6">
          <div class="flex items-center">
            <img src="~/assets/images/protocols/1inch.svg" alt="">
            <div class="text-2xl ml-4 font-semibold">1inch</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Protocols",
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
