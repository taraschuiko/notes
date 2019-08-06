<template>
  <div class="Note">
    <h2>{{ note.title }}</h2>
    <p>{{ note.content }}</p>
    <div class="Note__buttons">
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: {
    note: Object
  }
};
</script>

<style lang="scss" scoped>
.Note {
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 6px;

  h2 {
    font-size: 20px;
    margin: 0 0 8px 0;
  }

  p {
    margin: 0 0 8px 0;
  }

  &__buttons button {
    margin-right: 4px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>
