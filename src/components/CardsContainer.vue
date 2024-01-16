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
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <!-- Film del momento -->
                <div class="popularFilms" v-if="this.store.popularFilmsArray.length > 0">
                    <h3 class="my-3 ms-3 fw-bold text-white">Film del momento</h3>
                    <div class="content d-flex">
                        <FilmCard v-for="card, index in store.popularFilmsArray" :key="index" :card="card"/>
                    </div>
                </div>

                <!-- ricerca film  -->
                <div class="searchedFilms" v-if="store.filmsArray.length > 0">
                    <h3 class="my-3 ms-3 fw-bold text-white">Film correlati alla ricerca "{{store.searched}}"</h3>
                    <div class="content d-flex">
                        <FilmCard v-for="card, index in store.filmsArray" :key="index" :card="card"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-12">
                <!-- Serie tv del momento -->
                <div class="popularSeries" v-if="this.store.popularSeriesArray.length > 0">
                    <h3 class="my-3 ms-3 fw-bold text-white">Serie TV del momento</h3>
                    <div class="content d-flex">
                        <SerieCard v-for="card, index in store.popularSeriesArray" :key="index" :card="card"/>
                    </div>
                </div>

                <!-- ricerca serie  -->
                <div class="searchedFilms" v-if="store.seriesArray.length > 0">
                    <h3 class="my-3 ms-3 fw-bold text-white">Serie TV correlate alla ricerca "{{store.searched}}"</h3>
                    <div class="content d-flex">
                        <SerieCard v-for="card, index in store.seriesArray" :key="index" :card="card"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
h3 {
    text-transform: uppercase;
}

.content {
    overflow-x: auto;
    margin-left: 0;
    margin-right: 0;
    height: 500px;
    overflow-y: hidden;
}

.container-fluid {
    padding: 20px 0 0 0;
    position: absolute;
    top: 700px
}
</style>