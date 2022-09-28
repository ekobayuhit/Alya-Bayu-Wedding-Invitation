<template>
  <section class="w-full bg-cover h-screen">
    <section class="container-section h-screen grid content-end">
      <div>
        <img src="@/assets/images/wedding-1.jpg" class="w-full" alt="">
      </div>
    </section>
  </section>
  <section class="w-full bg-cover h-screen">
    <section class="container-section h-screen grid content-end">
      <div>
        <img src="@/assets/images/wedding-2.jpg" class="w-full" alt="">
      </div>
    </section>
  </section>
  <section class="w-full bg-cover h-screen">
    <section class="container-section h-screen grid content-end">
      <div>
        <img src="@/assets/images/wedding-3.jpg" class="w-full" alt="">
      </div>
    </section>
  </section>
  <section class="w-full bg-cover h-screen">
    <section class="container-section h-screen grid content-end">
      <div>
        <img src="@/assets/images/wedding-4.jpg" class="w-full" alt="">
      </div>
    </section>
  </section>
  <section class="w-full bg-cover h-screen">
    <section class="container-section h-screen grid content-end">
      <div>
        <img src="@/assets/images/wedding-5.jpg" class="w-full" alt="">
      </div>
    </section>
  </section>
  <section class="w-full bg-cover h-screen">
    <section class="container-section h-screen grid content-end">
      <div>
        <img src="@/assets/images/wedding-6.jpg" class="w-full" alt="">
      </div>
    </section>
  </section>
</template>

<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'
//import decoration from '@/assets/svg/decoration-2.svg'

const route = useRoute()
let query = computed(() => route.query)

</script>
