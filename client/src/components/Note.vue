<template>
  <div class="Note">
    <div v-if="!isEditing">
      <h2>{{ note.title }}</h2>
      <p>{{ note.content }}</p>
    </div>
    <div v-if="isEditing">
      <h2><input type="text" v-model="newTitle" @keyup.enter="update" /></h2>
      <p><input type="text" v-model="newContent" @keyup.enter="update" /></p>
    </div>
    <div class="Note__buttons">
      <button @click="edit" v-if="!isEditing">Edit</button>
      <button @click="update" v-if="isEditing">Update</button>
      <button @click="cancelEdit" v-if="isEditing">Cancel</button>
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
