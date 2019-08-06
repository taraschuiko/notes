<template>
  <div class="Note">
    <div v-if="!this.isEditing">
      <h2>{{ note.title }}</h2>
      <p>{{ note.content }}</p>
    </div>
    <div v-if="this.isEditing">
      <h2><input type="text" v-model="newTitle" /></h2>
      <p><input type="text" v-model="newContent" /></p>
    </div>
    <div class="Note__buttons">
      <button @click="this.edit" v-if="!this.isEditing">Edit</button>
      <button @click="this.update" v-if="this.isEditing">Update</button>
      <button @click="this.cancelEdit" v-if="this.isEditing">Cancel</button>
      <button @click="this.delete">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
  data() {
    return {
      isEditing: false,
      newTitle: "",
      newContent: ""
    };
  },
  props: {
    note: Object
  },
  methods: {
    delete() {
      this.$store.dispatch("deleteNote", this.note._id);
    },
    edit() {
      this.isEditing = true;
      this.newTitle = this.note.title;
      this.newContent = this.note.content;
    },
    cancelEdit() {
      this.isEditing = false;
      this.newTitle = "";
      this.newContent = "";
    },
    update() {
      this.isEditing = false;
      this.$store.dispatch("updateNote", {
        _id: this.note._id,
        title: this.newTitle,
        content: this.newContent
      });
    }
  }
};
</script>
