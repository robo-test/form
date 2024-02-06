<template>
  <main class="md:p-20 p-0">
    <div class="relative flex justify-center">
<!--      TODO dont use svg, render div with 50% radius and bg color to not have hardcoded child top position-->
      <img src="~/assets/svg/successCircle.svg" alt="">
      <img src="~/assets/svg/successSign.svg" alt="" class="absolute top-[58px]">
    </div>

    <FormHeadline :title="'Success registration'" class="md:pb-10 pb-5"/>
    <p class="text-center md:text-lg text-sm md:leading-8 leading-5 text-font-secondary"> Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Mauris lobortis gravida ex, at maximus lorem
      condimentum ut. Cras purus mauris, convallis vitae sollicitudin sed, fringilla lobortis lorem. </p>
  </main>
</template>

<script setup>
</script>