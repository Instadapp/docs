<template>
  <div class="md:px-14 md:py-18">
    <div class="flex md:space-x-6">
      <div class="w-2/12 hidden md:block">
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
      <div class="py-16 px-4 md:px-0 md:py-0 md:w-8/12">
        <div class="mb-10 md:mb-0">
          <h2 class="text-blue capitalize md:leading-9 font-semibold md:mb-4">Authority</h2>
          <div class="text-black font-medium md:leading-7 text-2xl">Manage Authorities to DSA</div>
        </div>
        <div class="md:hidden">
          <h4 class="font-semibold text-gray-400 uppercase mb-4">contents</h4>
          <ul>
            <li class="text-black font-medium pb-2 border-l-2 border-gray-400 pl-5">Add Authority</li>
            <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5">Remove
              Authority
            </li>
          </ul>
        </div>
        <hr class="mt-6 mb-10 md:mt-10 md:mb-15">
        <div id="note" class="flex items-center px-5 py-6 rounded-lg mb-5">
          <img src="~/assets/images/clipboard.svg" decoding="async" alt="">
          <div class="text-lg ml-6">
            <span class="font-bold">Note:</span> You can run this guide directly from here by
            <NuxtLink class="text-blue" to="/">connecting to web3</NuxtLink>
            and opening up chrome console.
          </div>
        </div>
        <div class="font-normal mb-14 md:mb-18">
          Auth connector triggers the methods adding and removing the DSA Authorities. You can view details like source
          code, ABIs on Etherscan.
        </div>
        <div class="mb-14 md:mb-16">
          <div class="mb-8">
            <h3 class="text-black font-semibold mb-4 md:leading-7">Add Authority</h3>
            <div class="font-normal text-lg">Add Authority to DSA.</div>
          </div>
          <div class="code relative rounded-lg py-12 px-8 mb-8">
            <img @click="copyCode" class="absolute right-3 top-5 cursor-pointer" src="~/assets/images/copy.svg"
                 decoding="async"
                 alt="">
            <pre v-highlightjs="addAuthorityCode"><code class="javascript code"></code></pre>
          </div>
          <div class="grid md:grid-cols-3">
            <div class="mb-8 md:mb-0">
              <div class="font-medium text-lg text-black capitalize">parameter</div>
              <hr class="my-4">
              <div class="font-normal text-lg text-red-500">authority</div>
            </div>
            <div class="mb-8 md:mb-0">
              <div class="font-medium text-lg text-black capitalize">type</div>
              <hr class="my-4">
              <div class="font-normal text-lg text-black">address</div>
            </div>
            <div>
              <div class="font-medium text-lg text-black capitalize">Description</div>
              <hr class="my-4">
              <div class="font-normal text-lg text-black">The authority address.</div>
            </div>
          </div>
        </div>
        <div class="mb-14 md:mb-16">
          <div class="mb-8">
            <h3 class="text-black font-semibold mb-4 md:leading-7">Remove Authority</h3>
            <div class="font-normal text-lg">Remove Authority to DSA.</div>
          </div>
          <div class="code relative rounded-lg py-12 px-8 mb-8">
            <img @click="copyCode" class="absolute right-3 top-5 cursor-pointer" src="~/assets/images/copy.svg"
                 decoding="async"
                 alt="">
            <pre v-highlightjs="removeAuthorityCode"><code class="javascript code"></code></pre>
          </div>
          <div class="grid md:grid-cols-3">
            <div class="mb-8 md:mb-0">
              <div class="font-medium text-lg text-black capitalize">parameter</div>
              <hr class="my-4">
              <div class="font-normal text-lg text-red-500">authority</div>
            </div>
            <div class="mb-8 md:mb-0">
              <div class="font-medium text-lg text-black capitalize">type</div>
              <hr class="my-4">
              <div class="font-normal text-lg text-black">address</div>
            </div>
            <div>
              <div class="font-medium text-lg text-black capitalize">Description</div>
              <hr class="my-4">
              <div class="font-normal text-lg text-black">The authority address.</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between">
          <button class="silver-border-gradient order-2 md:order-1 w-full md:w-auto focus:outline-none">
            <div class="text-black bg-white rounded text-sm pl-4 pr-6 pt-4 pb-6">
              <div class="flex items-center justify-between mb-3.5">
                <img class="inline-block align-middle" src="~/assets/images/left-arrow.svg" decoding="async" alt="">
                <div>Previous</div>
              </div>
              <div class="font-medium text-lg text-right md:text-left">Getting Started</div>
            </div>
          </button>
          <button class="blue-gradient order-1 mb-6 md:mb-0 md:order-2 w-full md:w-auto focus:outline-none">
            <div class="bg-blue text-white rounded text-sm pl-4 pr-6 pt-4 pb-6">
              <div class="flex items-center justify-between mb-3.5">
                <div>Next</div>
                <img class="inline-block align-middle" src="~/assets/images/right-arrow.svg" decoding="async" alt="">
              </div>
              <div class="font-medium text-lg text-left">Getting Started</div>
            </div>
          </button>
        </div>
      </div>
      <div class="w-2/12 hidden md:block">
        <h4 class="font-semibold text-gray-400 uppercase mb-4">contents</h4>
        <ul>
          <li class="text-black font-medium pb-2 border-l-2 border-gray-400 pl-5">Add Authority</li>
          <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5">Remove
            Authority
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/vs.css'

export default {
  name: "Authority",
  data() {
    return {
      addAuthorityCode: "spells.add({\n" +
        "\tconnector: \"authority\",\n" +
        "\tmethod: \"add\",\n" +
        "\targs: [authority]\n" +
        "});",
      removeAuthorityCode: "spells.add({\n" +
        "\tconnector: \"authority\",\n" +
        "\tmethod: \"remove\",\n" +
        "\targs: [authority]\n" +
        "});",
    }
  },
  methods: {
    copyCode(e) {
      const code = e.target.nextElementSibling.firstChild;
      const temp = document.createElement('textarea')
      document.body.appendChild(temp)
      temp.value = code.innerText;
      temp.select()
      document.execCommand('copy')
      document.body.removeChild(temp)
    }
  }
}
</script>

<style scoped lang="scss">
.silver-border-gradient {
  padding: 1px;
  border-radius: 6px;
  cursor: pointer;
  background: linear-gradient(180deg, #DADEF0 0%, #9BA4C4 100%);
}

#note {
  background: #E8F4F6;
  color: #1595A9;
}

.code {
  background: #F6F8FF;
}

.active {
  position: relative;

  &::before {
    content: '';
    @apply text-blue absolute h-1.5 w-1.5 flex items-center justify-center rounded-full top-2.5 -left-7 bg-blue;
  }
}
</style>
