<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <header class="bg-black">
        <div class="container-fluid h-100">
            <div class="row pt-2">
                <div class="col-1 pt-1">
                    <img id="logo" src="../assets/boolfix_logo.png" alt="">
                </div>
                <!-- Nav con link -->
                <div class="col-7 pt-3">
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
                    <input id="search" type="text" class="form-select" placeholder="Cerca.." v-model="this.store.search" @keyup.enter="$emit('perform_search')">
                    <button class="btn btn-danger ms-2" @click="$emit('perform_search')">Cerca</button>
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

    input {
        width: 250px
    }
}
</style>