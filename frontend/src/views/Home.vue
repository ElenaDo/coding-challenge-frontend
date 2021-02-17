<template>
  <div>
    <ul>
      <li v-for="(value, key) in summary" :key="value.identifier">
        {{ key }} : {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import fetchData from '../api';

export default {
  name: 'Home',
  data: () => ({
    summary: {},
  }),
  mounted() {
    this.getSummary();
  },
  methods: {
    async getSummary() {
      const result = await fetchData('summary');
      this.summary = result;
    },
  },
};
</script>
