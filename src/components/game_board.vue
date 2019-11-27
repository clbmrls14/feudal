<template>
<main>
    <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative&display=swap" rel="stylesheet">
    <h1>Feudal, a game of Love and War</h1>
    <div id="board">
        <div class="board-tile board-a2" @mouseover="tile_hover = map_grid[0][0].tile_type.title" @mouseleave="tile_hover = false" @click="move(0, 0)">
            <img class="tile_img" :src="map_grid[0][0].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[0][0]].src">
        </div>
        <div class="board-tile board-a3" @mouseover="tile_hover = map_grid[0][1].tile_type.title" @mouseleave="tile_hover = false" @click="move(0, 1)">
            <img class="tile_img" :src="map_grid[0][1].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[0][1]].src">
        </div>
        <div class="board-tile board-a1" @mouseover="tile_hover = map_grid[0][2].tile_type.title" @mouseleave="tile_hover = false" @click="move(0, 2)">
            <img class="tile_img" :src="map_grid[0][2].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[0][2]].src">
        </div>
        <div class="board-tile board-b1" @mouseover="tile_hover = map_grid[1][0].tile_type.title" @mouseleave="tile_hover = false" @click="move(1, 0)">
            <img class="tile_img" :src="map_grid[1][0].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[1][0]].src">
        </div>
        <div class="board-tile board-b2" @mouseover="tile_hover = map_grid[1][1].tile_type.title" @mouseleave="tile_hover = false" @click="move(1, 1)">
            <img  class="tile_img" :src="map_grid[1][1].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[1][1]].src">
        </div>
        <div class="board-tile board-b3" @mouseover="tile_hover = map_grid[1][2].tile_type.title" @mouseleave="tile_hover = false" @click="move(1, 2)">
            <img class="tile_img" :src="map_grid[1][2].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[1][2]].src">
        </div>
        <div class="board-tile board-c1" @mouseover="tile_hover = map_grid[2][0].tile_type.title" @mouseleave="tile_hover = false" @click="move(2, 0)">
            <img class="tile_img" :src="map_grid[2][0].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[2][0]].src">
        </div>
        <div class="board-tile board-c2" @mouseover="tile_hover = map_grid[2][1].tile_type.title" @mouseleave="tile_hover = false" @click="move(2, 1)">
            <img class="tile_img" :src="map_grid[2][1].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[2][1]].src">
        </div>
        <div class="board-tile board-c3" @mouseover="tile_hover = map_grid[2][2].tile_type.title" @mouseleave="tile_hover = false" @click="move(2, 2)">
            <img class="tile_img" :src="map_grid[2][2].tile_type.src">
            <img class="fig_img" :src="game.figures[fig_board[2][2]].src">
        </div>
        <div class="hud">
            <h2>HUD</h2>
        <div class="box">
            <p>this is the map hud</p>
            <span v-if="tile_hover">{{ tile_hover }}</span>
        </div> 
        <div class="box">
            <p>this is the player hud</p>
            <p> {{ player.name }} </p>
            <p>Health: {{ player.health }} </p>
            <p>Wealth: {{ player.money }} gold</p>
        </div> 
    </div>
    </div>
    
    
</main>
</template>

<script>
import game from '../data/tile';
import map_grid from '../data/game_map';
import fig_board from '../data/figure_board';
import player from '../data/player';

export default {
    name: 'game_board',
        data () {
            return {
                map_grid,
                fig_board,
                game,
                tile_hover: false,
                player
                //fig_hover: false
            }
        },
    methods: {
        say: function (message) {
            alert(message)
        },
        move (x, y) {
            if (map_grid[x][y].tile_type.passable === true) {
                for (var i = 0; i < fig_board.length; i++) {
                    for (var j = 0; j < fig_board.length; j++) {
                        if (fig_board[i][j] === 1) {
                            var currentx = i
                            var currenty = j
                        }
                    }
                }
                var viablex1 = currentx + 1
                var viablex2 = currentx - 1
                var viabley1 = currenty + 1
                var viabley2 = currenty - 1

                if (((x === viablex1) && (y === currenty)) || ((x === viablex2) && (y === currenty))) {
                    //alert("This area is passable at: " + x + " " + y)
                    fig_board[x][y] = 1
                    fig_board[currentx][currenty] = 0
                } else {
                    if (((x === currentx) && (y === viabley1)) || ((x === currentx) && (y === viabley2))) {
                        //alert("This area is passable at: " + x + " " + y)
                        fig_board[x][y] = 1
                        fig_board[currentx][currenty] = 0
                    }
                }
            } else {
                //alert("This area is impassable")
            }
            
        },
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
        font-size: 125%;
        position: relative;
        top: 6em;
        justify-content: left;
    }

    .hud{
        font-family: 'Cinzel Decorative', cursive;
        right: 0;
        padding-right: 5em;
        position: fixed;
        display: grid;
        grid-template-columns: 10em;
        grid-template-rows: 2em 15em 15em;
        grid-template-areas:
            'a'
            'b'
            'c'
            
        ;
        
        justify-content: center;
    }
    .box{
        font-family: 'Cinzel Decorative', cursive;
        font-weight: bold;
        border: 2px solid black;
        margin-top: 1em;
        
    }
</style>