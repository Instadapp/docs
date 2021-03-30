<template>
  <div>
    <div class="md:px-14 md:py-18">
      <Sidebar></Sidebar>
      <div class="flex md:space-x-6">
        <div class="w-2/12 hidden md:block">
          <SideNav></SideNav>
        </div>
        <div class="py-16 px-4 md:px-0 md:py-0 md:w-10/12">
          <div class="mb-10 md:mb-0">
            <h2 class="text-blue capitalize md:leading-9 font-semibold md:mb-4">Use Cases</h2>
            <div class="text-black font-medium md:leading-7 text-2xl">Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </div>
          </div>
          <!--          <div class="md:hidden">-->
          <!--            <h4 class="font-semibold text-gray-400 uppercase mb-4">contents</h4>-->
          <!--            <ul>-->
          <!--              <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5 active">-->
          <!--                <a @click="scrollToView($event,'step1')" href="#step1">Step 1</a>-->
          <!--              </li>-->
          <!--              <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5">-->
          <!--                <a @click="scrollToView($event,'step2')" href="#step2">Step 2</a>-->
          <!--              </li>-->
          <!--              <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5">-->
          <!--                <a @click="scrollToView($event,'step3')" href="#step3">Step 3</a>-->
          <!--              </li>-->
          <!--            </ul>-->
          <!--          </div>-->
          <hr class="mt-6 mb-6 md:mt-10 md:mb-15">
          <!--          <div class="flex items-center px-5 py-6 rounded-lg mb-16 bg-flashWhite text-PalatinatePurple">-->
          <!--            <img src="~/assets/images/clipboard.svg" decoding="async" alt="">-->
          <!--            <div class="text-lg ml-6">-->
          <!--              <span class="font-bold">Note:</span> You can run this guide directly from here by-->
          <!--              <NuxtLink class="text-blue" to="/">connecting to web3</NuxtLink>-->
          <!--              and opening up chrome console.-->
          <!--            </div>-->
          <!--          </div>-->
          <UseCasesSlider v-if="!$fetchState.pending" :show-all="true" :use-cases="useCases"/>
          <UseCasesPlaceholder v-else/>
          <!--          <div id="step1" class="mb-14 md:mb-16">-->
          <!--            <div class="py-2 px-4 text-blue rounded text-lg font-semibold bg-flashWhite inline-block mb-4">step 1</div>-->
          <!--            <div class="mb-8">-->
          <!--              <h3 class="text-blue font-semibold mb-4 underline md:leading-7">Installation</h3>-->
          <!--              <div class="font-normal text-lg">or just use your browser console.</div>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div id="step2" class="mb-14 md:mb-16">-->
          <!--            <div class="py-2 px-4 text-blue rounded text-lg font-semibold bg-flashWhite inline-block mb-4">step 2</div>-->
          <!--            <div class="">-->
          <!--              <h3 class="text-blue underline font-semibold md:leading-7">Setup Account</h3>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div id="step3" class="mb-8 md:mb-8">-->
          <!--            <div class="py-2 px-4 text-blue rounded text-lg font-semibold bg-flashWhite inline-block mb-4">step 3</div>-->
          <!--            <h3 class="text-black font-semibold md:leading-7 mb-4">Fulfill use case</h3>-->
          <!--            <div class="text-lg font-normal">-->
          <!--              <p class="mb-8">-->
          <!--                Trigger the following uniquely designed spells to fulfill this use case. Check-->
          <!--                <NuxtLink class="text-blue font-semibold" to="/">this section</NuxtLink>-->
          <!--                for generic-->
          <!--                details around casting spells.-->
          <!--              </p>-->
          <!--              <p> The DSA will cast the spells across the-->
          <!--                <NuxtLink class="text-blue font-semibold" to="/">MakerDAO</NuxtLink>-->
          <!--                ,-->
          <!--                <NuxtLink class="text-blue font-semibold" to="/">OasisDEX</NuxtLink>-->
          <!--                and-->
          <!--                <NuxtLink class="text-blue font-semibold" to="/">Instapool</NuxtLink>-->
          <!--                index in the following-->
          <!--                sequence.-->
          <!--              </p>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="mb-14 md:mb-16">-->
          <!--            <div class="mb-8">-->
          <!--              <h4 class="text-black font-semibold mb-6 text-2xl">Benefits</h4>-->
          <!--              <ul class="list-disc ml-7 tracking-normal">-->
          <!--                <li class="font-normal mb-4 pl-5">When DAI > $1. Arbitrage benefit due to price difference of DAI &-->
          <!--                  USDC.-->
          <!--                </li>-->
          <!--                <li class="font-normal pl-5">Help make DAI stable.</li>-->
          <!--              </ul>-->
          <!--            </div>-->
          <!--            <div class="mb-8">-->
          <!--              <h4 class="text-black font-semibold mb-6 text-2xl">Recipe</h4>-->
          <!--              <ol class="list-decimal ml-7 tracking-normal">-->
          <!--                <li class="font-semibold mb-4 pl-5">Instapool: <span class="font-normal">borrow DAI</span></li>-->
          <!--                <li class="font-semibold mb-4 pl-5">OasisDEX: <span class="font-normal">swap DAI with USDC</span></li>-->
          <!--                <li class="font-semibold mb-4 pl-5">MakerDAO: <span class="font-normal">open USDC vault</span></li>-->
          <!--                <li class="font-semibold mb-4 pl-5">MakerDAO: <span class="font-normal">deposit USDC in vault</span>-->
          <!--                </li>-->
          <!--                <li class="font-semibold mb-4 pl-5">MakerDAO: <span class="font-normal">borrow DAI from vault</span>-->
          <!--                </li>-->
          <!--                <li class="font-semibold mb-4 pl-5">Instapool: <span class="font-normal">payback DAI</span></li>-->
          <!--              </ol>-->
          <!--            </div>-->
          <!--            <div class="mb-8">-->
          <!--              <h4 class="text-black font-semibold mb-6 text-2xl">Requirements</h4>-->
          <!--              <ul class="list-disc ml-7 tracking-normal">-->
          <!--                <li class="font-normal mb-4 pl-5">User should have base amount of USDC to perform the leverage.-->
          <!--                  Liquidation on Compound is 83.33% which means for 1 DAI borrowed, user needs to have the balance of-->
          <!--                  0.25 USDC for collateral to perform this spell.-->
          <!--                </li>-->
          <!--                <li class="font-normal pl-5">Maker vault minimum debt requirement is 20 DAI.</li>-->
          <!--              </ul>-->
          <!--            </div>-->
          <!--            <div class="code relative rounded-lg py-12 px-8 mb-8">-->
          <!--              <img @click="copyCode" class="absolute right-3 top-5 cursor-pointer" src="~/assets/images/copy.svg"-->
          <!--                   decoding="async"-->
          <!--                   alt="">-->
          <!--              <pre v-highlightjs="code"><code class="javascript code tracking-normal"></code></pre>-->
          <!--              &lt;!&ndash;              <pre class="md:hidden" v-highlightjs="code"><code class="javascript code"></code></pre>&ndash;&gt;-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="flex flex-col md:flex-row items-center justify-between">-->
          <!--            <button class="silver-border-gradient order-2 md:order-1 w-full md:w-auto focus:outline-none">-->
          <!--              <div class="text-black bg-white rounded text-sm pl-4 pr-6 pt-4 pb-6">-->
          <!--                <div class="flex items-center justify-between mb-3.5">-->
          <!--                  <img class="inline-block align-middle" src="~/assets/images/left-arrow.svg" decoding="async" alt="">-->
          <!--                  <div>Previous</div>-->
          <!--                </div>-->
          <!--                <div class="font-medium text-lg text-right md:text-left">Getting Started</div>-->
          <!--              </div>-->
          <!--            </button>-->
          <!--            <button class="blue-gradient order-1 mb-6 md:mb-0 md:order-2 w-full md:w-auto focus:outline-none">-->
          <!--              <div class="bg-blue text-white rounded text-sm pl-4 pr-6 pt-4 pb-6">-->
          <!--                <div class="flex items-center justify-between mb-3.5">-->
          <!--                  <div>Next</div>-->
          <!--                  <img class="inline-block align-middle" src="~/assets/images/right-arrow.svg" decoding="async" alt="">-->
          <!--                </div>-->
          <!--                <div class="font-medium text-lg text-left">Getting Started</div>-->
          <!--              </div>-->
          <!--            </button>-->
          <!--          </div>-->
        </div>
        <!--        <div class="w-2/12 hidden md:block">-->
        <!--          <div class="sticky top-0">-->
        <!--            <h4 class="font-semibold text-gray-400 uppercase mb-4">contents</h4>-->
        <!--            <ul>-->
        <!--              <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5 active">-->
        <!--                <a @click="scrollToView($event,'step1')" href="#step1">Step 1</a>-->
        <!--              </li>-->
        <!--              <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5">-->
        <!--                <a @click="scrollToView($event,'step2')" href="#step2">Step 2</a>-->
        <!--              </li>-->
        <!--              <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5">-->
        <!--                <a @click="scrollToView($event,'step3')" href="#step3">Step 3</a>-->
        <!--              </li>-->
        <!--            </ul>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
// import 'highlight.js/styles/vs.css'
import {defineComponent, ref, useContext, useFetch} from '@nuxtjs/composition-api'
// import {copyCode} from "@/composables/copy";
// import {scrollToView} from "@/composables/scrollToView";

export default defineComponent({
  setup() {
    const {$axios} = useContext()
    const useCases = ref([])
    // const useCases = useAsync(() => $axios.$get('usecases'));
    const {fetch, fetchState} = useFetch(async () => {
      useCases.value = await $axios.$get('/api/usecases');
    })
    return {
      useCases,
    }
  }
})
</script>

<style scoped lang="scss">
@import "~@/assets/scss/mixins.scss";

h2 {
  font-size: 32px;
  @include sm {
    font-size: 40px;
  }
}

h3 {
  font-size: 32px;
  @include sm {
    font-size: 32px;
  }
}

.code {
  background: #F6F8FF;
  white-space: pre-wrap;
  word-break: break-all;
}

.active {
  @apply text-black border-opacity-100;
}

ul, ol {
  li::marker {
    @apply text-blue;
  }
}
</style>
