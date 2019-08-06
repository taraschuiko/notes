import axios from "axios";
const API_URL = "http://localhost:8000/notes";

export default {
  loadNotes() {
    axios.get(API_URL).then(r => this.commit("setNotes", r.data));
  },
  deleteNote(store, id) {
    axios.delete(`${API_URL}/${id}`).then(() => store.dispatch("loadNotes"));
  }
};
