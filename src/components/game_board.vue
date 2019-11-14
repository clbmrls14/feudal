<template>
<main>
    <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative&display=swap" rel="stylesheet">
    <h1>Feudal, a game of Love and War</h1>
    <div id="board">
        <div class="board-tile board-a2" @click="swapTile()"><img :src="selectedTile.tile.src"/></div>
        <div class="board-tile board-a3"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-a1"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-b1"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-b2"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-b3"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-c1"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-c2"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-c3"><img :src="selectedTile.tile.src"></div>
    </div>
</main>
</template>

<script>
import tiles from '../data/tile';
import figures from '../data/figure';


export default {
    name: 'game_board',
    data () {
            return {
               tiles,
               tileType: 0,
               figures,
               figType: 1
               
            }
        },
    computed: {
        selectedTile (tileType) {
            return {
                tile: tiles.tile[this.tileType]
            }
        },
        selectedFigure (figType) {
            return {
                royalty: figures.royaltys[this.figType],
                solider: figures.soldiers[this.figType]
            }
        }
    },
    methods: {
        selectTileIndex() {
            return 0;
        },
        swapTile () {
            //return selectedFigure.royalty.src
        var bigImg = document.querySelector('#board');

        bigImg.setAttribute('src', e.target.src.replace('selectedTile.tile.src', 'selectedFigure.royalty.src'));

        }
    }

}       
    
    
</script>

<style scoped>
    h1 {
        font-family: 'Cinzel Decorative', cursive;
        padding: 1em;
    }
    div#board {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
        grid-template-areas:
            'a1 a2 a3'
            'b1 b2 b3'
            'c1 c2 c3'
        ;
        grid-gap: 10px;
        justify-content: center;
    }
    img {
        height: 50%;
    }
</style>