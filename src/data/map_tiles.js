import tiles from './tile.js';
import player from './player.js'
import map from './game_map.js'
import weapons from './weapons.js';

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
                if (!this.eventCompleted) {
                    document.querySelector(".eventInfo").innerHTML =
                    `<p>To the east lies an old castle, smoke rising from its courtyard.</p>
                    <p>You're surrounded by the remains of battle. Arrows stick out of the ground, 
                    the earth is charred in some places. Worms crawl from every direction towards
                    the castle, and you feel a terrible sense of dread.</p>`;
                    this.eventCompleted=true;
                }
                else {
                    document.querySelector(".eventInfo").innerHTML =
                    `<p>To the east lies an old castle, smoke rising from its courtyard.</p>`;
                }
                
            }
        },
    a4:
        {
            name: "a4",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                document.querySelector(".eventInfo").innerHTML =
                    `You're as far north as you can go, and you're starting to feel the cold in your bones.`;
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
                if (!this.eventCompleted && player.items.includes("scroll")) {
                    window.b1 = function() {
                        document.querySelector(".eventInfo").innerHTML = `
                        <p>You draw your sword strike the groundskeeper</p>
                        <p>He blocks your blow and returns a with a strike of his own...</p>

                        <p>You use the scroll to enter a room where you retrieve a the sacred crown</p>
                        <p>but it is missing the center stone</p>
                        
                       `
                        ;
                        player.items.push("broken crown")
                        map[1][0].eventCompleted = true;
                    };
                    window.b1nd = function() {
                        document.querySelector(".eventInfo").innerHTML = `
                        <p>"The groundskeeper buys your scroll for 4 gold "</p>
                        <p>You take your gold and head south...</p>

                        
                       `
                        ;
                        player.money +=4;
                        map[1][0].eventCompleted = true;
                    };
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>As you enter the graveyard you are confronted by a man who appears to be the groundskeeper...</p>
                    <p>"He tells you that you aren't welcome and you can't enter"</p>
                    <p>"I'll pay you an handsome sum if you leave now"</p>
                    <p>You think to yourself "I wonder what he is hiding in there"</p>
                    <button onclick="window.b1()">Fight</button>
                    <button onclick="window.b1nd()">Take gold</button>`;
                }
                else {
                    document.querySelector(".eventInfo").innerHTML = "The graveyard is desolate, the groundskeeper is gone... ";
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
                if ( !this.eventCompleted && player.items.includes("broken crown") && !player.items.includes("missing jewel"))  {
                    window.b4 = function() {
                        document.querySelector(".eventInfo").innerHTML = `
                        <p>The Shaman pulls out the missing stone</p>
                        <p>As the stone touches your hand you feel your life leaving you</p>
                        
                       `
                        ;
                        player.health -= 4;
                        player.items.push("missing jewel");
                        map[1][3].eventCompleted = true;
                    };
                    window.b4nd = function() {
                        document.querySelector(".eventInfo").innerHTML = `
                        <p>The Shaman threatens to take your life</p>
                        <p>You grab you things and flee as fast as you can</p>
                        <p>You can hear the Shaman cackling as you flee</p>
                        <p>You think to yourself "I hope that I never run into him again</p>
                       `
                        ;
                        map[1][3].eventCompleted = true;
                    };
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>A Shaman appears:</p>
                    <p>"I carry something of great value to you..."</p>
                    <p>"I will give it to you but it will cost you dearly"</p>
                    <button onclick="window.b4()">Take Item</button>
                    <button onclick="window.b4nd()">Flee</button>`;
                }
                else {
                    document.querySelector(".eventInfo").innerHTML = `This place gives you an eerie 
                    feeling like you are being watched. `;
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
                    window.b5 = function() {
                        document.querySelector(".eventInfo").innerHTML =
                        `<p>You take some time to bury the knight. You choose to bury him in the soft earth
                        just south by the swamp. As you lift the body into the grave, you notice something 
                        glimmering in the knights stiff hand. You open his curled fingers to find a gold 
                        piece.</p>
                        <p>You pocket the gold and bury the corpse.</p>
                        <p style="color:gold">You gain 1 gold.</p>`
                        map[1][4].eventCompleted = true;
                        player.money += 1;
                        
                    }
                    document.querySelector(".eventInfo").innerHTML =
                    `<p>You stumble across the body of a knight lying against a tree stump, arrows
                     still stuck in his chest. His sword must have been taken by mauraders, there's
                     nothing but a corpse in worn armor left.<p>
                     <button onclick="window.b5()">Bury the knight</button>
                     <div id="story"></div>`;
                }
                else {
                    document.querySelector(".eventInfo").innerHTML =
                    `You can see the grave where you buried the knight. There are worms crawling in the dirt over
                    the grave.`;
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
                    `You've stumbled upon a camp full of bandits!
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
                    window.d1 = function() {
                        document.querySelector(".eventInfo").innerHTML = `
                        <p>    "There are no knights here anymore. No shortage of worms though."</p>
                        <p>He can tell you're confused, so he continues.</p>
                        <p>    "The land here is rotten, and the usurper here is the reason. He's been driven mad by old prophecies."</p>
                        <p>The man continues muttering as he goes back to fishing. You can't understand him anymore, so you leave him be.</p> `
                        ;
                        map[3][0].eventCompleted = true;
                    };
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>There is a lake to the East, and a man fishing lazily. He sees you and beckons you over.</p>
                    <button onclick="window.d1()">Speak to the fisherman</button>`
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
            merchantHelped: false,
            event: function() {
                //alert("d1 event triggered!")
                if (this.merchantHelped) {
                    var eventString =`
                    <p>As you enter the town you see the merchant that you helped:</p>
                    <p>The merchant heals you gain 4 health</p>
                    <p>You then run into a shop keeper</p>
                    <p>who asks "Do you want purchase a weapon"</p>
                    <p>"what kind of weapons do you have?"</p>
                    <p>The shop keeper pulls out a shiny sword "The best swords in the kingdom"</p>
                    <p>"How much is it?"</p>
                    <p>"5 gold, do you wish to purchase the sword?"</p>
                    <button onclick="window.d3()">Yes </button>
                    <button onclick="window.d3nd()">No maybe next time</button>`;
                    document.querySelector(".eventInfo").innerHTML =
                    
                    player.health += 4;
                    this.merchantHelped = false;
                }else{
                    var eventString =`<p>As you enter the town a shop keeper approaches you:</p>
                    <p>and asks "Do you want purchase a weapon"</p>
                    <p>"what kind of weapons do you have?"</p>
                    <p>The shop keeper pulls out a shiny sword "The best swords in the kingdom"</p>
                    <p>"How much is it?"</p>
                    <p>"5 gold, do you wish to purchase the sword?"</p>
                    <button onclick="window.d3()">Yes </button>
                    <button onclick="window.d3nd()">No maybe next time</button>`;
                }
                if (player.weapon.name === "Old Sword") {
                    if(!player.items.includes("scroll")){
                        player.items.push('scroll');
                    }
                    window.d3 = function() {
                       if(player.money >= 5){
                            document.querySelector(".eventInfo").innerHTML = `<p>You pay the man for the sword 
                            and attach it to your hip as you remove your old sword</p>`;
                            player.weapon = weapons[1];
                            player.money -= 5;
                       } else{
                        document.querySelector(".eventInfo").innerHTML = `<p>You don't have enough money you must leave and find more!</p>`;
                       }
                        
                    };
                    window.d3nd = function() {
                        document.querySelector(".eventInfo").innerHTML = `
                        <p>As walk away from the shop the shop owner says </p>
                        <p>"Come back soon we would love to do business with you!"</p>
                        <p>You think to yourself "that man was almost too nice to be living in this desolate place"</p>
                        
                       `
                        ;
                    };
                    document.querySelector(".eventInfo").innerHTML = eventString;
                    
                }
                else {
                    document.querySelector(".eventInfo").innerHTML = `The shop keeper is gone I guess he only wanted you money`;
                } if (this.merchantHelped) {
                    document.querySelector(".eventInfo").innerHTML =
                    `You helped the merchant!`;
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
                    window.random = function (min, max) {
                        return Math.floor(Math.random() * (max - min + 1) ) + min;
                      }
                    window.e2 = function(x) {
                        var ratHealth = 7;
                        var damage;
                        switch(x) {
                            case 0:
                                document.querySelector(".eventInfo").innerHTML = 
                                ``;
                                 break;
                            case 1:
                                document.querySelector(".eventInfo").innerHTML =
                                `<p>You reach for the shiny object but the rat quickly turns and lunges at you!</p>
                                <p>You hold your arm up to block the blow, but the rat bites down hard.</p>
                                <p>You quickly shake the rat off, dealing 2 damage to the giant rat!</p>
                                <p>Still, you feel the sting and a swell of blood where you were bitten.</p>
                                <p style="color:red">You lose 2 health</p>`;
                                player.health -= 2;
                                ratHealth -= 2;
                                break;
                            default:
                                document.querySelector(".eventInfo").innerHTML =
                                `How did you do this? Explain yourself.`;
                        };
                        while (ratHealth > 0) {
                            damage = window.random(0,2);
                            document.querySelector(".enemyattack").innerHTML =
                            `<p>The rat attacks, dealing ${damage}!</p>`;

                            damage = Math.floor(Math.random() * player.weapon.highStat) + player.weapon.lowStat;
                            document.querySelector(".playerattack").innerHTML =
                            `<p>You swing at the rat, dealing ${damage}!</p>`;
                            ratHealth -= damage;
                        }
                        document.querySelector(".eventInfo").innerHTML =
                        `<p>You slay the giant rat. It turns out the shiny object you saw was an old belt buckle.</p>
                         <p>You cut off the rat's tail, it's probably worth a gold coin to someone.</p>
                         <p style="color:gold">You gain 1 gold.</p>`;
                         map[4][1].eventCompleted = true;
                         player.money += 1;
                    }
                    document.querySelector(".eventInfo").innerHTML = 
                        `<p>While wading through the swamps you see massive rat. It's fangs are dripping with a pungent ooze.</p>
                        <p>The ray doesn't see you yet, so you could leave. But you see something glimmering at it's feet...</p>
                        <p>Will you fight the rat or escape?</p>
                        <button onclick="window.e2(0)">Fight</button>
                        <button onclick="window.e2(1)">Take the shiny object</button>`
                }
            }
        },
    e3:
        {
            name: "e3",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                if (!this.eventCompleted) {
                    window.e3 = function(x) {
                        switch(x) {
                            case 0:
                                document.querySelector(".eventInfo").innerHTML = 
                                `<p>The merchant is easily overpowered, he collapses as soon as you draw your weapon.</p>
                                 <p>You hold your weapon to his throat, and demand he open the cashbox. He does so quickly 
                                 as he pleads for his life.</p>
                                 <p>    "Please, please... This land is rotten enough."</p>
                                 <p>You take the gold from the cashbox and leave the merchant pleading in the mud.</p>
                                 <p style="color:gold">You gain 3 gold.</p>`;
                                 player.money +=3;
                                 map[3][2].merchantHelped = false;
                                 break;
                            case 1:
                                document.querySelector(".eventInfo").innerHTML =
                                `<p>Without saying anything you go to the rear of the cart and lift the wheel out of the 
                                mud. The cart isn't heavy, the merchant really must not have anything. With a strong push 
                                the cart is freed.</p>
                                <p>Without so much as a 'thank you', the merchant hurries off towards the village with his cart.</p>`;
                                map[3][2].merchantHelped = true;
                                break;
                            default:
                                document.querySelector(".eventInfo").innerHTML =
                                `How did you do this? Explain yourself.`;
                        }
                        
                    }
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>On the road to the village you see an elderly merchant with a cart stuck in the mud.</p>
                     <p>    "Please, please, I don't have much, just leave me be."</p>
                     <p>The merchant is clearly nervous about your presence. He steps in front of what looks like a 
                     cashbox, clearly he has <i>something</i>.
                     <p>He could use some help, but it seems like he'd rather you just move on.</p>
                     <button onclick="window.e3(0)">Rob the merchant</button>
                     <button onclick="window.e3(1)">Unstuck the cart</button>`;
                     map[4][2].eventCompleted = true;
                }
                else if (map[3][2].merchantHelped) {
                    document.querySelector(".eventInfo").innerHTML = 
                    `You see the mud puddle where the merchant was stuck. The village is to the north.`;
                } else {
                    document.querySelector(".eventInfo").innerHTML = 
                    `The merchant is gone. The cart is abandoned, but it's empty.`;
                }
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
                    `As you are traveling you run into a woman, weeping over a body on the side of the road.
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
                    var compString = `The woman is no longer here`;
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