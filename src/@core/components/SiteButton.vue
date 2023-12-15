<script setup>
defineProps({
  outlined: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  }
})

const primaryBtnClasses = 'bg-primary text-white'
const outlineBtnClasses = 'bg-transparent outline outline-2 outline-secondary text-white hover:outline-white'

const mediumBtnClasses = 'text-sm sm:text-base lg:text-lg 2xl:text-xl px-3 sm:px-5 py-2 lg:px-6 2xl:px-9.5 2xl:py-5'

const largeBtnClasses = 'text-lg sm:text-xl lg:text-xl 2xl:text-2xl px-5 sm:px-8 py-4 lg:px-10 2xl:px-14 2xl:py-7'
</script>

<template>
  <button
      :class="[
          outlined ? outlineBtnClasses : primaryBtnClasses,
          { [mediumBtnClasses]: size === 'md' },
          { [largeBtnClasses]: size === 'lg' }
          ]"
      class="rounded-4xl  font-bold"
  >
    <slot />
  </button>
</template>

<style scoped>
button{
  transition: all .3s ease-in;
}
button.bg-primary:hover{
  box-shadow: 0 3px 9px 1px theme('colors.primary');
  transform: translateY(-3px);
}
</style>