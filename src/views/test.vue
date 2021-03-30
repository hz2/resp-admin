<template>
  <button class="btn" @click="onClick">{{label}}</button>
</template>

<script setup="props, {emit}" lang="ts">
import { ref } from 'vue';

declare const props: {
   color: String
}

export const label = ref(`I'm a very dangerous button`);

export function onClick() {
  label.value = `Don't touch me`;
  emit('No Mercy');
}

export const buttonClass = computed(() => `btn-${props.color}`);

</script>