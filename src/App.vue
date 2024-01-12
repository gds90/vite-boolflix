<script>
import AppHeader from './components/AppHeader.vue';
import CardsContainer from './components/CardsContainer.vue';
import { store } from './store';
import axios from 'axios';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    CardsContainer
  },
  methods: {
    getFilmsList() {

      if (store.search !== '') {
        let apiUrl = this.store.searchFilm;
        apiUrl += `${this.store.apiKey}&query=${this.store.search}`;

        axios.get(apiUrl).then((response) => {
          this.store.filmsArray = response.data.results
        });

        this.store.search = '';

      }
      else {
        alert("Campo ricerca vuoto");
      }
    }
  },
  created() {
    this.getFilmsList;
  }
}
</script>
<template lang="">
  <div>
    <AppHeader @perform_search="getFilmsList" />
    <main>
      <CardsContainer />
    </main>
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
</style>