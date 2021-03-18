<template>
  <div class="mb-16 md:mb-18">
    <h3 class="text-black font-semibold mb-8 md:leading-7 md:mb-10">Start with your use case</h3>
    <!--    <Slick id="useCases" class="md:grid md:grid-cols-3 md:gap-6" ref="slick"-->
    <!--           :options="slickOptions">-->
    <!--      <div>-->
    <!--        <div id="useCase1" class="rounded-lg px-9 py-8">-->
    <!--          <div class="text-black font-semibold text-2xl mb-4">Long ETH</div>-->
    <!--          <div class="text-black font-medium">Tap the upside spike in Ethereum price</div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <div id="useCase2" class="rounded-lg px-9 py-8">-->
    <!--          <div class="text-black font-semibold text-2xl mb-4">Short DAI</div>-->
    <!--          <div class="text-black font-medium">Earn instant return & make DAI stable</div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <div id="useCase3" class="rounded-lg px-9 py-8">-->
    <!--          <div class="text-black font-semibold text-2xl mb-4">Bridging</div>-->
    <!--          <div class="text-black font-medium">Port position b/w Maker & Compound</div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <div id="useCase4" class="rounded-lg px-9 py-8">-->
    <!--          <div class="text-black font-semibold text-2xl mb-4">Long ETH</div>-->
    <!--          <div class="text-black font-medium">Tap the upside spike in Ethereum price</div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <div id="useCase5" class="rounded-lg px-9 py-8">-->
    <!--          <div class="text-black font-semibold text-2xl mb-4">Short DAI</div>-->
    <!--          <div class="text-black font-medium">Earn instant return & make DAI stable</div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <div id="useCase6" class="rounded-lg px-9 py-8">-->
    <!--          <div class="text-black font-semibold text-2xl mb-4">Bridging</div>-->
    <!--          <div class="text-black font-medium">Port position b/w Maker & Compound</div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </Slick>-->
    <div id="useCases" class="md:grid md:grid-cols-3 md:gap-6">
      <div>
        <div id="useCase1" class="rounded-lg px-9 py-8">
          <div class="text-black font-semibold text-2xl mb-4">Long ETH</div>
          <div class="text-black font-medium">Tap the upside spike in Ethereum price</div>
        </div>
      </div>
      <div>
        <div id="useCase2" class="rounded-lg px-9 py-8">
          <div class="text-black font-semibold text-2xl mb-4">Short DAI</div>
          <div class="text-black font-medium">Earn instant return & make DAI stable</div>
        </div>
      </div>
      <div>
        <div id="useCase3" class="rounded-lg px-9 py-8">
          <div class="text-black font-semibold text-2xl mb-4">Bridging</div>
          <div class="text-black font-medium">Port position b/w Maker & Compound</div>
        </div>
      </div>
      <div>
        <div id="useCase4" class="rounded-lg px-9 py-8">
          <div class="text-black font-semibold text-2xl mb-4">Long ETH</div>
          <div class="text-black font-medium">Tap the upside spike in Ethereum price</div>
        </div>
      </div>
      <div>
        <div id="useCase5" class="rounded-lg px-9 py-8">
          <div class="text-black font-semibold text-2xl mb-4">Short DAI</div>
          <div class="text-black font-medium">Earn instant return & make DAI stable</div>
        </div>
      </div>
      <div>
        <div id="useCase6" class="rounded-lg px-9 py-8">
          <div class="text-black font-semibold text-2xl mb-4">Bridging</div>
          <div class="text-black font-medium">Port position b/w Maker & Compound</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

export default {
  name: "UseCases",
  components: {Slick},
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: 'unslick'
          },
        ]
      }
    }
  },
  methods: {
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists

    },
  }
}
</script>

<style scoped>

</style>
