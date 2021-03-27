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
          <hr class="mt-6 mb-10 md:mt-10 md:mb-15">
          <ConnectorsSlider v-if="!$fetchState.pending" :connectors="connectors"/>
          <ConnectorsPlaceholder v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, useContext, useAsync, useFetch, ref} from '@nuxtjs/composition-api'
import {openSidebar} from "@/composables/openSidebar";

export default defineComponent({
  name: 'Connectors',
  setup() {
    const {$axios} = useContext()
    const connectors = ref([]);
    const {fetch, fetchState} = useFetch(async () => {
      connectors.value = await $axios.$get('connectors')
    });
    return {
      openSidebar,
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
