<script setup lang="ts">
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import type { PersonnesResponse } from "../pocketbase-types";
import { ref } from "vue";
const props = defineProps<{
  personnes: PersonnesResponse[];
  name: string;
  value: string[] | string;
  multiple?: boolean;
  placeholder?: string;
}>();
const personneListId = ref(props.value);
console.log("Ici select", props.personnes);
</script>

<template>
  <Multiselect
    v-model="personneListId"
    :options="personnes"
    searchable
    :mode="multiple ? 'tags' : 'single'"
    label="nom"
    value-prop="id"
    :placeholder="placeholder"
  />
  valeur: {{ personneListId }}
  <!-- @vue-ignore -->
  <input
    v-for="p in multiple ? personneListId : [personneListId]"
    type="hidden"
    :name="name"
    :value="p"
    :key="p"
  />

  <!-- <input
    v-if="multiple"
    v-for="p in personneListId"
    type="hidden"
    :name="name"
    :value="p"
    :key="p"
  />
  <input v-else type="hidden" :name="name" :value="personneListId" /> -->
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
