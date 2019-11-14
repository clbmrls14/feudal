<template>
<main>
    <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative&display=swap" rel="stylesheet">
    <h1>Feudal, a game of Love and War</h1>
    <div id="board">
        <div class="board-tile board-a2"><img :src="tile_board[0][0].src"></div>
        <div class="board-tile board-a3"><img :src="tile_board[0][1].src"></div>
        <div class="board-tile board-a1"><img :src="tile_board[0][2].src"></div>
        <div class="board-tile board-b1"><img :src="tile_board[1][0].src"></div>
        <div class="board-tile board-b2"><img :src="tile_board[1][1].src"></div>
        <div class="board-tile board-b3"><img :src="tile_board[1][2].src"></div>
        <div class="board-tile board-c1"><img :src="tile_board[2][0].src"></div>
        <div class="board-tile board-c2"><img :src="tile_board[2][1].src"></div>
        <div class="board-tile board-c3"><img :src="tile_board[2][2].src"></div>
    </div>
</main>
</template>

<script>
import game from '../data/tile';
import tile_board from '../data/tile';
export default {
    name: 'game_board',
    data () {
            return {
                tile_board,
                game,
                tileX: 1,
                tileY: 1,
                figType: 0
            }
        },
    computed: {
        selectedTile (tileX, tileY) {
            return {
                tile: tile_board[this.tileX][this.tileY]
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
        grid-template-columns: 10em 10em 10em;
        grid-template-rows: 10em 10em 10em;
        grid-template-areas:
            'a1 a2 a3'
            'b1 b2 b3'
            'c1 c2 c3'
        ;
        grid-gap: 10px;
        justify-content: center;
    }
    img {
        height: 100%;
        width: auto;
        /*height: 50%;*/
    }
</style>