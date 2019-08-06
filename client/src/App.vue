<template>
  <div id="app">
    <h1>Notes</h1>
    <NotesList />
  </div>
</template>

<script>
import NotesList from "./components/NotesList";

export default {
  name: "app",
  components: {
    NotesList
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px;
}
</style>
