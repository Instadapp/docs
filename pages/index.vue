<template>
  <div>
    <div class="bg-black-dark text-white border-t border-blue md:px-60 md:pt-16 md:pb-20">
      <h1 class="md:mb-8 md:font-semibold md:text-3xl">Instadapp Developers</h1>
      <div class="md:grid md:grid-cols-3 md:gap-x-6">
        <div class="gradient-box rounded-lg md:text-center md:py-8 md:px-13">
          <img class="md:mx-auto md:mb-2" src="~/assets/images/rocket.svg" decoding="async" alt="">
          <div class="capitalize md:font-semibold md:text-2xl">Get started</div>
        </div>
        <div class="gradient-box rounded-lg md:text-center md:py-8 md:px-13">
          <img class="md:mx-auto md:mb-2" src="~/assets/images/connect.svg" decoding="async" alt="">
          <div class="capitalize md:font-semibold md:text-2xl">Connectors</div>
        </div>
        <div class="gradient-box rounded-lg md:text-center md:py-8 md:px-13">
          <img class="md:mx-auto md:mb-2" src="~/assets/images/suitcase.svg" decoding="async" alt="">
          <div class="capitalize md:font-semibold md:text-2xl">use cases</div>
        </div>
      </div>
    </div>
    <div class="md:mx-60 md:py-18">
      <div>
        <h2 class="text-blue capitalize md:leading-9 md:font-semibold md:mb-4">documentation</h2>
        <div class="text-black md:leading-7 md:font-medium md:text-2xl">Instadapp Developer Platform</div>
      </div>
      <hr class="md:mt-10 md:mb-15">
      <div class="md:mb-18">
        <h3 class="text-black md:leading-7 md:font-semibold md:mb-10">Start with your use case</h3>
        <div id="useCases" class="md:grid md:grid-cols-3 md:gap-6">
          <div>
            <div id="useCase1" class="md:rounded-lg md:px-9 md:py-8">
              <div class="text-black md:font-semibold md:text-2xl md:mb-4">Long ETH</div>
              <div class="text-black md:font-medium">Tap the upside spike in Ethereum price</div>
            </div>
          </div>
          <div>
            <div id="useCase2" class="md:rounded-lg md:px-9 md:py-8">
              <div class="text-black md:font-semibold md:text-2xl md:mb-4">Short DAI</div>
              <div class="text-black md:font-medium">Earn instant return & make DAI stable</div>
            </div>
          </div>
          <div>
            <div id="useCase3" class="md:rounded-lg md:px-9 md:py-8">
              <div class="text-black md:font-semibold md:text-2xl md:mb-4">Bridging</div>
              <div class="text-black md:font-medium">Port position b/w Maker & Compound</div>
            </div>
          </div>
          <div>
            <div id="useCase4" class="md:rounded-lg md:px-9 md:py-8">
              <div class="text-black md:font-semibold md:text-2xl md:mb-4">Long ETH</div>
              <div class="text-black md:font-medium">Tap the upside spike in Ethereum price</div>
            </div>
          </div>
          <div>
            <div id="useCase5" class="md:rounded-lg md:px-9 md:py-8">
              <div class="text-black md:font-semibold md:text-2xl md:mb-4">Short DAI</div>
              <div class="text-black md:font-medium">Earn instant return & make DAI stable</div>
            </div>
          </div>
          <div>
            <div id="useCase6" class="md:rounded-lg md:px-9 md:py-8">
              <div class="text-black md:font-semibold md:text-2xl md:mb-4">Bridging</div>
              <div class="text-black md:font-medium">Port position b/w Maker & Compound</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-black md:leading-7 md:font-semibold md:mb-10">Supported Protocols</h3>
        <div id="protocols" class="md:grid md:grid-cols-3 md:gap-6">
          <div class="protocol border border-gray-300 md:rounded-lg md:p-6">
            <div class="md:flex md:items-center">
              <img src="~/assets/images/protocols/makerdao.svg" alt="">
              <div class="md:text-2xl md:ml-4 md:font-semibold">Maker Dao</div>
            </div>
          </div>
          <div class="protocol border border-gray-300 md:rounded-lg md:p-6">
            <div class="md:flex md:items-center">
              <img src="~/assets/images/protocols/compound.svg" alt="">
              <div class="md:text-2xl md:ml-4 md:font-semibold">Compound</div>
            </div>
          </div>
          <div class="protocol border border-gray-300 md:rounded-lg md:p-6">
            <div class="md:flex md:items-center">
              <img src="~/assets/images/protocols/uniswap.svg" alt="">
              <div class="md:text-2xl md:ml-4 md:font-semibold">Uniswap</div>
            </div>
          </div>
          <div class="protocol border border-gray-300 md:rounded-lg md:p-6">
            <div class="md:flex md:items-center">
              <img src="~/assets/images/protocols/kyber.svg" alt="">
              <div class="md:text-2xl md:ml-4 md:font-semibold">Kyber</div>
            </div>
          </div>
          <div class="protocol border border-gray-300 md:rounded-lg md:p-6">
            <div class="md:flex md:items-center">
              <img src="~/assets/images/protocols/curve.svg" alt="">
              <div class="md:text-2xl md:ml-4 md:font-semibold">Curve</div>
            </div>
          </div>
          <div class="protocol border border-gray-300 md:rounded-lg md:p-6">
            <div class="md:flex md:items-center">
              <img src="~/assets/images/protocols/gobbler.svg" alt="">
              <div class="md:text-2xl md:ml-4 md:font-semibold">dYdX</div>
            </div>
          </div>
          <div class="protocol border border-gray-300 md:rounded-lg md:p-6">
            <div class="md:flex md:items-center">
              <img src="~/assets/images/protocols/aave.svg" alt="">
              <div class="md:text-2xl md:ml-4 md:font-semibold">Aave</div>
            </div>
          </div>
          <div class="protocol border border-gray-300 md:rounded-lg md:p-6">
            <div class="md:flex md:items-center">
              <img src="~/assets/images/protocols/1inch.svg" alt="">
              <div class="md:text-2xl md:ml-4 md:font-semibold">1inch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.gradient-box {
  border: 2px solid;
  cursor: pointer;
  border-image-source: linear-gradient(180deg, #3F538F 0%, #0C0D35 100%);
  border-image-slice: 1;
  @apply duration-200;
  &:hover {
    box-shadow: 0px 16px 24px rgba(4, 2, 33, 0.4);
  }
}

h2 {
  font-size: 40px;
}

h3 {
  font-size: 32px;
}

#useCases {
  #useCase1 {
    background: #D6E3F4;
  }

  #useCase2 {
    background: #CEEFE5;
  }

  #useCase3 {
    background: #F2E4C0;
  }

  #useCase4 {
    background: #E2D6F4;
  }

  #useCase5 {
    background: #EFCED8;
  }

  #useCase6 {
    background: #C0E6F2;
  }
}

#protocols {
  .protocol {
    //border: 1px solid;
    //border-image-source: linear-gradient(180deg, #DADEF0 0%, #9BA4C4 100%);
    //border-image-slice: 1;
    @apply duration-200 cursor-pointer;
    &:hover {
      box-shadow: 0px 16px 24px rgba(4, 2, 33, 0.2);
    }
  }
}
</style>
