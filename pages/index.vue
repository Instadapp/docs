<template>
  <div>
    <div class="bg-black-dark text-white border-t border-blue pt-14 pb-20 px-4 md:px-60 md:pt-16">
      <h1 class="mb-8 font-semibold text-3xl w-1/2 md:w-full">Instadapp Developers</h1>
      <div class="grid gap-y-4 md:gap-y-0 md:grid-cols-3 md:gap-x-6">
        <div class="gradient-box">
          <div class="rounded-lg text-center py-8 px-13">
            <img class="mx-auto mb-4 md:mb-2" src="~/assets/images/rocket.svg" decoding="async" alt="">
            <div class="capitalize font-semibold text-2xl">Get started</div>
          </div>
        </div>
        <div class="gradient-box">
          <div class="rounded-lg text-center py-8 px-13">
            <img class="mx-auto mb-4 md:mb-2" src="~/assets/images/connect.svg" decoding="async" alt="">
            <div class="capitalize font-semibold text-2xl">Connectors</div>
          </div>
        </div>
        <div class="gradient-box">
          <div class="rounded-lg text-center py-8 px-13">
            <img class="mx-auto mb-4 md:mb-2" src="~/assets/images/suitcase.svg" decoding="async" alt="">
            <div class="capitalize font-semibold text-2xl">use cases</div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 py-16 md:mx-60 md:py-18">
      <div>
        <h2 class="text-blue capitalize md:leading-9 font-semibold md:mb-4">documentation</h2>
        <div class="text-black font-medium md:leading-7 text-2xl">Instadapp Developer Platform</div>
      </div>
      <hr class="mt-6 mb-10 md:mt-10 md:mb-15">
      <UseCases></UseCases>
      <Protocols></Protocols>
      <div class="md:text-right">
        <button class="blue-gradient w-full md:w-auto focus:outline-none">
          <div class="bg-blue text-white rounded text-sm pl-5 pr-6 pt-6 pb-5">
            <div class="flex items-center justify-between mb-3.5">
              <div>Next</div>
              <img class="inline-block align-middle" src="~/assets/images/right-arrow.svg" decoding="async" alt="">
            </div>
            <div class="font-medium text-lg text-left">Getting Started</div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "~/assets/scss/mixins.scss";

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
</style>
