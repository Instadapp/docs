<template>
  <div class="md:mx-14 md:my-18">
    <Sidebar />
    <div class="flex md:space-x-6">
      <div class="w-2/12 hidden md:block">
        <SideNav></SideNav>
      </div>
      <div class="py-16 px-4 md:px-0 md:py-0 md:w-8/12">
        <div class="md:hidden">
          <h4 class="font-semibold text-gray-400 uppercase mb-4">contents</h4>
          <ul>
            <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5 active">
              <a
                href="#installation"
              >Installation</a>
            </li>
            <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5">
              <a
                href="#usage"
              >Usage</a>
            </li>
            <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5">
              <a
                href="#setting-up-dsa-accounts"
              >Setting Up
                DSA Accounts</a>
            </li>
            <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5">
              <a
                href="#casting-spells"
              >Casting Spells</a>
            </li>
            <li class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5">
              <a
                href="#index"
              >Connectors</a>
            </li>
          </ul>
        </div>
        <hr class="mt-6 mb-6 md:hidden">
        <nuxt-content :document="docs" />
      </div>
      <div class="w-2/12 hidden md:block">
        <div class="sticky top-0">
          <h4 class="font-semibold text-gray-400 uppercase mb-4">contents</h4>
          <ul class="sectionLinks">
            <li
              :class="{'active': activeLink==='installation'}"
              class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5"
            >
              <a href="#installation">Installation</a>
            </li>
            <li
              :class="{'active': activeLink==='usage'}"
              class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5"
            >
              <a href="#usage">Usage</a>
            </li>
            <li
              :class="{'active': activeLink==='setting-up-dsa-accounts'}"
              class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5"
            >
              <a href="#setting-up-dsa-accounts">Setting Up
                DSA Accounts</a>
            </li>
            <li
              :class="{'active': activeLink==='casting-spells'}"
              class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5"
            >
              <a href="#casting-spells">Casting Spells</a>
            </li>
            <li
              :class="{'active': activeLink==='connectors'}"
              class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5"
            >
              <a href="#connectors">Connectors</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref, useAsync, useContext } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const activeLink = ref('installation');
    const { $content } = useContext()
    const docs = useAsync(() => {
      return $content('home').only(['body']).fetch();
    })

    const changeActiveNav = () => {
      let sectionLinks = document.querySelectorAll(".sectionLinks a");
      let fromTop = window.scrollY;
      sectionLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (section) {
          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            activeLink.value = section.getAttribute('id')
          }
        }
      });
    }
    onMounted(() => {
      window.addEventListener('scroll', changeActiveNav)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', changeActiveNav)
    })
    return {
      docs,
      activeLink
    }
  }
})
</script>

<style lang="scss">
.active {
  @apply text-black border-opacity-100;
}

.nuxt-content {
  @apply font-montserrat tracking-normal;
  h1 {
    @apply text-3xl font-bold border-b flex items-center mb-4 pb-2;
    a:last-child {
      @apply ml-3;
    }
  }

  h2 {
    @apply text-2xl font-bold border-b pb-2;
  }

  h3 {
    @apply text-lg mt-4 font-bold;
  }

  p {
    @apply tracking-normal my-4 text-sm;
  }

  pre {
    @apply bg-gray-100 bg-opacity-80 rounded-lg mb-4 text-sm whitespace-pre-wrap break-all;
  }

  a {
    @apply text-blue;
  }

  ul {
    @apply list-disc pl-10;
  }

  li,
  p,
  td {
    code {
      @apply bg-gray-100 px-1 py-0.5 rounded text-gray-700;
    }
  }

  blockquote {
    @apply border-l-4 border-gray-200 pl-4;
    p {
      @apply py-0.5;
    }
  }

  table {
    @apply border border-collapse text-sm;
    th {
      @apply border py-2 px-4;
    }

    td {
      @apply border py-2 px-4;
    }
  }
}
</style>
