<script>
export default {
    name: 'AppJumbotron',
    data() {
        return {
            activeSlide: 0,
            autoplayInterval: null,
            slides: [
                {

                    image: 'src/assets/jumbotron/dark_netflix.jpg',
                    title: 'Dark'
                },
                {
                    image: 'src/assets/jumbotron/house_of_cards.jpg',
                    title: 'House of Cards'
                },
                {
                    image: 'src/assets/jumbotron/one_piece.webp',
                    title: 'One Piece'
                },
                {
                    image: 'src/assets/jumbotron/peaky_blinders.jpg',
                    title: 'Peaky Blinders'
                },
                {
                    image: 'src/assets/jumbotron/stranger_things.jpg',
                    title: 'Dark'
                }
            ]
        }
    },
    mounted() {
        this.startAutoplay();
    },
    beforeDestroy() {
        this.stopAutoplay();
    },
    methods: {
        startAutoplay() {
            this.autoplayInterval = setInterval(this.nextSlide, 5000);
        },
        nextSlide() {
            this.activeSlide = (this.activeSlide + 1) % this.slides.length;
        }
    }
}
</script>
<template lang="">
    <div class="jumbotron">
        <Transition name="fade">
            <img :src="slides[activeSlide].image" :alt="slides[activeSlide].title">
        </Transition>
    </div>
</template>
<style lang="scss" scoped>
.jumbotron {
    position: relative;
    width: 100%;
    max-height: 800px;
    overflow: hidden;
    padding-top: 75px;

    img {
        width: 100%;
        height: auto;
        position: relative;
        z-index: -2;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

}

.jumbotron::before {
    content: "";
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>