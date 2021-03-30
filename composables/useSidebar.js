import { ref, useRouter } from "@nuxtjs/composition-api";

const sidebarOpened = ref(false);

export const useSidebar = () => {
  const router = useRouter();

  router.afterEach(() => {
    sidebarOpened.value = false;
  });

  return {
    opened: sidebarOpened,

    open() {
      sidebarOpened.value = true;
    },
    close() {
      sidebarOpened.value = false;
    },
    toggle() {
      sidebarOpened.value = !sidebarOpened.value;
    }
  };
};
