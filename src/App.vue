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
      // svuoto gli array dei film e delle serie popolari
      this.store.popularFilmsArray = [];
      this.store.popularSeriesArray = [];

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

        this.store.searched = this.store.search
        // svuoto il campo di ricerca
        this.store.search = '';

      }
      else {
        alert("Campo di ricerca vuoto");
      }
    },
    // metodo per recuperare i film e le serie popolari
    getPopularFilmsAndSeries() {

      let apiUrl = this.store.endpoint;
      apiUrl += `/movie/popular${this.store.apiKey}`

      axios.get(apiUrl).then((response) => {
        this.store.popularFilmsArray = response.data.results
      });

      apiUrl = this.store.endpoint;
      apiUrl += `/tv/popular${this.store.apiKey}`

      axios.get(apiUrl).then((response) => {
        this.store.popularSeriesArray = response.data.results
      });
    }
  },
  created() {
    this.getPopularFilmsAndSeries();
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