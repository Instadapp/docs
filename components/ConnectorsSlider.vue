<template>
  <swiper id="protocols" :options="swiperOptions">
    <swiper-slide v-for="connector in connectors" :key="connector.id">
      <NuxtLink :to="`/connectors/${connector.slug}`">
        <div class="protocol">
          <div class="rounded-lg p-6">
            <div class="flex items-center">
              <img :src="require(`/assets/images/${connector.image}`)" alt="">
              <div class="text-2xl ml-4 font-semibold">{{ connector.name }}</div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide, directive} from "vue-awesome-swiper";
import 'swiper/swiper.scss'
import {defineComponent, computed, ref, onMounted} from "@nuxtjs/composition-api";

export default defineComponent({
  props: ['connectors'],
  components: {Swiper, SwiperSlide},
  directives: {
    swiper: directive
  },
  setup(props) {
    const swiperOptions = {
      breakpoints: {
        0: {
          slidesPerColumnFill: 'column',
          slidesPerView: 1.2,
          slidesPerColumn: 1,
          spaceBetween: 20,
          allowSlideNext: true,
          allowSlidePrev: true,
          allowTouchMove: true,
        },
        480: {
          slidesPerColumnFill: 'row',
          slidesPerView: 3,
          slidesPerColumn: 3,
          spaceBetween: 20,
          allowSlideNext: false,
          allowSlidePrev: false,
          allowTouchMove: false
        }
      }
    }
    return {
      swiperOptions,
    }
  }
})
</script>

<style lang="scss">
@import "~@/assets/scss/mixins.scss";

.swiper-slide {
  margin-top: 0 !important;
  @include md {
    margin-top: 20px !important;
  }
}

#protocols {
  .protocol {
    padding: 1px;
    border-radius: 8px;
    cursor: pointer;
    background: linear-gradient(180deg, #DADEF0 0%, #9BA4C4 100%);

    & > div {
      @apply bg-white duration-300 h-full;
      //&:hover {
      //  box-shadow: 0px 16px 24px rgba(4, 2, 33, 0.2);
      //}
    }
  }
}
</style>
