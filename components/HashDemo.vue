<script setup lang="ts">
import { ref, watchEffect } from "vue";

const message = ref("");
const encoder = new TextEncoder();
const hash = ref("");
watchEffect(async () => {
  const bytes = new Uint8Array(
    await crypto.subtle.digest("SHA-512", encoder.encode(message.value))
  );
  hash.value = [...bytes].join(" ");
});
</script>

<template>
  <textarea
    style="background: transparent; width: 100%; height: 100px"
    type="text"
    v-model="message"
    placeholder="Calculer l'empreintre SHA-512 de votre message ici..."
  />
  <p style="font-family: monospace">
    {{ hash }}
  </p>
</template>
