<script setup>
import { heroSectionContent, buttonsLabel } from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
import {scrollToSection} from "@/@core/utils/functions";
</script>

<template>
  <section id="home" class="py-40 xl:py-56 2xl:py-64 z-20">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-20 lg:gap-10 3xl:gap-10">
        <div class="text-white">
          <h1 class="text-4.5xl lg:text-5xl 3xl:text-7xl font-bold pb-5">
            {{ heroSectionContent.heading }}
          </h1>
          <p class="text-base lg:text-xl 2xl:text-3xl">
            {{ heroSectionContent.text }}
          </p>

          <div class="flex justify-center gap-5 pt-12 lg:pt-20 xl:pt-24 3xl:pt-38">
            <SiteButton size="lg">
              {{ buttonsLabel.CTOBtn }}
            </SiteButton>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <img :src="heroSectionContent.image" :alt="heroSectionContent.alt">
        </div>
      </div>
    </div>
  </section>
</template>
