<script setup lang="ts">
import { ref } from "vue";
import BtnCalc from "./BtnCalc.vue";
const nombre = ref(0);
const modeDecimal = ref(false);
const rang = ref(0);
</script>

<template>
  <h1>Calculatrice</h1>
  <p>Affichage : {{ nombre }}</p>

  <div class="grid grid-cols-3 grid-rows-3">
    <BtnCalc
      v-for="chiffre in 9"
      v-model="nombre"
      :chiffre="chiffre"
      :modeDecimal="modeDecimal"
      :rang="rang"
    />
    <button @click="nombre = 0">Clear</button>
    <BtnCalc
      v-model="nombre"
      :chiffre="0"
      :modeDecimal="modeDecimal"
      :rang="rang"
    />
    <button>.</button>
    <button @click="nombre = Math.floor(nombre / 10)"><=</button>
  </div>

  <!-- <button @click="increment()">Incrémenter</button>
  <button @click="decrement()">Décrementer</button> -->
</template>
