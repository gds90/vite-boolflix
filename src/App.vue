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
    getCardsList() {

      if (store.search !== '') {
        // CHIAMATA API FILM
        let apiFilmUrl = this.store.searchFilm;
        apiFilmUrl += `${this.store.apiKey}&query=${this.store.search}`;

        axios.get(apiFilmUrl).then((response) => {
          this.store.filmsArray = response.data.results
        });

        // CHIAMATA API SERIES
        let apiSeriesUrl = this.store.searchSerie;

        apiSeriesUrl += `${this.store.apiKey}&query=${this.store.search}`;

        axios.get(apiSeriesUrl).then((response) => {
          this.store.seriesArray = response.data.results
        });

        this.store.search = '';

      }
      else {
        alert("Campo di ricerca vuoto");
      }
    }
  },
  created() {
  }
}
</script>
<template lang="">
  <div>
    <AppHeader @perform_search="getCardsList" /> <!-- $emit per button e per keyup.enter -->
    <main>
      <CardsContainer />
    </main>
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
</style>