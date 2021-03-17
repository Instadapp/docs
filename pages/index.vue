<template>
  <div>
    <div class="bg-black-dark text-white border-t border-blue md:px-60 md:pt-16 md:pb-20">
      <h1 class="md:mb-8 md:font-semibold md:text-3xl">Instadapp Developers</h1>
      <div class="md:grid md:grid-cols-3 md:gap-x-6">
        <div class="gradient-box">
          <div class="rounded-lg md:text-center md:py-8 md:px-13">
            <img class="md:mx-auto md:mb-2" src="~/assets/images/rocket.svg" decoding="async" alt="">
            <div class="capitalize md:font-semibold md:text-2xl">Get started</div>
          </div>
        </div>
        <div class="gradient-box">
          <div class="rounded-lg md:text-center md:py-8 md:px-13">
            <img class="md:mx-auto md:mb-2" src="~/assets/images/connect.svg" decoding="async" alt="">
            <div class="capitalize md:font-semibold md:text-2xl">Connectors</div>
          </div>
        </div>
        <div class="gradient-box">
          <div class="rounded-lg md:text-center md:py-8 md:px-13">
            <img class="md:mx-auto md:mb-2" src="~/assets/images/suitcase.svg" decoding="async" alt="">
            <div class="capitalize md:font-semibold md:text-2xl">use cases</div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:mx-60 md:py-18">
      <div>
        <h2 class="text-blue capitalize md:leading-9 md:font-semibold md:mb-4">documentation</h2>
        <div class="text-black md:leading-7 md:font-medium md:text-2xl">Instadapp Developer Platform</div>
      </div>
      <hr class="md:mt-10 md:mb-15">
      <UseCases></UseCases>
      <Protocols></Protocols>
      <div class="md:text-right">
        <button class="blue-gradient focus:outline-none">
          <div class="bg-blue text-white rounded md:text-sm md:pl-5 md:pr-6 md:pt-6 md:pb-5">
            <div class="md:flex md:items-center md:justify-between md:mb-3.5">
              <div>Next</div>
              <img class="inline-block align-middle" src="~/assets/images/right-arrow.svg" decoding="async" alt="">
            </div>
            <div class="md:font-medium md:text-lg">Getting Started</div>
          </div>
        </button>
      </div>
    </div>
    <footer class="bg-black-dark text-white md:pt-14 md:pb-8">
      <div class="md:text-center md:mx-80 md:mb-28">
        <div class="md:font-semibold md:text-2xl md:mb-8">If you still can't find something you're looking for</div>
        <div class="md:font-normal md:mb-8">or have any questions, ask them at our developers community <br> on discord
          or simply send an email.
        </div>
        <div class="md:flex md:items-center md:justify-center md:mb-8">
          <img src="~/assets/images/discord.svg" decoding="async" alt="">
          <div class="md:mx-6 md:font-semibold">or</div>
          <img src="~/assets/images/email.svg" decoding="async" alt="">
        </div>
        <div class="md:font-normal">
          Our team is excited about assisting you to build an application using Instadapp Developer Platform. Your
          questions and feedback help us make a better development environment for future developers.
        </div>
      </div>
      <div class="md:mx-14 md:flex md:items-center md:justify-between">
        <NuxtLink class="md:flex md:items-center" to="/">
          <img class="inline-block" src="~/assets/images/logo.svg" alt="">
          <span class="uppercase text-white md:font-bold md:text-lg md:ml-1.5">Developers</span>
        </NuxtLink>
        <ul class="md:flex md:items-center">
          <li>
            <NuxtLink class="md:font-bold md:text-lg" to="/">Website</NuxtLink>
          </li>
          <li><span
            class="bg-blue md:w-1 md:h-1 md:mx-5 md:flex md:items-center md:rounded-full md:justify-center"></span></li>
          <li>
            <NuxtLink class="md:font-bold md:text-lg" to="/">Dashboard</NuxtLink>
          </li>
          <li><span
            class="bg-blue md:w-1 md:h-1 md:mx-5 md:flex md:items-center md:rounded-full md:justify-center"></span></li>
          <li>
            <NuxtLink class="md:font-bold md:text-lg" to="/">Articles</NuxtLink>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
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

.blue-gradient {
  padding: 1px;
  background: linear-gradient(180deg, #50A1FF 0%, #0E18FF 100%);
  border-radius: 4px;
}
</style>
