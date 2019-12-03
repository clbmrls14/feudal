
const events = {
    gameStart() {
        var eventString = 
            `You have arrived in the far reaches of the kingdom. Now go find the thing you need to find.
            Be careful of bandits!
            `;
        document.getElementsByClassName("eventInfo").innerHTML = eventString;
    }
}

export default events;