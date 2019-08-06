<template>
  <div>
    <Note v-for="note in notes" :key="note._id" :note="note" />
  </div>
</template>

<script>
import Note from "./Note";

export default {
  name: "NotesList",
  components: {
    Note
  },
  mounted() {
    this.$store.dispatch("loadNotes");
  },
  computed: {
    notes() {
      return this.$store.getters.getNotes;
    }
  }
};
</script>
