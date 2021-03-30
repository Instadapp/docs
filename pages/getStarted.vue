<template>
  <div class="md:mx-14 md:my-18">
    <Sidebar />
    <div class="flex md:space-x-6">
      <div class="w-2/12 hidden md:block">
        <SideNav></SideNav>
      </div>
      <div class="py-16 px-4 md:px-0 md:py-0 md:w-8/12">
        <toc
          class="md:hidden"
          :toc="toc"
        />
        <hr class="mt-6 mb-6 md:hidden">
        <nuxt-content :document="docs" />
      </div>
      <div class="w-2/12 hidden md:block">
        <toc
          class="sticky top-0"
          :toc="toc"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref, useAsync, useContext } from "@nuxtjs/composition-api";
import Toc from "~/components/Toc.vue";

export default defineComponent({
  components: { Toc },
  setup() {
    const { $content } = useContext()
    const docs = useAsync(() => {
      return $content('home').only(['body']).fetch();
    })

    const toc = [
      {
        id: 'installation',
        text: 'Installation'
      },
      {
        id: 'usage',
        text: 'Usage'
      },
      {
        id: 'setting-up-dsa-accounts',
        text: 'Setting Up DSA Accounts'
      },
      {
        id: 'casting-spells',
        text: 'Casting Spells'
      },
      {
        id: 'connectors',
        text: 'Connectors'
      },
    ]

    return {
      docs,
      toc
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
