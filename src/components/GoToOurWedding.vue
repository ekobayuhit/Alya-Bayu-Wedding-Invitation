<template>
  <section class="w-full">
    <wave class="bg-slate-100" />
    <section class="container-section">
      <HeaderSection title="Go To Our Wedding" />
      <div class="mt-12 text-center">
        <h1 
          data-aos="zoom-in"
          class="kalam-font text-green-500 text-2xl">Map Location</h1>
        <iframe 
          data-aos="zoom-in"
          class="w-10/12 mx-auto mt-4 mb-8" height="300" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.607569796704!2d108.4499630577456!3d-6.620174892425944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x571313f86edbc566!2zNsKwMzcnMTIuNiJTIDEwOMKwMjcnMDMuOCJF!5e0!3m2!1sid!2sid!4v1664630538211!5m2!1sid!2sid" 
          style="border:0;" allowfullscreen="" loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <a data-aos="zoom-in" class="px-5 py-2 rounded-lg bg-green-600 text-gray-100 mx-auto"
          href="https://goo.gl/maps/EBqfKagV5tkrjhUD8">Open Google Map</a>
      </div>
    </section>
  </section>
</template>

<script setup>

import { ref } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
//import wave from '@/assets/svg/wave.svg'

</script>
