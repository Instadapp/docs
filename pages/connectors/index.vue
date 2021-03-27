<template>
  <div>
    <Header>
      <template #sidebar>
        <img @click="openSidebar" class="md:hidden mr-4 cursor-pointer" src="~/assets/images/menu.svg" decoding="async"
             alt="">
      </template>
    </Header>
    <div class="md:px-14 md:py-18">
      <Sidebar></Sidebar>
      <div class="flex md:space-x-6">
        <div class="w-2/12 hidden md:block">
          <SideNav></SideNav>
        </div>
        <div class="py-16 px-4 md:px-0 md:py-0 md:w-10/12">
          <div class="mb-10 md:mb-0">
            <h2 class="text-blue capitalize md:leading-9 font-semibold md:mb-4">Connectors</h2>
            <div class="text-black font-medium md:leading-7 text-2xl">Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </div>
          </div>
          <!--          <div class="md:hidden">-->
          <!--            <h4 class="font-semibold text-gray-400 uppercase mb-4">contents</h4>-->
          <!--            <ul>-->
          <!--              <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5 active">-->
          <!--                <a @click="scrollToView($event,'addAuthority')" href="#addAuthority">Add Authority</a>-->
          <!--              </li>-->
          <!--              <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5">-->
          <!--                <a @click="scrollToView($event,'removeAuthority')" href="#removeAuthority">Remove Authority</a>-->
          <!--              </li>-->
          <!--            </ul>-->
          <!--          </div>-->
          <hr class="mt-6 mb-10 md:mt-10 md:mb-15">
          <!--          <div class="flex items-center px-5 py-6 rounded-lg mb-5 bg-flashWhite text-PalatinatePurple">-->
          <!--            <img src="~/assets/images/clipboard.svg" decoding="async" alt="">-->
          <!--            <div class="text-lg ml-6">-->
          <!--              <span class="font-bold">Note:</span> You can run this guide directly from here by-->
          <!--              <NuxtLink class="text-blue" to="/">connecting to web3</NuxtLink>-->
          <!--              and opening up chrome console.-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="font-normal mb-14 md:mb-18">-->
          <!--            Auth connector triggers the methods adding and removing the DSA Authorities. You can view details like-->
          <!--            source-->
          <!--            code, ABIs on Etherscan.-->
          <!--          </div>-->
          <ConnectorsSlider :connectors="connectors"/>
          <!--          <div id="addAuthority" class="mb-14 md:mb-16">-->
          <!--            <div class="mb-8">-->
          <!--              <h3 class="text-black font-semibold mb-4 md:leading-7">Add Authority</h3>-->
          <!--              <div class="font-normal text-lg">Add Authority to DSA.</div>-->
          <!--            </div>-->
          <!--            <div class="code relative rounded-lg py-12 px-8 mb-8">-->
          <!--              <img @click="copyCode" class="absolute right-3 top-5 cursor-pointer" src="~/assets/images/copy.svg"-->
          <!--                   decoding="async"-->
          <!--                   alt="">-->
          <!--              <pre v-highlightjs="addAuthorityCode"><code class="javascript code"></code></pre>-->
          <!--            </div>-->
          <!--            <div class="grid md:grid-cols-3">-->
          <!--              <div class="mb-8 md:mb-0">-->
          <!--                <div class="font-medium text-lg text-black capitalize">parameter</div>-->
          <!--                <hr class="my-4">-->
          <!--                <div class="font-normal text-lg text-red-500">authority</div>-->
          <!--              </div>-->
          <!--              <div class="mb-8 md:mb-0">-->
          <!--                <div class="font-medium text-lg text-black capitalize">type</div>-->
          <!--                <hr class="my-4">-->
          <!--                <div class="font-normal text-lg text-black">address</div>-->
          <!--              </div>-->
          <!--              <div>-->
          <!--                <div class="font-medium text-lg text-black capitalize">Description</div>-->
          <!--                <hr class="my-4">-->
          <!--                <div class="font-normal text-lg text-black">The authority address.</div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div id="removeAuthority" class="mb-14 md:mb-16">-->
          <!--            <div class="mb-8">-->
          <!--              <h3 class="text-black font-semibold mb-4 md:leading-7">Remove Authority</h3>-->
          <!--              <div class="font-normal text-lg">Remove Authority to DSA.</div>-->
          <!--            </div>-->
          <!--            <div class="code relative rounded-lg py-12 px-8 mb-8">-->
          <!--              <img @click="copyCode" class="absolute right-3 top-5 cursor-pointer" src="~/assets/images/copy.svg"-->
          <!--                   decoding="async"-->
          <!--                   alt="">-->
          <!--              <pre v-highlightjs="removeAuthorityCode"><code class="javascript code"></code></pre>-->
          <!--            </div>-->
          <!--            <div class="grid md:grid-cols-3">-->
          <!--              <div class="mb-8 md:mb-0">-->
          <!--                <div class="font-medium text-lg text-black capitalize">parameter</div>-->
          <!--                <hr class="my-4">-->
          <!--                <div class="font-normal text-lg text-red-500">authority</div>-->
          <!--              </div>-->
          <!--              <div class="mb-8 md:mb-0">-->
          <!--                <div class="font-medium text-lg text-black capitalize">type</div>-->
          <!--                <hr class="my-4">-->
          <!--                <div class="font-normal text-lg text-black">address</div>-->
          <!--              </div>-->
          <!--              <div>-->
          <!--                <div class="font-medium text-lg text-black capitalize">Description</div>-->
          <!--                <hr class="my-4">-->
          <!--                <div class="font-normal text-lg text-black">The authority address.</div>-->
          <!--              </div>-->
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
        <!--                <a @click="scrollToView($event,'addAuthority')" href="#addAuthority">Add Authority</a>-->
        <!--              </li>-->
        <!--              <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5">-->
        <!--                <a @click="scrollToView($event,'removeAuthority')" href="#removeAuthority">Remove Authority</a>-->
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
import {defineComponent, useContext, useAsync} from '@nuxtjs/composition-api'
// import {copyCode} from "@/composables/copy";
// import {scrollToView} from "@/composables/scrollToView";
import {openSidebar} from "@/composables/openSidebar";

export default defineComponent({
  name: 'Connectors',
  setup() {
    const {$axios} = useContext()
    const connectors = useAsync(() => $axios.$get('connectors'));
    // const addAuthorityCode = "spells.add({\n" +
    //   "\tconnector: \"authority\",\n" +
    //   "\tmethod: \"add\",\n" +
    //   "\targs: [authority]\n" +
    //   "});"
    // const removeAuthorityCode = "spells.add({\n" +
    //   "\tconnector: \"authority\",\n" +
    //   "\tmethod: \"remove\",\n" +
    //   "\targs: [authority]\n" +
    //   "});"

    return {
      // copyCode,
      // scrollToView,
      openSidebar,
      // addAuthorityCode,
      // removeAuthorityCode
      connectors
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
}

.active {
  @apply text-black border-opacity-100;
}

</style>
