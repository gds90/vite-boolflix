import { reactive } from 'vue';

export const store = reactive({
    app_title: 'BOOLFIX',
    endpoint: 'https://api.themoviedb.org/3',
    searchFilm: 'https://api.themoviedb.org/3/search/movie',
    searchSerie: 'https://api.themoviedb.org/3/search/tv',
    apiKey: '?api_key=90b44e3da2719a7753a92b81c9a32639&language=it',
    filmsArray: [],
    seriesArray: [],
    popularFilmsArray: [],
    popularSeriesArray: [],
    search: '',
    navLinks: ['Home', 'Serie TV', 'Film', 'Nuovi e popolari', 'La mia lista'],
    flagSearchMessage: false,
    showSearchInput: false,
    loading: true
})
