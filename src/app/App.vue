<script setup lang="ts">
import { useCounterStore } from "../entities/stores";

const counter = useCounterStore();
</script>

<template>
  <div>
    <h1>You did it!</h1>

    <section>
      <h2>Counter (Pinia)</h2>
      <p>Count: {{ counter.count }}</p>
      <button @click="counter.increment()">Increment</button>
    </section>

    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
  </div>
</template>

<style scoped></style>
