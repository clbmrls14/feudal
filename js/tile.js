const images = require.context('../img', true, /\.png$/);

const tiles = {
    tile: [
        {
            id: 0,
            description: 'All figures can move on field tiles.',
            title: 'Field',
            src: imgages('')
        },
        {
            id: 1,
            description: 'Mounted figures may not move through the swamp.',
            title: 'Swamp',
            src: images('')
        },
        {
            id: 2,
            description: 'No characters may move through the mountain.',
            title: 'Mountain',
            src: images('')
        }
    ]
};