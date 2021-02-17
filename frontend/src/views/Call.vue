<template>
  <p>number: {{ number }}</p>
</template>

<script>
import fetchData from '../api';

export default {
  name: 'Call',
  props: { number: String },
  watch: {
    number: {
      handler: 'fetchCallsLog',
      immediate: true,
    },
  },
  methods: {
    async fetchCallsLog() {
      await fetchData(`call/${this.number}`);
    },
  },
};
</script>
