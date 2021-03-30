<template>
  <div v-if="toc.length">
    <h4 class="font-semibold text-gray-400 uppercase mb-4">{{ title }}</h4>
    <ul>
      <li
        v-for="link in toc"
        :key="link.id"
        :class="{'active': activeLink=== link.id}"
        class="text-gray-400 font-medium pb-2 border-l-2 border-gray-400 border-opacity-30 pl-5"
      >
        <a
          :href="`#${link.id}`"
          class="capitalize"
        >{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Contents'
    },
    toc: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const activeLink = ref('')
    const vm = getCurrentInstance()

    const onScroll = () => {
      let sectionLinks = vm.proxy.$el.querySelectorAll("li a");

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
      window.addEventListener('scroll', onScroll)

      if (!activeLink.value && props.toc.length > 0) {
        activeLink.value = props.toc[0].id
      }

    })

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll, true)
    })

    return {
      activeLink
    }
  },
})
</script>
