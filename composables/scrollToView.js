import {ref} from "@nuxtjs/composition-api";

export const activeLink = ref("step1");

export const scrollToView = (e, id) => {
  const el = document.getElementById(id);
  const parent = e.target.closest('div')
  parent.querySelector('.active').classList.remove('active')
  e.target.parentElement.classList.add('active');
  el.scrollIntoView(true);
}
