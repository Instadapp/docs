<template>
  <div>
    <div class="text-black font-semibold text-lg mb-6">Get Started</div>
    <ul>
      <li class="font-semibold text-lg text-black active">
        Connectors
        <ul class="mt-5 pl-6">
          <li class="text-gray-400 font-medium mb-4">Basic</li>
          <li class="text-gray-400 font-medium mb-4">Instapool</li>
          <li class="text-gray-400 font-medium mb-4 text-blue">Authority</li>
          <li class="text-gray-400 font-medium mb-4">Comp</li>
          <li class="text-gray-400 font-medium mb-4">Curve sUSD</li>
          <li class="text-gray-400 font-medium mb-4">Compound</li>
          <li class="text-gray-400 font-medium mb-4">MakerDAO</li>
          <li class="text-gray-400 font-medium mb-4">Aave</li>
          <li class="text-gray-400 font-medium mb-4">OasisDEX</li>
          <li class="text-gray-400 font-medium mb-4">Kyber</li>
          <li class="text-gray-400 font-medium mb-4">Curve sBTC</li>
          <li class="text-gray-400 font-medium mb-4">Curve Y</li>
          <li class="text-gray-400 font-medium mb-4">dYdX</li>
          <li class="text-gray-400 font-medium mb-4">1inch</li>
          <li class="text-gray-400 font-medium mb-4">Uniswap</li>
        </ul>
      </li>
      <li class="font-semibold text-lg text-black mt-6">Use Cases</li>
      <li class="font-semibold text-lg text-black mt-6">Resolvers</li>
      <li class="font-semibold text-lg text-black mt-6">Security</li>
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

  &
  ::before {
    content: '';
    @apply text-blue absolute h-1.5 w-1.5 flex items-center justify-center rounded-full top-2.5 -left-7 bg-blue;
  }

}
</style>
