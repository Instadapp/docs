<template>
  <div class="mb-16 md:mb-18">
    <h3 class="text-black font-semibold mb-8 md:leading-7 md:mb-10">Start with your use case</h3>
    <swiper id="useCases" ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <NuxtLink to="/steps">
          <div id="useCase1" class="rounded-lg px-9 py-8">
            <div class="text-black font-semibold text-2xl mb-4">Long ETH</div>
            <div class="text-black font-medium">Tap the upside spike in Ethereum price</div>
          </div>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide>
        <NuxtLink to="/steps">
          <div id="useCase2" class="rounded-lg px-9 py-8">
            <div class="text-black font-semibold text-2xl mb-4">Short DAI</div>
            <div class="text-black font-medium">Earn instant return & make DAI stable</div>
          </div>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide>
        <NuxtLink to="/steps">
          <div id="useCase3" class="rounded-lg px-9 py-8">
            <div class="text-black font-semibold text-2xl mb-4">Bridging</div>
            <div class="text-black font-medium">Port position b/w Maker & Compound</div>
          </div>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide>
        <NuxtLink to="/steps">
          <div id="useCase4" class="rounded-lg px-9 py-8">
            <div class="text-black font-semibold text-2xl mb-4">Long ETH</div>
            <div class="text-black font-medium">Tap the upside spike in Ethereum price</div>
          </div>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide>
        <NuxtLink to="/steps">
          <div id="useCase5" class="rounded-lg px-9 py-8">
            <div class="text-black font-semibold text-2xl mb-4">Short DAI</div>
            <div class="text-black font-medium">Earn instant return & make DAI stable</div>
          </div>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide>
        <NuxtLink to="/steps">
          <div id="useCase6" class="rounded-lg px-9 py-8">
            <div class="text-black font-semibold text-2xl mb-4">Bridging</div>
            <div class="text-black font-medium">Port position b/w Maker & Compound</div>
          </div>
        </NuxtLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide, directive} from "vue-awesome-swiper";
import 'swiper/swiper.scss'
import {defineComponent} from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive
  },
  setup() {
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
          slidesPerColumn: 2,
          spaceBetween: 20,
          allowSlideNext: false,
          allowSlidePrev: false,
          allowTouchMove: false
        }
      }
    }
    return {
      swiperOptions
    }
  }
})
</script>

<style lang="scss" scoped>
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
</style>
