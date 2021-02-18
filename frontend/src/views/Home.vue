<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in summary" :key="value.identifier">
          <td><router-link class="link"
            :to="`/call/${key}`">{{ key }}</router-link></td>
          <td>{{ value.callCount }} {{ value.callCount > 1 ? 'calls' : 'call' }} </td>
          <td>
            <router-link
              class="link"
              :to="`/agent/${value.last.agentIdentifier}`"
            >{{ value.last.agentName }}</router-link> /
            {{ formatDate(value.last.dateTime, 'HH:mm') }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import formatDate from '../helpers';
import fetchData from '../api';

export default {
  name: 'Home',
  data: () => ({
    summary: {},
    headers: [
      'Phone number',
      'Number of calls',
      'Last call details',
    ],
  }),
  mounted() {
    this.getSummary();
  },
  methods: {
    async getSummary() {
      const result = await fetchData('summary');
      this.summary = result;
    },
    formatDate,
  },
};
</script>

<style>

</style>
