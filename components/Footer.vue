<template>
  <footer class="bg-black-dark text-white px-4 pt-18 pb-8 md:pt-14">
    <div class="text-center mb-10 md:mx-80 md:mb-28">
      <div class="font-semibold text-xl mb-4 md:text-2xl md:mb-8">If you still can't find something you're looking for</div>
      <div class="font-normal mb-7 md:mb-8">or have any questions, ask them at our developers community <br> on discord
        or simply send an email.
      </div>
      <div class="flex items-center justify-center mb-7 md:mb-8">
        <img src="~/assets/images/discord.svg" decoding="async" alt="">
        <div class="mx-6 font-semibold">or</div>
        <img src="~/assets/images/email.svg" decoding="async" alt="">
      </div>
      <div class="font-normal">
        Our team is excited about assisting you to build an application using Instadapp Developer Platform. Your
        questions and feedback help us make a better development environment for future developers.
      </div>
    </div>
    <div class="mx-4 flex flex-col items-center md:flex-row md:mx-14 md:justify-between">
      <NuxtLink class="flex items-center mb-24 md:mb-0" to="/">
        <img src="~/assets/images/logo.svg" alt="">
        <span class="uppercase text-white font-bold text-lg ml-1.5">Developers</span>
      </NuxtLink>
      <ul class="flex items-center">
        <li>
          <NuxtLink class="font-bold text-lg" to="/">Website</NuxtLink>
        </li>
        <li><span
          class="bg-blue w-1 h-1 mx-5 flex items-center rounded-full justify-center"></span></li>
        <li>
          <NuxtLink class="font-bold text-lg" to="/">Dashboard</NuxtLink>
        </li>
        <li><span
          class="bg-blue w-1 h-1 mx-5 flex items-center rounded-full justify-center"></span></li>
        <li>
          <NuxtLink class="font-bold text-lg" to="/">Articles</NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
