<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value) in agentLog" :key="value.identifier">
        <td>{{ value.number }}</td>
        <td>{{ formatDate(value.dateTime, 'DD/MM/YYYY HH:mm') }}</td>
        <td>{{ value.resolution }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import formatDate from '../helpers';
import fetchData from '../api';

export default {
  name: 'Agent',
  props: { id: String },
  data: () => ({
    headers: [
      'Phone number',
      'Call date and time',
      'Resolution',
    ],
    agentLog: {},
  }),
  watch: {
    id: {
      handler: 'fetchAgentLog',
      immediate: true,
    },
  },
  methods: {
    async fetchAgentLog() {
      const result = await fetchData(`agent/${this.id}`);
      console.log(result);
      this.agentLog = result;
    },
    formatDate,
  },
};
</script>
