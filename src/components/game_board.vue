<template>
    <div id="board">
        <div class="board-tile board-a2"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-a3"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-a1"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-b1"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-b2"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-b3"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-c1"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-c2"><img :src="selectedTile.tile.src"></div>
        <div class="board-tile board-c3"><img :src="selectedTile.tile.src"></div>
    </div>
</template>

<script>
import tiles from '../data/tile';
export default {
    name: 'game_board',
    data () {
            return {
               tiles,
               tileType: 0
            }
        },
    computed: {
        selectedTile (tileType) {
            return {
                tile: tiles.tile[this.tileType]
            }
        }
    },
    methods: {
        selectTileIndex() {
            return 0;
        }
    }
}
    
    
</script>

<style scoped>
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
    .tile {
        size: 50%;
    }
</style>