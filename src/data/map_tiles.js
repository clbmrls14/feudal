import tiles from './tile.js';

var areas = {
    a1:
        {
            name: "a1",
            tile_type: tiles.tile[2],
            eventCompleted: true
        },
    a2: 
        {
            name: "a2",
            tile_type: tiles.tile[0],
            eventCompleted: true
        },
    a3:
        {
            name: "a3",
            tile_type: tiles.tile[0],
            eventCompleted: true
        },
    a4:
        {
            name: "a4",
            tile_type: tiles.tile[0],
            eventCompleted: true
            
        },
    a5:
        {
            name: "a5",
            tile_type: tiles.tile[2],
            eventCompleted: true
            
        },
    b1:
        {
            name: "b1",
            tile_type: tiles.tile[0],
            eventCompleted: true
        },
    b2:
        {
            name: "b2",
            tile_type: tiles.tile[2],
            eventCompleted: true
        },
    b3:
        {
            name: "b3",
            tile_type: tiles.tile[2],
            eventCompleted: true
        },
    b4:
        {
            name: "b4",
            tile_type: tiles.tile[1],
            eventCompleted: true
        },
    b5:
        {
            name: "b5",
            tile_type: tiles.tile[0],
            eventCompleted: true
        },
    c1:
        {
            name: "c1",
            tile_type: tiles.tile[1],
            eventCompleted: true
        },
    c2:
        {
            name: "c2",
            tile_type: tiles.tile[0],
            eventCompleted: true
        },
    c3:
        {
            name: "c3",
            tile_type: tiles.tile[0],
            eventCompleted: true
        },
    c4:
        {
            name: "c4",
            tile_type: tiles.tile[1],
            eventCompleted: true
        },
    c5:
        {
            name: "c5",
            tile_type: tiles.tile[1],
            eventCompleted: true
        },
     d1:
        {
            name: "d1",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                }
            }
        },
    d2:
        {
            name: "d2",
            tile_type: tiles.tile[5],
            eventCompleted: true
        },
    d3:
        {
            name: "d3",
            tile_type: tiles.tile[3],
            eventCompleted: true
        },
    d4:
        {
            name: "d4",
            tile_type: tiles.tile[0],
            eventCompleted: true
        },
    d5:
        {
            name: "d5",
            tile_type: tiles.tile[0],
            eventCompleted: true
        },
    e1:
        {
            name: "e1",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                alert("e1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                        `You have arrived in the far reaches of the kingdom. Now go find the thing you need to find.
                        Be careful of bandits!
                        `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                }
            }
        },
    e2:
        {
            name: "e2",
            tile_type: tiles.tile[1],
            eventCompleted: true
        },
    e3:
        {
            name: "e3",
            tile_type: tiles.tile[0],
            eventCompleted: true
        },
    e4:
        {
            name: "e4",
            tile_type: tiles.tile[0],
            eventCompleted: true
        },
    e5:
        {
            name: "e5",
            tile_type: tiles.tile[5],
            eventCompleted: true
        }
};

export default areas;