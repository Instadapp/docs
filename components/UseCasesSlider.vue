<template>
  <swiper id="useCases" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="usecase in useCases" :key="usecase.id">
      <NuxtLink :to="`/usecases/${usecase.slug}`">
        <div :style="{backgroundColor: usecase.color}" class="rounded-lg px-9 py-8">
          <div class="text-black font-semibold text-2xl mb-4 capitalize">{{ usecase.title }}</div>
          <div class="text-black font-medium">{{ usecase.description }}</div>
        </div>
      </NuxtLink>
    </swiper-slide>
  </swiper>
</template>

<script>
import {directive, Swiper, SwiperSlide} from "vue-awesome-swiper";
import 'swiper/swiper.scss'
import {defineComponent} from "@nuxtjs/composition-api";

export default defineComponent({
  name: 'UseCasesSlider',
  props: {
    useCases: {
      type: Array,
    },
    showAll: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
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
          slidesPerColumn: props.showAll ? 4 : 2,
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

<style lang="scss" scoped>
//#useCases {
//  #useCase1 {
//    background: #D6E3F4;
//  }
//
//  #useCase2 {
//    background: #CEEFE5;
//  }
//
//  #useCase3 {
//    background: #F2E4C0;
//  }
//
//  #useCase4 {
//    background: #E2D6F4;
//  }
//
//  #useCase5 {
//    background: #EFCED8;
//  }
//
//  #useCase6 {
//    background: #C0E6F2;
//  }
//}
</style>
