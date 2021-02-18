<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.table {
  border-collapse: collapse;
}
.table th, .table td{
  border: 1px solid rgb(230, 230, 230);
  padding: .5rem 1rem;
  text-align: left;
}
.table tr {
  transition: background-color .2s;
}
.table tr:hover {
  background-color: rgb(237, 241, 243);
}
.link {
  text-decoration: none;
  color: #2c3e50;
  transition: color .2s, text-decoration .2s;
}
.link:hover {
  color: #2b5986;
  text-decoration: underline;
}
</style>
