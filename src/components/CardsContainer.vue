<script>
import FilmCard from './FilmCard.vue';
import SerieCard from './SerieCard.vue';

import { store } from '../store';
export default {
    name: 'CardsContainer',
    data() {
        return {
            store
        }
    },
    components: {
        FilmCard,
        SerieCard
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <h3 class="my-4 fw-bold" v-if="store.filmsArray.length > 0">Film:</h3>
            <FilmCard v-for="card, index in store.filmsArray" :key="index" :card="card"/>
        </div>
        <div class="row">
            <h3 class="my-4 fw-bold" v-if="store.seriesArray.length > 0">Serie Tv:</h3>
            <SerieCard v-for="card, index in store.seriesArray" :key="index" :card="card"/>
        </div>
    </div>
</template>
<style lang="">
    
</style>