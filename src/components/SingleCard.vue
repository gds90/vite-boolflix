<script>

export default {
    name: 'SingleCard',
    props: {
        card: Object
    },
}
</script>
<template lang="">
    <div class="cards col-4">
        <h5 class="film_title">{{card.title}}</h5>
        <h6 class="original_title">Titolo originale: {{card.original_title}}</h6>
        <div class="language">Lingua originale: {{card.original_language}}</div>
        <div class="vote">Voto: {{card.vote_average}}</div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';

.cards {
    margin: 20px 0;
}
</style>