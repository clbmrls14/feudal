const images = require.context('./img', true, /\.png$/);

const game = {
    tile: [
        {
            id: 0,
            description: 'Fields are easy to cross.',
            title: 'Field',
            src: images('./tile_field.png'),
            passable: true,
            swamp: false

        },
        {
            id: 1,
            description: 'The swamp is treacherous, horses may not enter.',
            title: 'Swamp',
            src: images('./tile_swamp.png'),
            passable: true,
            swamp: true
        },
        {
            id: 2,
            description: 'You may not move through the mountain.',
            title: 'Mountain',
            src: images('./tile_mountain.png'),
            passable: true,
            swamp: false
        },
        {
            id: 3,
            description: 'Villages may contain new opportunities.',
            title: 'Village',
            src: images('./tile_village.png'),
            passable: true,
            swamp: false
        },
        {
            id: 4,
            description: 'Archers and squires may not enter the castle. When an enemy enters your castle, you lose.',
            title: 'Castle',
            src: images('./tile_village.png'),
            passable: true,
            swamp: false
        },
        {
          id: 5,
          description: 'You cannot move through a lake.',
          title: 'Lake',
          src: images('./tile_lake.png'),
          passable: false,
          swamp: false
      }
    ],
     figures: [
         {
             id: 0,
             description:'The king can only move 1 or 2 spaces in any direction',
             title: 'King',
             src: images('./figure_pikeman_blue_field.png'),
             royalty: true,
             horse: false,
           },
           {
             id: 1,
             description: 'The duke can move in any direction as many spaces as you want, but cannot cross swamps',
             title: 'Duke',
             src: images('./figure_pikeman_green_field.png'),
             royalty: true,
             horse: true,
           },
           {
             id: 2,
             description:'The prince can move in any direction for any length, but cannot cross swamps',
             title: 'Prince',
             src: images('./figure_pikeman_yellow_field.png'),
             royalty: true,
             horse: true,
           },
           {
             id: 3,
             description: 'Moves one square horizontally or vertically, then one square diagonally',
             title: 'Squire',
             src: images('./figure_pikeman_orange_field.png'),
             royalty: false,
             horse: false,
           },
           {
             id: 4,
             description: 'Can move in any direction for any length',
             title: 'knight',
             src: images('./figure_pikeman_pink_field.png'),
             royalty: false,
             horse: true,
           },
           {
             id: 5,
             description: 'Can move once diagonally or up to 12 forward/backward or from side to side',
             title: 'Pikeman',
             src: images('./test_figure.png'),
             royalty: false,
             horse: false,
           },
           {
             id: 6,
             description: 'Can move in three spaces or can shoot in three spaces',
             title: 'Archer',
             src: images('./figure_pikeman_green_field.png'),
             royalty: false,
             horse: false,
           },
           {
             id: 7,
             description: 'Can move up to 12 spaces diagonally or 1 forward/backward or side to side',
             title: 'Sergeant',
             src: images('./figure_pikeman_orange_field.png'),
             royalty: false,
             horse: false,
          },
          {
             id: 8,
             description: 'No figure',
             title: 'none',
             src: images('./nothing.png'),
             royalty: false,
             horse: false,
          }

     ],
};

export default game;
// import tiles from './tile.js';

// const tile_board = [
//     [tiles.tile[0], tiles.tile[0], tiles.tile[1]],
//     [tiles.tile[0], tiles.tile[2], tiles.tile[0]],
//     [tiles.tile[0], tiles.tile[1], tiles.tile[0]]
// ];

// export default tile_board;