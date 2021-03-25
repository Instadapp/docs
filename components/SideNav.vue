<template>
  <div>
    <div class="text-black font-semibold text-lg mb-6">Get Started</div>
    <ul>
      <li class="font-semibold text-lg text-black active leading-none">
        Connectors
        <ul class="mt-5 pl-6">
          <li class="text-gray-400 font-medium mb-4 leading-none">Basic</li>
          <li class="text-gray-400 font-medium mb-4 leading-none">Instapool</li>
          <li class="text-gray-400 font-medium mb-4 leading-none text-blue">Authority</li>
          <li class="text-gray-400 font-medium mb-4 leading-none">Comp</li>
          <li class="text-gray-400 font-medium mb-4 leading-none">Curve sUSD</li>
          <li class="text-gray-400 font-medium mb-4 leading-none">Compound</li>
          <li class="text-gray-400 font-medium mb-4 leading-none">MakerDAO</li>
          <li class="text-gray-400 font-medium mb-4 leading-none">Aave</li>
          <li class="text-gray-400 font-medium mb-4 leading-none">OasisDEX</li>
          <li class="text-gray-400 font-medium mb-4 leading-none">Kyber</li>
          <li class="text-gray-400 font-medium mb-4 leading-none">Curve sBTC</li>
          <li class="text-gray-400 font-medium mb-4 leading-none">Curve Y</li>
          <li class="text-gray-400 font-medium mb-4 leading-none">dYdX</li>
          <li class="text-gray-400 font-medium mb-4 leading-none">1inch</li>
          <li class="text-gray-400 font-medium mb-4 leading-none">Uniswap</li>
        </ul>
      </li>
      <li class="font-semibold text-lg text-black mt-6 leading-none">Use Cases</li>
      <li class="font-semibold text-lg text-black mt-6 leading-none">Resolvers</li>
      <li class="font-semibold text-lg text-black mt-6 leading-none">Security</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideNav"
}
</script>

<style scoped lang="scss">
.active {
  position: relative;

  &::before {
    content: '';
    @apply text-blue absolute h-1.5 w-1.5 flex items-center justify-center rounded-full top-1.5 -left-7 bg-blue;
  }

}
</style>
