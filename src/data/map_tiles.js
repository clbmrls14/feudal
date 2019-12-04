import tiles from './tile.js';
import player from './player.js'
import map from './game_map.js'

var areas = {
    a1:
        {
            name: "a1",
            tile_type: tiles.tile[2]
        },
            
    a2: 
        {
            name: "a2",
            tile_type: tiles.tile[4],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    a3:
        {
            name: "a3",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    a4:
        {
            name: "a4",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
            
        },
    a5:
        {
            name: "a5",
            tile_type: tiles.tile[2]
        },
        // *************
    b1:
        {
            name: "b1",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `As you enter the graveyard you are confronted by a man who appears to be the groundskeeper...
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }else if(!player.items.includes("crown")){
                    var doneString =
                    `You've defeated the groundskeeper you enter your password and get the sacred crown
                    but it is missing the center jewel...
                    `;
                    player.items.push('crown');
                    document.querySelector(".eventInfo").innerHTML = doneString;
                }
            }
        },
    b2:
        {
            name: "b2",
            tile_type: tiles.tile[2]
        },
    b3:
        {
            name: "b3",
            tile_type: tiles.tile[2]
        },
    b4:
        {
            name: "b4",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if ( player.items.includes("crown")) {
                    var eventString = 
                    `A shaman appears and offers the missing jewel to the crown: 
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                } else {
                    document.querySelector(".eventInfo").innerHTML = `This place gives you a eery 
                    feeling like you are being watched.`;
                }
            }
        },
    b5:
        {
            name: "b5",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
        // *************
    c1:
        {
            name: "c1",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                document.querySelector(".eventInfo").innerHTML = 
                `You're in a dank swamp. It reeks of death, and to the north you see what looks like a graveyard.`;
            }
        },
    c2:
        {
            name: "c2",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                document.querySelector(".eventInfo").innerHTML = 
                `To the north you see mountains, to the south a lake. This idyllic valley seems welcoming, but 
                seems completely void of animal life.`;
            }
        },
    c3:
        {
            name: "c3",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                document.querySelector(".eventInfo").innerHTML = 
                `You can tell you're not the only one to travel this path. To south you see a small village.
                It looks far more appealing than the swamps to the east or mountains to the north.`;
            }
        },
    c4:
        {
            name: "c4",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    c5:
        {
            name: "c5",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    var eventString = 
                    `If you can read this we are wizards.
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
        // *************
     d1:
        {
            name: "d1",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    window.tellStory = function() {
                        document.getElementById("story").innerHTML = `
                        <p>    "There are no knights here anymore. No shortage of worms though."</p>
                        <p>He can tell you're confused, so he continues.</p>
                        <p>    "The land here is rotten, and the usurper here is the reason. He's been driven mad by old prophecies."</p>
                        <p>The man continues muttering as he goes back to fishing. You can't understand him anymore, so you leave him be.</p> `
                        ;
                        map[3][0].eventCompleted = true;
                    };
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>There is a lake to the East, and a man fishing lazily. He sees you and beckons you over.</p>
                    <button onclick="window.tellStory()">Speak to the fisherman</button>
                    <div id="story"></div>`
                }
                else {
                    document.querySelector(".eventInfo").innerHTML = "You think you can still hear the fisherman muttering to himself."
                }
            }
        },
    d2:
        {
            name: "d2",
            tile_type: tiles.tile[5]
        },
    d3:
        {
            name: "d3",
            tile_type: tiles.tile[3],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    if(player.items.includes("key")){
                        player.items.push('password');
                    }
                    var eventString = 
                    `You've entered the town do you wish to purchase a weapon?
                    `;
                    
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    d4:
        {
            name: "d4",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                document.querySelector(".eventInfo").innerHTML =
                `The village lies to the west. There are a lot of broken down and abandoned wagons here.`;
            }
        },
    d5:
        {
            name: "d5",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                document.querySelector(".eventInfo").innerHTML =
                `You've reached the edge of the kingdom, you don't dare go further`;
            }
        },
        // *************
    e1:
        {
            name: "e1",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                //alert("e1 event triggered!")
                var eventString = 
                    `You're back where you started. But you can't turn back now!'
                    `;
                document.querySelector(".eventInfo").innerHTML = eventString;
            }
        },
    e2:
        {
            name: "e2",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    document.querySelector(".eventInfo").innerHTML = 
                        `<p>While wading through the swamps you see massive rat. It's fangs are dripping with a pungent ooze.</p>
                        <p>Will you fight the rat or escape?</p>
                        <button id="option1">Fight</button>
                        <button id = "option2">Flee</button>`
                    //document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }
            }
        },
    e3:
        {
            name: "e3",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                document.querySelector(".eventInfo").innerHTML =
                `The path here leads to the village north, but it doesn't seem like it's been traveled for some time.`;
            }
        },
    e4:
        {
            name: "e4",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                if (!this.eventCompleted) {
                    var eventString = 
                    `As you are traveling you run into a weeping woman over a body on the side of the road.
                    She tells you that her husband was killed and her son was taken by bandits. She pleads
                    with you to help her...
                    `;
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    this.eventCompleted= true;
                }else if(map[2][3].eventCompleted && !player.items.includes("key")){
                    var doneString =
                    `The woman thanks you and gives you a key to the monastery that her husband used to teach at. 
                    `;
                    player.items.push('key');
                    document.querySelector(".eventInfo").innerHTML = doneString;
                } else {
                    var compString = `This event is already completed`;
                    document.querySelector(".eventInfo").innerHTML = compString;
                }
            }
        },
    e5:
        {
            name: "e5",
            tile_type: tiles.tile[5]
        }
};

export default areas;