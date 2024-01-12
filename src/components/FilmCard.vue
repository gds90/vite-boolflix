<script>

export default {
    name: 'FilmCard',
    props: {
        card: Object
    },
    methods: {
        flag(language) {
            let src = '';

            if (language == 'en') {
                src = `https://flagsapi.com/GB/shiny/24.png`;
                return src;
            }
            if (language == 'ja') {
                src = `https://flagsapi.com/JP/shiny/24.png`;
                return src;
            }
            if (language == 'da') {
                src = `https://flagsapi.com/DK/shiny/24.png`;
                return src;
            }
            src = `https://flagsapi.com/${language.toUpperCase()}/shiny/24.png`;
            return src;
        }
    },
}
</script>
<template lang="">
    <div class="cards col-4">
        <h5 class="title">{{card.title}}</h5>
        <h6 class="original_title">Titolo originale: {{card.original_title}}</h6>
        <div class="language">
            Lingua:
            <img class="flag" :src="flag(card.original_language)">
        </div>
        <div class="vote">Voto: {{card.vote_average}}</div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';

.cards {
    margin: 20px 0;
}
</style>