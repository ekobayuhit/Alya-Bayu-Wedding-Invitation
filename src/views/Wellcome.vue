<style scoped>
.frame {
  @apply absolute w-6/12 md:w-4/12 z-0;
}

@keyframes backOutUp-custom {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(-700px) scale(0.7);
    transform: translateY(-100%) scale(0.7);
    opacity: 0.7;
  }
}
.close-page {
  animation: backOutUp-custom .5s 1s forwards;
}

</style>

<template>
  <section :class="isOpenInvitation ? 'close-page' : ''" class="w-full h-screen bg-slate-100 min-h-screen fixed inset-0 grid place-items-center z-0 bg-texture bg-cover">
    <div class="mt-5 animate__animated animate__zoomInUp">
      <h1 class="AnticDidone-font" style="font-size:10vw; color:white">The Wedding Of</h1>
      <br>
      <h1 class="TAN-PEARL-font" style="font-size:10vw; color:white; text-align: center;">
        Alya <br>
        & <br>
        Bayu 
      </h1>
      <br>
    </div>
    <div class="mt-5 animate__animated animate__zoomInUp">
      <button 
        type="buton" 
        @click="openInvitation"
        class="border border-blue-500 text-gray-100 bg-blue-500 bg-dark p-2 rounded-full pointer active:scale-90 hover:bg-emerald-500 hover:border-emerald-500 hover:text-gray-100 duration-300">
        <i class="fa-solid fa-book-open mr-1"></i>
        Buka undangan
      </button>
    </div>
  </section>
</template>

<script setup>

import { ref } from 'vue'
import { useState } from '@/stores/state.js'
import router from '@/router'

const state = useState()

const couples = ref(['Alya', 'Bayu'])
const weddingDate = ref('Jumat, 11 November 2022')

const isOpenInvitation = ref(false)

const openInvitation = () => {
  isOpenInvitation.value = true
  state.isAudioPlay = true
  router.push({ path: '/home' })
}

</script>
