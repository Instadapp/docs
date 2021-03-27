<template>
  <div>
    <Header></Header>
    <div class="bg-black-dark text-white border-t border-blue-900 pt-14 pb-20 px-4 md:px-60 md:pt-16">
      <h1 class="mb-8 font-semibold text-3xl w-1/2 md:w-full">Instadapp Developers</h1>
      <div class="grid gap-y-4 md:gap-y-0 md:grid-cols-3 md:gap-x-6">
        <NuxtLink to="/getstarted">
          <div class="gradient-box">
            <div class="rounded-lg text-center py-8 px-13">
              <img class="mx-auto mb-4 md:mb-2" src="~/assets/images/rocket.svg" decoding="async" alt="">
              <div class="capitalize font-semibold text-2xl">Get started</div>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/connectors">
          <div class="gradient-box">
            <div class="rounded-lg text-center py-8 px-13">
              <img class="mx-auto mb-4 md:mb-2" src="~/assets/images/connect.svg" decoding="async" alt="">
              <div class="capitalize font-semibold text-2xl">Connectors</div>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/usecases">
          <div class="gradient-box">
            <div class="rounded-lg text-center py-8 px-13">
              <img class="mx-auto mb-4 md:mb-2" src="~/assets/images/suitcase.svg" decoding="async" alt="">
              <div class="capitalize font-semibold text-2xl">use cases</div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="px-4 py-16 md:mx-60 md:py-18">
      <div>
        <h2 class="text-blue capitalize md:leading-9 font-semibold md:mb-4">documentation</h2>
        <div class="text-black font-medium md:leading-7 text-2xl">Instadapp Developer Platform</div>
      </div>
      <hr class="mt-6 mb-10 md:mt-10 md:mb-15">
      <div class="mb-16 md:mb-18">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-8 md:mb-10">
          <h3 class="text-black font-semibold md:leading-7">Start with your use case</h3>
          <NuxtLink to="/usecases"
                    class="self-start md:self-auto mt-4 md:mt-0 bg-blue text-white rounded focus:outline-none py-2 px-4 capitalize font-semibold md:text-sm">
            explore more
          </NuxtLink>
        </div>
        <UseCasesSlider :use-cases="useCases"/>
      </div>
      <div class="mb-16 md:mb-18">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-8 md:mb-10">
          <h3 class="text-black font-semibold md:leading-7">Supported Protocols</h3>
          <NuxtLink to="/connectors"
                    class="self-start md:self-auto mt-4 md:mt-0 bg-blue text-white rounded focus:outline-none py-2 px-4 capitalize font-semibold md:text-sm">
            explore more
          </NuxtLink>
        </div>
        <ConnectorsSlider :connectors="connectors"/>
      </div>
      <!--      <div class="md:text-right">-->
      <!--        <button class="blue-gradient w-full md:w-auto focus:outline-none">-->
      <!--          <div class="bg-blue text-white rounded text-sm pl-4 pr-6 pt-4 pb-6">-->
      <!--            <div class="flex items-center justify-between mb-3.5">-->
      <!--              <div>Next</div>-->
      <!--              <img class="inline-block align-middle" src="~/assets/images/right-arrow.svg" decoding="async" alt="">-->
      <!--            </div>-->
      <!--            <div class="font-medium text-lg text-left">Getting Started</div>-->
      <!--          </div>-->
      <!--        </button>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
import {defineComponent, useAsync, useContext, ref} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const {$axios} = useContext();
    const useCases = useAsync(() => $axios.$get('usecases'))
    const connectors = useAsync(() => $axios.$get('connectors?_limit=6'))
    return {
      useCases,
      connectors
    }
  }
})
</script>

<style lang="scss">
@import "~@/assets/scss/mixins.scss";

.gradient-box {
  background: linear-gradient(180deg, #3F538F 0%, #0C0D35 100%);
  padding: 2px;
  border-radius: 8px;
  cursor: pointer;

  & > div {
    @apply bg-black-dark h-full;
  }

  &:hover {
    box-shadow: 0px 16px 24px rgba(4, 2, 33, 0.4);
  }
}

.blue-gradient {
  padding: 1px;
  background: linear-gradient(180deg, #50A1FF 0%, #0E18FF 100%);
  border-radius: 4px;
}

h2 {
  font-size: 32px;
  @include sm {
    font-size: 40px;
  }
}

h3 {
  font-size: 24px;
  @include sm {
    font-size: 32px;
  }
}
</style>
