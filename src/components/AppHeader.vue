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
        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <h1>{{store.app_title}}</h1>
                </div>
                <div class="col-6 my-2 d-flex justify-content-end ">
                    <input id="search" type="text" class="form-select" placeholder="Cerca.." v-model="this.store.search">
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
    margin: 0;
}

h1 {
    color: $primary_color;
}

input {
    width: 250px
}
</style>