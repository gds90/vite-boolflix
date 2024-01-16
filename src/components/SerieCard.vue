<script>

export default {
    name: 'FilmCard',
    props: {
        card: Object
    },
    data() {
        return {
            isFlipped: false
        }
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
                return './src/assets/icon-image-not-found-free-vector.jpg';
            }
        }
    },
    computed: {
        getStarsRate() {
            let starsRate = Math.ceil(this.card.vote_average / 2)
            return starsRate
        }
    }
}
</script>
<template lang="">
    <div class="cards col-12 col-sm-6 col-md-4 col-lg-2" :class="isFlipped == true ? 'flipped' : '' " @mouseover="isFlipped = true" @mouseleave="isFlipped = false">
        <!-- front della carta -->
        <div class="front">
            <img :src="getPosterUrl(card.poster_path)" :alt="card.title" src="../assets/">
        </div>
        <!-- back della carta -->
        <div class="back bg-black text-white text-center ">
            <h5 class="title fs-4 ">{{card.name}}</h5>
            <h6 v-if="card.name !== card.original_name" class="original_title">Titolo originale: {{card.original_name}}</h6>
            <div class="language">
                Lingua originale:
                <img class="flag" :src="flag(card.original_language)" :alt="card.original_language">
            </div>
            <div class="vote mt-1">
                Voto: 
                <!-- Stelle piene -->
                <span v-for="index in getStarsRate" :key="index">
                    <i class="fas fa-star goldStar"></i>
                </span>
                <!-- Stelle vuote -->
                <span v-for="index in 5 - getStarsRate" :key="index">
                    <i class="far fa-star"></i>
                </span>
            </div>
            <div class="overview mt-2">
                <p>
                    {{card.overview}}
                </p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';

.cards {
    margin: 10px 5;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1s;
    min-width: 260px;

    .front,
    .back {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-backface-visibility: hidden;
        /* Safari */
        backface-visibility: hidden;
        transform-style: preserve-3d;
        border: 1px solid black;
    }

    .front {
        box-shadow: 0 0 20px 5px black;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }
    }

    .back {
        transform: rotateY(180deg);
        backface-visibility: hidden;
        padding: 10px;
        overflow-y: auto;

        .goldStar {
            color: gold;
        }

        .overview {
            font-size: 12px;
            text-align: left;
        }
    }

    &:hover {
        &.flipped {
            transform: rotateY(-180deg);
        }
    }


}
</style>