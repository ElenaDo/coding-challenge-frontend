<template>
  <p>id: {{ id }}</p>
</template>

<script>
import fetchData from '../api';

export default {
  name: 'Agent',
  props: { id: String },
  watch: {
    id: {
      handler: 'fetchAgentLog',
      immediate: true,
    },
  },
  methods: {
    async fetchAgentLog() {
      await fetchData(`agent/${this.id}`);
    },
  },
};
</script>
