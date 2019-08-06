import axios from "axios";
const API_URL = "http://localhost:8000/notes";

export default {
  loadNotes() {
    axios.get(API_URL).then(r => this.commit("setNotes", r.data.reverse()));
  },
  deleteNote(store, id) {
    axios.delete(`${API_URL}/${id}`).then(() => store.dispatch("loadNotes"));
  },
  updateNote(store, note) {
    axios
      .put(`${API_URL}/${note._id}`, note)
      .then(() => store.dispatch("loadNotes"));
  },
  createNote(store, note) {
    axios.post(API_URL, note).then(() => store.dispatch("loadNotes"));
  }
};
