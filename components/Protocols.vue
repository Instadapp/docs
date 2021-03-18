<template>
  <div class="mb-16 md:mb-18">
    <h3 class="text-black font-semibold mb-8 md:leading-7 md:mb-10">Supported Protocols</h3>
    <swiper id="protocols" ref="protocolSwiper" :options="swiperOptions">
      <swiper-slide>
        <div class="protocol">
          <div class="rounded-lg p-6">
            <div class="flex items-center">
              <img src="~/assets/images/protocols/makerdao.svg" alt="">
              <div class="text-2xl ml-4 font-semibold">Maker Dao</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="protocol">
          <div class="rounded-lg p-6">
            <div class="flex items-center">
              <img src="~/assets/images/protocols/compound.svg" alt="">
              <div class="text-2xl ml-4 font-semibold">Compound</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="protocol">
          <div class="rounded-lg p-6">
            <div class="flex items-center">
              <img src="~/assets/images/protocols/uniswap.svg" alt="">
              <div class="text-2xl ml-4 font-semibold">Uniswap</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="protocol">
          <div class="rounded-lg p-6">
            <div class="flex items-center">
              <img src="~/assets/images/protocols/kyber.svg" alt="">
              <div class="text-2xl ml-4 font-semibold">Kyber</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="protocol">
          <div class="rounded-lg p-6">
            <div class="flex items-center">
              <img src="~/assets/images/protocols/curve.svg" alt="">
              <div class="text-2xl ml-4 font-semibold">Curve</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="protocol">
          <div class="rounded-lg p-6">
            <div class="flex items-center">
              <img src="~/assets/images/protocols/gobbler.svg" alt="">
              <div class="text-2xl ml-4 font-semibold">dYdX</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="protocol">
          <div class="rounded-lg p-6">
            <div class="flex items-center">
              <img src="~/assets/images/protocols/aave.svg" alt="">
              <div class="text-2xl ml-4 font-semibold">Aave</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="protocol">
          <div class="rounded-lg p-6">
            <div class="flex items-center">
              <img src="~/assets/images/protocols/1inch.svg" alt="">
              <div class="text-2xl ml-4 font-semibold">1inch</div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!--    <div id="protocols" class="md:grid md:grid-cols-3 md:gap-6">-->
    <!--      <div class="protocol">-->
    <!--        <div class="rounded-lg p-6">-->
    <!--          <div class="flex items-center">-->
    <!--            <img src="~/assets/images/protocols/makerdao.svg" alt="">-->
    <!--            <div class="text-2xl ml-4 font-semibold">Maker Dao</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="protocol">-->
    <!--        <div class="rounded-lg p-6">-->
    <!--          <div class="flex items-center">-->
    <!--            <img src="~/assets/images/protocols/compound.svg" alt="">-->
    <!--            <div class="text-2xl ml-4 font-semibold">Compound</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="protocol">-->
    <!--        <div class="rounded-lg p-6">-->
    <!--          <div class="flex items-center">-->
    <!--            <img src="~/assets/images/protocols/uniswap.svg" alt="">-->
    <!--            <div class="text-2xl ml-4 font-semibold">Uniswap</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="protocol">-->
    <!--        <div class="rounded-lg p-6">-->
    <!--          <div class="flex items-center">-->
    <!--            <img src="~/assets/images/protocols/kyber.svg" alt="">-->
    <!--            <div class="text-2xl ml-4 font-semibold">Kyber</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="protocol">-->
    <!--        <div class="rounded-lg p-6">-->
    <!--          <div class="flex items-center">-->
    <!--            <img src="~/assets/images/protocols/curve.svg" alt="">-->
    <!--            <div class="text-2xl ml-4 font-semibold">Curve</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="protocol">-->
    <!--        <div class="rounded-lg p-6">-->
    <!--          <div class="flex items-center">-->
    <!--            <img src="~/assets/images/protocols/gobbler.svg" alt="">-->
    <!--            <div class="text-2xl ml-4 font-semibold">dYdX</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="protocol">-->
    <!--        <div class="rounded-lg p-6">-->
    <!--          <div class="flex items-center">-->
    <!--            <img src="~/assets/images/protocols/aave.svg" alt="">-->
    <!--            <div class="text-2xl ml-4 font-semibold">Aave</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="protocol">-->
    <!--        <div class="rounded-lg p-6">-->
    <!--          <div class="flex items-center">-->
    <!--            <img src="~/assets/images/protocols/1inch.svg" alt="">-->
    <!--            <div class="text-2xl ml-4 font-semibold">1inch</div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import {Swiper, SwiperSlide, directive} from "vue-awesome-swiper";
import 'swiper/swiper-bundle.css'

export default {
  name: "Protocols",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
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
    }
  },
  computed: {
    swiper() {
      return this.$refs.protocolSwiper.$swiper
    }
  },
}
</script>

<style lang="scss">
@import "~/assets/scss/mixins.scss";

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
      @apply bg-white;
    }

    &:hover {
      box-shadow: 0px 16px 24px rgba(4, 2, 33, 0.2);
    }
  }
}
</style>
