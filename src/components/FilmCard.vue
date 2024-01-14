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
        getPosterUrl(path) {
            let src = '';

            if (path !== null) {
                return src = 'https://image.tmdb.org/t/p/w500' + path;
            }
            else {
                return src = 'https://idaid.com/wp-content/themes/semplice/images/no_thumb.png';
            }
        }
    },
}
</script>
<template lang="">
    <div class="cards col-3">
        <div class="posterContainer mb-2">
            <img :src="getPosterUrl(card.poster_path)" :alt="card.title">
        </div>
        <h5 class="title">{{card.title}}</h5>
        <h6 class="original_title">Titolo originale: {{card.original_title}}</h6>
        <div class="language">
            Lingua:
            <img class="flag" :src="flag(card.original_language)" :alt="card.original_language">
        </div>
        <div class="vote">Voto: {{card.vote_average}}</div>
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