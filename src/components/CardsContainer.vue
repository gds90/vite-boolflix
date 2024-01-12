<script>
import SingleCard from './SingleCard.vue';
import { store } from '../store';
export default {
    name: 'CardsContainer',
    data() {
        return {
            store
        }
    },
    components: {
        SingleCard
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <SingleCard v-for="card, index in store.filmsArray" :key="index" :card="card"/>
        </div>
        
    </div>
</template>
<style lang="">
    
</style>