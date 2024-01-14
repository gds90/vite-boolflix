<script>

export default {
    name: 'SerieCard',
    props: {
        card: Object
    },
    methods: {
        // gestione bandiere lingua
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
            if (language == 'ko') {
                src = `https://flagsapi.com/KR/shiny/24.png`;
                return src;
            }
            if (language == 'zh') {
                src = `https://flagsapi.com/CN/shiny/24.png`;
                return src;
            }
            if (language == 'hi') {
                src = `https://flagsapi.com/ID/shiny/24.png`;
                return src;
            }
            src = `https://flagsapi.com/${language.toUpperCase()}/shiny/24.png`;
            return src;
        },
        // metodo per recuperare l'url corretto del poster
        getPosterUrl(path) {


            if (path !== null) {
                return 'https://image.tmdb.org/t/p/w500' + path;
            }
            else {
                return 'https://idaid.com/wp-content/themes/semplice/images/no_thumb.png';
            }
        }
    },
    computed: {
        getStarsRate() {
            let starsRate = Math.round(this.card.vote_average / 2)
            return starsRate
        }
    }
}
</script>
<template lang="">
    <div class="cards col-3">
        <div class="posterContainer mb-2">
            <img :src="getPosterUrl(card.poster_path)" :alt="card.title">
        </div>
        <h5 class="title">{{card.name}}</h5>
        <h6 class="original_title">Titolo originale: {{card.original_name}}</h6>
        <div class="language">
            Lingua:
            <img class="flag" :src="flag(card.original_language)" :alt="card.original_language">
        </div>
        <div class="vote">Voto: {{getStarsRate}}</div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';

.cards {
    margin: 20px 0;

    .posterContainer {
        height: 500px;

        img {
            width: 100%;
            height: 100%;

        }
    }
}
</style>