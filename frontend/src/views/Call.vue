<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value) in callsLog" :key="value.identifier">
        <td>{{ value.agentName }}</td>
        <td>{{ formatDate(value.dateTime, 'DD/MM/YYYY HH:mm') }}</td>
        <td>{{ value.resolution }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import fetchData from '../api';
import formatDate from '../helpers';

export default {
  name: 'Call',
  props: { number: String },
  data: () => ({
    headers: [
      'Agent Name',
      'Call date and time',
      'Resolution',
    ],
    callsLog: {},
  }),
  watch: {
    number: {
      handler: 'fetchCallsLog',
      immediate: true,
    },
  },
  methods: {
    async fetchCallsLog() {
      const result = await fetchData(`call/${this.number}`);
      console.log(result);
      this.callsLog = result;
    },
    formatDate,
  },
};
</script>
