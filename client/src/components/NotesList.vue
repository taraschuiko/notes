<template>
  <div>
    <CreateNote />
    <Note v-for="note in notes" :key="note._id" :note="note" />
  </div>
</template>

<script>
import CreateNote from "./CreateNote";
import Note from "./Note";

export default {
  name: "NotesList",
  components: {
    CreateNote,
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

<style lang="scss">
.Note,
.CreateNote {
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 6px;

  h2,
  p {
    margin: 0 0 8px 0;
    border: 1px solid transparent;
  }

  h2 {
    font-size: 20px;
  }

  &__buttons button {
    margin-right: 4px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input {
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    padding: 0;
    border: none;
    background: #e6e6e6;
  }
}
</style>
