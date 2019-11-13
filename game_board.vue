<template>
    <div id="board">
        <div class="board-tile board-a2"><img :src="tile_img"></div>
        <div class="board-tile board-a3"><img :src="tile_img"></div>
        <div class="board-tile board-a1"><img :src="tile_img"></div>
        <div class="board-tile board-b1"><img :src="tile_img"></div>
        <div class="board-tile board-b2"><img :src="tile_img"></div>
        <div class="board-tile board-b3"><img :src="tile_img"></div>
        <div class="board-tile board-c1"><img :src="tile_img"></div>
        <div class="board-tile board-c2"><img :src="tile_img"></div>
        <div class="board-tile board-c3"><img :src="tile_img"></div>
    </div>
</template>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js">
    var game_board = new Vue({
        el: '#board',
        data: {
            board_height: 3,
            board_width: 3,
        }
    });

    var tile_field = new Vue({
        el: '#tile',
        data: {
            tile_img: "../img/tile_field.png"
        }
    });
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
</style>