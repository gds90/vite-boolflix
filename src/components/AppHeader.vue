<script>
import { store } from '../store';
import 'vue';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
    methods: {
        toggleSearch() {
            // Mostra/nascondi il campo di input
            this.store.showSearch = !this.store.showSearch;

            setTimeout(() => {
                this.store.showSearch = !this.store.showSearch;
            }, 10000);
        }
    },
}
</script>
<template lang="">
    <header class="bg-black">
        <div class="container-fluid h-100">
            <div class="row pt-2">
                <div class="col-1 pt-1 ps-3">
                    <img id="logo" src="../assets/boolfix_logo.png" alt="">
                </div>
                <!-- Nav con link -->
                <div class="col-7 pt-3 ps-5">
                    <nav>
                        <ul class="d-flex">
                            <li v-for="link, index in store.navLinks">
                                <a href="#">{{link}}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <!-- Button e campo input per la ricerca-->
                <div class="col-4 my-2 d-flex justify-content-end">
                    <i class="fas fa-search" @click="toggleSearch"></i>
                    <div v-if="store.showSearch" class="searchItems">
                        <input id="search" type="text" class="form-select" placeholder="Cerca.." v-model="store.search" @keyup.enter="$emit('perform_search')">
                        <button class="btn btn-danger ms-2" @click="$emit('perform_search')" >Cerca</button>
                    </div>
                    <div class="temporary-message" :class="store.flagSearchMessage == true ? 'show' :''">
                        Cosa vuoi guardare?
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

header {
    height: 75px;
    width: 100%;
    margin: 0;
    position: fixed;
    z-index: 999;

    img {
        width: 150px;
    }

    ul {
        list-style: none;

        a {
            text-decoration: none;
            color: white;
            margin-left: 20px;
            line-height: 1;
        }
    }

    .temporary-message {
        position: absolute;
        bottom: -45%;
        right: 2%;
        transform: translateX(-50%);
        background-color: #fff;
        color: black;
        padding: 5px 10px;
        border-radius: 5px;
        opacity: 0;
        transition: opacity 1s ease;
    }

    .temporary-message:before {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 20px solid white;
        right: 50%;
        top: -10px;
        transform: translate(50%);
    }

    .temporary-message.show {
        opacity: 1;
    }

    .fa-search {
        cursor: pointer;
        color: #fff;
        font-size: 25px;
        padding: 10px;
    }

    .searchItems {
        position: relative;
        display: flex;
        width: 300px;
    }


    @media (max-width: 991px) {
        nav {
            display: none;
        }
    }
}
</style>