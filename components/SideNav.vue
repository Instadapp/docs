<template>
  <div id="sidenav">
    <ul>
      <li class="mb-6">
        <NuxtLink :class="{'active': $route.path==='/getstarted'}" to="/getstarted"
                  class="text-black font-semibold text-lg leading-none">Get Started
        </NuxtLink>
      </li>
      <li class="mb-6">
        <NuxtLink :class="{'active': $route.path.includes('/connectors')}" to="/connectors"
                  class="font-semibold text-lg text-black leading-none">
          Connectors
        </NuxtLink>
        <ul v-if="$route.path.includes('/connectors')" class="mt-5 pl-6 leading-none">
          <li class="mb-2">
            <NuxtLink class="text-gray-400 text-sm font-medium child-link" to="/connectors/basic">Basic</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink class="text-gray-400 text-sm font-medium child-link" to="/connectors/instapool">Instapool
            </NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/connectors/authority" class="text-gray-400 text-sm font-medium child-link">Authority
            </NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/connectors/comp" class="text-gray-400 text-sm font-medium child-link">Comp</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/connectors/curve-susd" class="text-gray-400 text-sm font-medium child-link">Curve sUSD
            </NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/connectors/compound" class="text-gray-400 text-sm font-medium child-link">Compound</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/connectors/maker-dao" class="text-gray-400 text-sm font-medium child-link">MakerDAO
            </NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/connectors/aave" class="text-gray-400 text-sm font-medium child-link">Aave</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/connectors/oasis-dex" class="text-gray-400 text-sm font-medium child-link">OasisDEX
            </NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/connectors/kyber" class="text-gray-400 text-sm font-medium child-link">Kyber</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/connectors/curve-sbtc" class="text-gray-400 text-sm font-medium child-link">Curve sBTC
            </NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/connectors/curve-y" class="text-gray-400 text-sm font-medium child-link">Curve Y</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/connectors/dydx" class="text-gray-400 text-sm font-medium child-link">dYdX</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/connectors/1-inch" class="text-gray-400 text-sm font-medium child-link">1inch</NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/connectors/uniswap" class="text-gray-400 text-sm font-medium child-link">Uniswap</NuxtLink>
          </li>
        </ul>
      </li>
      <li class="mb-6">
        <NuxtLink to="/usecases" :class="{'active': $route.path.includes('/usecases')}"
                  class="font-semibold text-lg text-black mb-6 leading-none">Use Cases
        </NuxtLink>
      </li>
      <!--      <li class="mb-6">-->
      <!--        <NuxtLink class="font-semibold text-lg text-black leading-none" to="/">Resolvers</NuxtLink>-->
      <!--      </li>-->
      <!--      <li class="mb-6">-->
      <!--        <NuxtLink class="font-semibold text-lg text-black leading-none" to="/">Security</NuxtLink>-->
      <!--      </li>-->
    </ul>
  </div>
</template>

<script>
import {defineComponent} from "@nuxtjs/composition-api";

export default defineComponent({
  name: 'SideNav',
})
</script>

<style scoped lang="scss">
.active {
  position: relative;

  &::before {
    content: '';
    @apply text-blue absolute h-1.5 w-1.5 flex items-center justify-center rounded-full top-1.5 -left-7 bg-blue;
  }
}

#sidenav {
  .child-link {
    &.nuxt-link-exact-active {
      @apply text-blue;
    }
  }
}
</style>
