<template>
  <section>
    <MainCover2 id="mainCover2"></MainCover2>
    <OurGallery id="ourgallery"></OurGallery>
    <GoToOurWedding id="goto-our-Wedding"></GoToOurWedding>
    <Information id="information"></Information>
    <Envelope id="envelope"></Envelope>
    <!--<GuestBook id="guest-book"></GuestBook>-->
  </section>
</template>

<script setup>

import MainCover2 from '@/components/MainCover2.vue'
import OurGallery from '@/components/OurGallery.vue'
import GoToOurWedding from '@/components/GoToOurWedding.vue'
import Information from '@/components/Information.vue'
import Envelope from '@/components/Envelope.vue'
//import GuestBook from '@/components/GuestBook.vue'

// Navigation handler
const navigationHandler = id => {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  })
}

</script>
