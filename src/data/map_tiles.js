import tiles from './tile.js';
import player from './player.js'
import map from './game_map.js'
import weapons from './weapons.js';
import map_grid from './game_map.js';

window.random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.clean = function () {
    document.querySelector(".playerattack").innerHTML = "";
    document.querySelector(".enemyattack").innerHTML = "";
    document.querySelector(".buttons").innerHTML = "";
}

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
                if (!this.eventCompleted && !player.items.includes("missing jewel")) {
                    window.a2 = function() {
                        document.querySelector(".eventInfo").innerHTML = `
                        <p>You lunge forward swinging your sword wildly at the usurper</p>
                        <p>He blocks your blow he blocks you blows with ease...</p>

                        <p>You defeat the usurper</p>
                        <p>You are now the King but you don't have the crown so you must always be on guard
                        to keep you kingdom</p>
                        
                       `
                        ;
                        map[0][1].eventCompleted = true;
                        alert("You have beat the game!");
                        this.document.location.reload(true);
                    };
                    window.a2nd = function() {
                        document.querySelector(".eventInfo").innerHTML = `
                        <p>"You decide to leave the castle and live to fight another day "</p>       
                       `;
                        
                    };
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>You enter the castle sword drawn to fight the usurper for the kingdom</p>
                    <p>As you near the usurper he stands up he is much bigger then you expected</p>
                    <p>He says "it isn't too late to leave" </p>
                    <button onclick="window.a2()">Fight</button>
                    <button onclick="window.a2nd()">Flee</button>`;
                }
                else {
                    document.querySelector(".eventInfo").innerHTML = `
                    <p>You have come to the castle with the sacred crown the usurper gives up the throne!</p>
                    <p>You have won the game you are the King!</p>`;
                    map[0][1].eventCompleted = true;
                    alert("You have beat the game!");
                   location.reload(true);
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
                window.graveFight = function() {
                    var damage = window.random(2,4);
                    document.querySelector(".enemyattack").innerHTML = "";
                    document.querySelector(".eventInfo").innerHTML =
                    `<p>The bandit lunges, dealing ${damage} damage!</p>
                    <p style="color:red">You lose ${damage} health</p>`;
                    player.health -= damage;

                    damage = window.random(player.weapon.lowStat,player.weapon.highStat);
                    map[1][0].banditHealth -= damage;
                    document.querySelector(".playerattack").innerHTML =
                    `<p>You swipe at the bandit, dealing ${damage} damage!</p>
                    <p>Bandit Health: ${map[2][3].banditHealth}</p>`;

                    if (map[1][0].banditHealth > 0) {
                        document.querySelector(".enemyattack").innerHTML =
                        `<button onclick="window.c4()">Attack</button>`;
                    } else {
                        document.querySelector(".enemyattack").innerHTML =
                        `<p>The gravekeeper falls to the floor, motionless. He wasn't a young man, but you still find 
                        yourself breathless after the fight.</p>
                        <p>You approach the crypt and speak the words on the scroll. The crypt opens, revealing small
                        room, containing a broken crown, missing it's center jewel.</p>`;
                        map[1][0].eventCompleted = true;
                        player.items.push("Broken Crown");
                    }
                }

                window.sellScroll = function() {
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>"The groundskeeper buys your scroll for 4 gold "</p>
                    <p>You take your gold and head south...</p>`;
                    player.money +=4;
                    player.items.pop();
                    map[1][0].eventCompleted = true;
                };

                if (!this.eventCompleted && player.items.includes("scroll") && !player.items.includes("broken crown")) {
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>As you enter the graveyard you are confronted by a man who appears to be the groundskeeper...</p>
                    <p>"He tells you that you aren't welcome and you can't enter"</p>
                    <p>"I'll pay you an handsome sum if you leave now"</p>
                    <p>You think to yourself "I wonder what he is hiding in there"</p>
                    <button onclick="window.graveFight()">Fight</button>
                    <button onclick="window.sellScroll()">Take gold</button>`;
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
                window.clean();
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
                    `<p>A Shaman appears and says:</p>
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
                        <p>You gain 1 gold.</p>`
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
            merchantHelped: false,
            event: function() {
                window.clean();
                if (!this.eventCompleted) {
                    if (this.merchantHelped) {
                    document.querySelector(".eventInfo").innerHTML = 
                    `The merchant that was stuck in the mud approaches you and offers to heal you
                    since you helped him.`;
                    if(player.health > 6) {
                        player.health = 10;
                    } else{
                       player.health += 4;
                    }
                    map_grid[2][2].merchantHelped = false;
                    document.querySelector(".playerattack").innerHTML =
                    `<p style="color:red">You gain 4 health</p>`;
                    }
                }
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
            banditHealth: 10,
            event: function() {
                //alert("d1 event triggered!")
                if (!this.eventCompleted) {
                    window.c4 = function() {
                        var damage = window.random(2,4);
                        document.querySelector(".enemyattack").innerHTML = "";
                        document.querySelector(".eventInfo").innerHTML =
                        `<p>The bandit lunges, dealing ${damage} damage!</p>
                        <p style="color:red">You lose ${damage} health</p>`;
                        player.health -= damage;

                        damage = window.random(player.weapon.lowStat,player.weapon.highStat);
                        map[2][3].banditHealth -= damage;
                        document.querySelector(".playerattack").innerHTML =
                        `<p>You swipe at the bandit, dealing ${damage} damage!</p>
                        <p>Bandit Health: ${map[2][3].banditHealth}</p>`;

                        if (map[2][3].banditHealth > 0) {
                            document.querySelector(".enemyattack").innerHTML =
                            `<button onclick="window.c4()">Attack</button>`;
                        } else {
                            document.querySelector(".enemyattack").innerHTML =
                            `<p>The bandit keels over from the blows he's taken. You land a final blow to finish him,
                            and notice the other bandits have fled.</p>
                            <p>You find the bandit had a couple gold pieces in his belt, so you pocket them and turn to
                            see a young boy tied to a tree.</p>
                            <p style="color:gold">You gain 1 gold.</p>
                            <p>You untie the boy and he tells you he was kidnapped, and asks you to help him find his mother.</p>`;
                            document.querySelector(".boy").innerHTML =
                            `You've rescued a young boy.`;
                            map[2][3].eventCompleted = true;
                            player.money += 1;
                        }
                    }

                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>You've stumbled upon a bandit camp!</p>
                    <button onclick="window.c4(0)">Fight</button>`
                }
            }
        },
    c5:
        {
            name: "c5",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            event: function() {
                window.clean();
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
            scrollGot: false,
            event: function() {
                window.merchant = function() {
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>As you enter the town you see the merchant that you helped:</p>
                    <p>He says "because you helped me I will heal you"</p>`;
                    if(player.health > 6) {
                        player.health = 10;
                    } else{
                       player.health += 4;
                    }
                    map_grid[3][2].merchantHelped = false;
                    document.querySelector(".buttons").innerHTML =
                    `<button onclick="window.d3()">Thank You</button>`;
                } 

                window.monastary = function() {
                    player.items.push('scroll');
                    map_grid[3][2].scrollGot = true;
                    document.querySelector(".buttons").innerHTML =
                    `<button onclick="window.d3()">Return to Village</button>`;
                }

                window.d3 = function() {
                    window.clean();
                    document.querySelector(".eventInfo").innerHTML = 
                    `<p>As you enter the town a shop keeper approaches you:</p>
                    <p>and asks "Do you want purchase a weapon"</p>
                    <p>"what kind of weapons do you have?"</p>
                    <p>The shop keeper pulls out a shiny sword "The best swords in the kingdom"</p>
                    <p>"How much is it?"</p>
                    <p>"5 gold, do you wish to purchase the sword?"</p>
                    <button onclick="window.purchase()">Yes</button>`;
                }

                window.purchase = function() {
                    if(player.money >= 5){
                        document.querySelector(".eventInfo").innerHTML = `<p>You pay the man for the sword 
                        and attach it to your hip as you remove your old sword</p>`;
                        player.weapon = weapons[1];
                        player.money -= 5;
                   } else {
                    document.querySelector(".eventInfo").innerHTML = `<p>You don't have enough money you must leave and find more!</p>`;
                   }
                }

                if (this.merchantHelped) {
                    window.merchant();
                    this.event();
                }
                if (!map_grid[3][2].scrollGot && player.items.includes("key")){
                    window.monastary();
                } else if (player.weapon.name === "Old Sword") {
                    window.d3();
                } else {
                    document.querySelector(".eventInfo").innerHTML =
                    `The village square is more empty than you expected.`;
                }
            }
                
            
        },
    d4:
        {
            name: "d4",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                window.clean();
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
                window.clean();
                document.querySelector(".eventInfo").innerHTML = 
                `You're back where you started. But you can't turn back now!`;
            }
        },
    e2:
        {
            name: "e2",
            tile_type: tiles.tile[1],
            eventCompleted: false,
            ratHealth: 7,
            event: function() {
                if (!this.eventCompleted) {
                    window.ratFight = function() {
                        var damage = window.random(0,2);
                        document.querySelector(".playerattack").innerHTML =
                        `<p>The rat attacks, dealing ${damage} damage!</p>
                        <p style="color:red">You lose ${damage} health</p>`;
                        player.health -= damage;

                        damage = window.random(player.weapon.lowStat,player.weapon.highStat);
                        map[4][1].ratHealth -= damage;
                        document.querySelector(".enemyattack").innerHTML =
                        `<p>You swing at the rat, dealing ${damage} damage!</p>
                        <p>Rat Health: ${map[4][1].ratHealth}</p>`;

                        if (map[4][1].ratHealth > 0) {
                            document.querySelector(".buttons").innerHTML =
                            `<button onclick="window.ratFight()">Attack</button>`;
                        } else {
                            document.querySelector(".buttons").innerHTML = "";
                            document.querySelector(".enemyattack").innerHTML =
                            `<p>You slay the giant rat. It turns out the shiny object you saw was an old belt buckle.</p>
                            <p>You cut off the rat's tail, it's probably worth a gold coin to someone.</p>
                            <p style="color:gold">You gain 1 gold.</p>`;
                            map[4][1].eventCompleted = true;
                            player.money += 1;
                        }
                    }

                    window.e2 = function(x) {
                        var damage;
                        switch(x) {
                            case 0:
                                damage = window.random(player.weapon.lowStat,player.weapon.highStat);
                                document.querySelector(".eventInfo").innerHTML =
                                `<p>You get the jump on the rat, dealing ${damage} damage!</p>`;
                                window.ratFight();
                                 break;
                            case 1:
                                document.querySelector(".eventInfo").innerHTML =
                                `<p>You reach for the shiny object but the rat quickly turns and lunges at you!</p>
                                <p>You hold your arm up to block the blow, but the rat bites down hard.</p>
                                <p>You quickly shake the rat off, dealing 2 damage to the giant rat!</p>
                                <p>Still, you feel the sting and a swell of blood where you were bitten.</p>
                                <p style="color:red">You lose 2 health</p>`;
                                player.health -= 2;
                                map[4][1].ratHealth -= 2;
                                document.querySelector(".enemyattack").innerHTML =
                                `<button onclick="window.ratFight()">Attack</button>`;
                                break;
                            default:
                                document.querySelector(".eventInfo").innerHTML =
                                `How did you do this? Explain yourself.`;
                        };
                        
                    }
                    document.querySelector(".eventInfo").innerHTML = 
                        `<p>While wading through the swamps you see massive rat. It's fangs are dripping with a pungent ooze.</p>
                        <p>Will you fight the rat or escape?</p>
                        <button onclick="window.e2(0)">Fight</button>
                        <button onclick="window.e2(1)">Attempt</button>`;
                }
                else {
                    document.querySelector(".eventInfo").innerHTML =
                    `The giant rat lays dead, worms eating it's flesh.`;
                }
            }
        },
    e3:
        {
            name: "e3",
            tile_type: tiles.tile[0],
            eventCompleted: false,
            event: function() {
                window.clean();
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
                                 <p>You gain 3 gold.</p>`;
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
                     <p>    "Please, please... I don't have much, just leave me be."</p>
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
                    `The merchant is gone, the cashbox too. The cart is abandoned, but it's empty.`;
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
                    `The woman thanks you and gives you a key to the monastery that her husband used to teach at.`;
                    document.querySelector(".boy").innerHTML = "";
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