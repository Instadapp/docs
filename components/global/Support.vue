<template>
  <div class="support">
    <hr style="margin-bottom: 2rem;margin-top: 2rem;">

    <p>If you still can't find something you're looking for or have any questions, ask them at our developers community
      on <a href="https://discord.gg/83vvrnY" target="_blank" title="Opens in a new window">Discord</a> or simply send
      an <a href="mailto:info@instadapp.io">Email</a>.</p>
    <br>

    <p>Our team is excited about assisting you to build an application using Instadapp Developer Platform. Your
      questions and feedback help us make a better development environment for future developers.</p>
  </div>
</template>


<style scoped lang="ts">
css({
  '.support': {
    a: {
      fontSize: '{text.sm.fontSize}',
      lineHeight: '{text.sm.lineHeight}',
      color: '{colors.primary.500}',
      '&:not(.active):hover': {
        color: '{colors.gray.900}',
      },
      '@dark': {
        '&:not(.active):hover': {
          color: '{colors.gray.400}',
        },
      },
      '&.active': {
        color: '{colors.primary.500}'
      }
    }
  }
})
</style>