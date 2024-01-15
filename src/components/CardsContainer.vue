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
                <h3 class="my-3 ms-3 fw-bold text-white" v-if="store.filmsArray.length > 0">Film</h3>
                <div class="content d-flex">
                    <FilmCard v-for="card, index in store.filmsArray" :key="index" :card="card"/>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-12">
                <h3 class="my-3 ms-3 fw-bold text-white" v-if="store.seriesArray.length > 0">Serie Tv</h3>
                <div class="content col-12 d-flex">
                    <SerieCard v-for="card, index in store.seriesArray" :key="index" :card="card"/>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.content {
    overflow-x: auto;
    margin-left: 0;
    margin-right: 0;
    height: 420px;
    overflow-y: hidden;
    //box-shadow: inset -10px 20px 20px 0px #000000
}

.container-fluid {
    padding-top: 80px;
}
</style>