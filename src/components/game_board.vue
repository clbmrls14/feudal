<template>
<main>
    <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative&display=swap" rel="stylesheet">
    <h1>Feudal, a game of Love and War</h1>
    <div id="board">
        <div class="board-tile board-a2" @mouseover="tile_hover = map_grid[0][0].tile_type.title" @mouseleave="tile_hover = false" @click="move(0, 0)">
            <img class="tile_img" :src="map_grid[0][0].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[0][0]].src" @mouseover="fig_hover = game.figures[fig_board[0][0]].title" @mouseleave="fig_hover = false">
        </div>
        <div class="board-tile board-a3" @mouseover="tile_hover = tile_board[0][1].title" @mouseleave="tile_hover = false" @click="move(0, 1)">
            <img class="tile_img" :src="tile_board[0][1].src">
            <img class="fig_img" :src="game.figures[fig_board[0][1]].src" @mouseover="fig_hover =game.figures[fig_board[0][1]].title" @mouseleave="fig_hover = false">
        </div>
        <div class="board-tile board-a1" @mouseover="tile_hover = tile_board[0][2].title" @mouseleave="tile_hover = false" @click="move(0, 2)">
            <img class="tile_img" :src="tile_board[0][2].src">
            <img class="fig_img" :src="game.figures[fig_board[0][2]].src" @mouseover="fig_hover = game.figures[fig_board[0][2]].title" @mouseleave="fig_hover = false">
        </div>
        <div class="board-tile board-b1" @mouseover="tile_hover = tile_board[1][0].title" @mouseleave="tile_hover = false" @click="move(1, 0)">
            <img class="tile_img" :src="tile_board[1][0].src">
            <img class="fig_img" :src="game.figures[fig_board[1][0]].src" @mouseover="fig_hover = game.figures[fig_board[1][0]].title" @mouseleave="fig_hover = false">
        </div>
        <div class="board-tile board-b2" @mouseover="tile_hover = tile_board[1][1].title" @mouseleave="tile_hover = false" @click="move(1, 1)">
            <img  class="tile_img" :src="tile_board[1][1].src">
            <img class="fig_img" :src="game.figures[fig_board[1][1]].src" @mouseover="fig_hover = game.figures[fig_board[1][1]].title" @mouseleave="fig_hover = false">
        </div>
        <div class="board-tile board-b3" @mouseover="tile_hover = tile_board[1][2].title" @mouseleave="tile_hover = false" @click="move(1, 2)">
            <img class="tile_img" :src="tile_board[1][2].src">
            <img class="fig_img" :src="game.figures[fig_board[1][2]].src" @mouseover="fig_hover = game.figures[fig_board[1][2]].title" @mouseleave="fig_hover = false">
        </div>
        <div class="board-tile board-c1" @mouseover="tile_hover = tile_board[2][0].title" @mouseleave="tile_hover = false" @click="move(2, 0)">
            <img class="tile_img" :src="tile_board[2][0].src">
            <img class="fig_img" :src="game.figures[fig_board[2][0]].src" @mouseover="fig_hover = game.figures[fig_board[2][0]].title" @mouseleave="fig_hover = false">
        </div>
        <div class="board-tile board-c2" @mouseover="tile_hover = tile_board[2][1].title" @mouseleave="tile_hover = false" @click="move(2, 1)">
            <img class="tile_img" :src="tile_board[2][1].src">
            <img class="fig_img" :src="game.figures[fig_board[2][1]].src" @mouseover="fig_hover = game.figures[fig_board[2][1]].title" @mouseleave="fig_hover = false">
        </div>
        <div class="board-tile board-c3" @mouseover="tile_hover = tile_board[2][2].title" @mouseleave="tile_hover = false" @click="move(2, 2)">
            <img class="tile_img" :src="tile_board[2][2].src">
            <img class="fig_img" :src="game.figures[fig_board[2][2]].src" @mouseover="fig_hover = game.figures[fig_board[2][2]].title" @mouseleave="fig_hover = false">
        </div>
    </div>
    <span v-if="tile_hover">{{ tile_hover }}</span>
    <span v-if="fig_hover">{{ fig_hover }}</span>
</main>
</template>

<script>
import game from '../data/tile';
import map_grid from '../data/game_map';
import fig_board from '../data/figure_board';

export default {
    name: 'game_board',
    data () {
            return {
                map_grid,
                fig_board,
                game,
                tile_hover: false,
                fig_hover: false,
                //figId: 8,
                // tileX: 1,
                // tileY: 1,
                //figType: 0
            }
        },
    // computed: {
    //     selectedTile (tileX, tileY) {
    //         return {
    //             tile: tile_board[this.tileX][this.tileY]
    //         }
    //     },
    //     selectedFigure (figType) {
    //         return {
    //             royalty: figures.royaltys[this.figType],
    //             solider: figures.soldiers[this.figType]
    //         }
    //     }
    // },
    methods: {
        say: function (message) {
            alert(message)
    },
        // getTileName: function (tile_name) {
        //     return tile.title
        // },
        // selectTileIndex() {
        //     return 0;
        // },
        move (x, y) {
             //alert("this is the x and y coordinates " + x + " "+ y)
             if (tile_board[x][y].passable === true) {
                 for (var i = 0; i < fig_board.length; i++){
                     for (var j = 0; j < fig_board.length; j++){
                         if (fig_board[i][j] === 1){
                             fig_board[i][j] = 0
                         }
                     }
                 }
                 alert("This area is passable at: " + x + " "+ y)
                 fig_board[x][y] = 1
                 
             } else {
                 alert("This area is impassable")
             }

             
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
    .fig_img {
        position: relative;
        top: -10.2em;
        z-index: 10;
    }
    .tile_img {
        z-index: -1;
    }
    span {
        font-family: 'Cinzel Decorative', cursive;
        font-size: 200%;
        padding: 1em;
        border: 2px solid black;
        position: relative;
        top: 4em;
        justify-content: left;
    }
</style>