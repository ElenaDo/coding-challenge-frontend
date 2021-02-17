<template>
  <div>
    <ul>
      <table>
        <thead>
          <tr>
            <th>Phone number</th>
            <th>Number of calls</th>
            <th>Last call details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in summary" :key="value.identifier">
            <td>{{ key }}</td>
            <td>{{ value.callCount }} {{ value.callCount > 1 ? 'calls' : 'call' }} </td>
            <td>{{ value.last.agentName }} / {{formatDate(value.last.dateTime)}} </td>
          </tr>
        </tbody>
      </table>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import dayjs from 'dayjs';
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
    formatDate(date) {
      return dayjs(date).format('HH:mm');
    },
  },
};
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: .5rem;
}

</style>
