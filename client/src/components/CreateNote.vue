<template>
  <div class="CreateNote">
    <div>
      <h2><input type="text" v-model="title" placeholder="New Note" /></h2>
      <p><input type="text" v-model="content" /></p>
    </div>
    <div class="Note__buttons">
      <button @click="this.create">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateNote",
  data() {
    return {
      title: "",
      content: ""
    }
  },
  methods: {
    create() {
      this.$store.dispatch("createNote", {
        title: this.title,
        content: this.content
      })
      this.title = "";
      this.content = "";
    }
  }
}
</script>
