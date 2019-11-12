const images = require.context('./images', true, /\.png$/);

const figures = {
  royalty: [
    {
      id: 1,
      description:'The king can only move 1 or 2 spaces in any direction',
      title: 'King',
      src: images('./head-big-eye.png'),
      type: 'royalty',
      horse: true,
    },
    {
      id: 2,
      description: 'The duke can move in any direction as many spaces as you want, cant cross swamps',
      title: 'Duke',
      src: images('./head-friendly.png'),
      type: 'royalty',
      horse: true,
    },
    {
      id: 3,
      description:'The prince can move in any direction for any length, cant cross swamps',
      title: 'Prince',
      src: images('./head-shredder.png'),
      type: 'royalty',
      horse: true,
    },
  ],
  soldiers: [
    {
      id: 1,
      description: 'Can move like the horse in chess',
      title: 'Squire',
      src: images('./arm-articulated-claw.png'),
      type: 'soldiers',
      horse: false,
    },
    {
      id: 2,
      description: 'Can move in any direction for any length',
      title: 'knight',
      src: images('./arm-articulated-claw.png'),
      type: 'soldiers',
      horse: true,
    },
    {
      id: 3,
      description: 'Can move once diagonally or up to 12 forward, back or from side to side',
      title: 'pikemen',
      src: images('./arm-articulated-claw.png'),
      type: 'soldiers',
      horse: false,
    },
    {
      id: 4,
      description: 'Can move in three spaces or can shoot in three spaces ',
      title: 'Archer',
      src: images('./arm-articulated-claw.png'),
      type: 'soldiers',
      horse: false,
    },
  ],
};
export default figures;