<template>
  <section class="w-full mb-12">
    <wave class="fill-emerald-800"></wave>
    <section class="container-section">
      <HeaderSection title="A & B"></HeaderSection>
      <Card title="QS : AR RUM : 21">
        <template v-slot:body>
          <p class="satisfy-font text-lg p-10 text-left">
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu 
            dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan 
            di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat 
            tanda-tanda (kebesaran Allah) bagi kaum yang berpikir. 
            <br>
          </p>
        </template>
        <template v-slot:footer>
          <img src="@/assets/images/couples.png" class="w-full" alt="">
        </template>
      </Card>
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'
import wave from '@/assets/svg/wave.svg'

</script>
