<template>
  <div>
    <ul>
      <li class="mb-6">
        <NuxtLink :class="{'active': $route.path==='/getstarted'}" to="/getstarted" class="text-black font-semibold text-lg leading-none">Get Started</NuxtLink>
      </li>
      <li class="mb-6">
        <NuxtLink :class="{'active': $route.path==='/connectors'}" to="/connectors"
                  class="font-semibold text-lg text-black leading-none">
          Connectors
        </NuxtLink>
        <ul v-if="$route.path==='/connectors'" class="mt-5 pl-6 leading-none">
          <li class="mb-2">
            <NuxtLink class="text-gray-400 text-sm font-medium" to="/">Basic</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink class="text-gray-400 text-sm font-medium" to="/">Instapool</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-400 text-sm font-medium">Authority</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-400 text-sm font-medium">Comp</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-400 text-sm font-medium">Curve sUSD</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-400 text-sm font-medium">Compound</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-400 text-sm font-medium">MakerDAO</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-400 text-sm font-medium">Aave</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-400 text-sm font-medium">OasisDEX</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-400 text-sm font-medium">Kyber</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-400 text-sm font-medium">Curve sBTC</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-400 text-sm font-medium">Curve Y</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-400 text-sm font-medium">dYdX</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-400 text-sm font-medium">1inch</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-400 text-sm font-medium">Uniswap</NuxtLink>
          </li>
        </ul>
      </li>
      <li class="mb-6">
        <NuxtLink to="/usecases" :class="{'active': $route.path==='/usecases'}"
                  class="font-semibold text-lg text-black mb-6 leading-none">Use Cases
        </NuxtLink>
      </li>
      <li class="mb-6">
        <NuxtLink class="font-semibold text-lg text-black leading-none" to="/">Resolvers</NuxtLink>
      </li>
      <li class="mb-6">
        <NuxtLink class="font-semibold text-lg text-black leading-none" to="/">Security</NuxtLink>
      </li>
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
