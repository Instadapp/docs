<template>
  <div class="md:px-14 md:py-18">
    <div class="flex">
      <div class="w-2/12"></div>
      <div class="w-8/12">
        <div>
          <h2 class="text-blue capitalize md:leading-9 font-semibold md:mb-4">Authority</h2>
          <div class="text-black font-medium md:leading-7 text-2xl">Manage Authorities to DSA</div>
        </div>
        <hr class="mt-6 mb-10 md:mt-10 md:mb-15">
        <div class="flex items-center px-5 py-6 rounded-lg mb-5">
          <img src="~/assets/images/clipboard.svg" decoding="async" alt="">
          <div class="font-bold text-lg ml-6">
            Note: You can run this guide directly from here by connecting to web3 and opening up chrome console.
          </div>
        </div>
        <div class="mb-18">
          Auth connector triggers the methods adding and removing the DSA Authorities. You can view details like source
          code, ABIs on Etherscan.
        </div>
        <div class="mb-16">
          <div class="mb-8">
            <h3 class="text-black font-semibold mb-8 md:leading-7 md:mb-10">Add Authority</h3>
            <div>Add Authority to DSA.</div>
          </div>
          <div class="px-12 py-8 mb-8">
            spells.add({
            connector: "authority",
            method: "add",
            args: [authority]
            });
          </div>
          <div class="grid grid-cols-3">
            <div>
              <div>parameter</div>
              <hr>
              <div>authority</div>
            </div>
            <div>
              <div>type</div>
              <hr>
              <div>address</div>
            </div>
            <div>
              <div>Description</div>
              <hr>
              <div>The authority address.</div>
            </div>
          </div>
        </div>
        <div class="mb-16">
          <div class="mb-8">
            <h3 class="text-black font-semibold mb-8 md:leading-7 md:mb-10">Remove Authority</h3>
            <div>Remove Authority to DSA.</div>
          </div>
          <div class="px-12 py-8 mb-8">
            spells.add({
            connector: "authority",
            method: "remove",
            args: [authority]
            });
          </div>
          <div class="grid grid-cols-3">
            <div>
              <div>parameter</div>
              <hr>
              <div>authority</div>
            </div>
            <div>
              <div>type</div>
              <hr>
              <div>address</div>
            </div>
            <div>
              <div>Description</div>
              <hr>
              <div>The authority address.</div>
            </div>
          </div>
        </div>
        <div class=""></div>
      </div>
      <div class="w-2/12"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Authority"
}
</script>

<style scoped>

</style>
