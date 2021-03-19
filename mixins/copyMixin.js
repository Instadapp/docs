import {createPopper} from "@popperjs/core";

export default {
  methods: {
    copyCode(e) {
      const code = e.target.nextElementSibling.firstChild;
      const temp = document.createElement('textarea')
      document.body.appendChild(temp)
      temp.value = code.innerText;
      temp.select()
      document.execCommand('copy')
      document.body.removeChild(temp)
      this.showToolTip(e.target)
    },
    showToolTip(el) {
      const tooltip = document.createElement('span');
      tooltip.setAttribute('class', 'tooltip');
      tooltip.innerText = 'copied!'
      document.body.appendChild(tooltip)
      createPopper(el, tooltip, {
        placement: "right-start",
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 5],
            },
          },
        ],
      });
      setTimeout(() => {
        document.body.removeChild(tooltip);
      }, 1000)
    },
  }
}
