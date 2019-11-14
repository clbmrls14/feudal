const images = require.context('./img', true, /\.png$/);

const game = {
    tile: [
        {
            id: 0,
            description: 'All figures can move on field tiles.',
            title: 'Field',
            src: images('./tile_field.png'),
            mountain: false,
            swamp: false

        },
        {
            id: 1,
            description: 'Mounted figures may not move through the swamp.',
            title: 'Swamp',
            src: images('./tile_swamp.png'),
            mountain: false,
            swamp: true
        },
        {
            id: 2,
            description: 'No characters may move through the mountain.',
            title: 'Mountain',
            src: images('./tile_mountain.png'),
            mountain: true,
            swamp: false
        }
    ]
    // figures: [
    //     {
    //         id: 0,
    //         description:'The king can only move 1 or 2 spaces in any direction',
    //         title: 'King',
    //         src: images('./'),
    //         royalty: true,
    //         horse: false,
    //       },
    //       {
    //         id: 1,
    //         description: 'The duke can move in any direction as many spaces as you want, but cannot cross swamps',
    //         title: 'Duke',
    //         src: images('./head-friendly.png'),
    //         royalty: true,
    //         horse: true,
    //       },
    //       {
    //         id: 2,
    //         description:'The prince can move in any direction for any length, but cannot cross swamps',
    //         title: 'Prince',
    //         src: images('./head-shredder.png'),
    //         royalty: true,
    //         horse: true,
    //       },
    //       {
    //         id: 3,
    //         description: 'Moves one square horizontally or vertically, then one square diagonally',
    //         title: 'Squire',
    //         src: images('./arm-articulated-claw.png'),
    //         royalty: false,
    //         horse: false,
    //       },
    //       {
    //         id: 4,
    //         description: 'Can move in any direction for any length',
    //         title: 'knight',
    //         src: images('./arm-articulated-claw.png'),
    //         royalty: false,
    //         horse: true,
    //       },
    //       {
    //         id: 5,
    //         description: 'Can move once diagonally or up to 12 forward/backward or from side to side',
    //         title: 'pikemen',
    //         src: images('./figure_pikeman_blue_field.png'),
    //         royalty: false,
    //         horse: false,
    //       },
    //       {
    //         id: 6,
    //         description: 'Can move in three spaces or can shoot in three spaces',
    //         title: 'Archer',
    //         src: images('./arm-articulated-claw.png'),
    //         royalty: false,
    //         horse: false,
    //       },
    //       {
    //         id: 7,
    //         description: 'Can move up to 12 spaces diagonally or 1 forward/backward or side to side',
    //         title: 'Sergeant',
    //         src: images('./arm-articulated-claw.png'),
    //         royalty: false,
    //         horse: false,
    //       }
    // ]
};

export default game;