<template>
    <div id="board">
        <p>Hello</p>
        <p>{{selectedTile.tile.src}}</p>
        <div class="tile board-a2"><img :src="selectedTile.tile.src"></div>
        <div class="tile board-a3"><img src=imgGet()></div>
        <div class="tile board-a1"><img src=imgGet()></div>
        <div class="tile board-b1"><img src=imgGet()></div>
        <div class="tile board-b2"><img src=imgGet()></div>
        <div class="tile board-b3"><img src=imgGet()></div>
        <div class="tile board-c1"><img src=imgGet()></div>
        <div class="tile board-c2"><img src=imgGet()></div>
        <div class="tile board-c3"><img src=imgGet()></div>
    </div>
</template>

<script>
import tiles from '../assets/data/tile';
export default {
    name: 'game_board',
    data () {
            return {
               tiles
            }
        },
       computed: {
        selectedTile () {
            return {
                tile: tiles.tile[1]
            }
        }
    } //tile_img: '../assets/img/tile_field.png'
}
    
// var board = new Vue({
//         el: '#board',
//         data: {
//         tile_img: '../assets/img/tile_field.png'
//     }
//     })
    /*var game_board = new Vue({
        el: '#board',
        data: {
            board_height: 3,
            board_width: 3,
        }
    });*/
    
</script>

<style scoped>
    div.board {
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
    .tile {
        size: 50%;
    }
</style>