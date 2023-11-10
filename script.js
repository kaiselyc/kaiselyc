function showMessage(id) {
    let message = document.getElementById("message");
    switch (id) {
        case 1:
            message.innerHTML = "<span style='color: purple; font-size: 100px;'>L</span>ively laughter fills your day, so I greet you happy birthday Zillah! Ang tanda mo na hahah gurang hahah. I want you to enjoy your day, keep blossoming like the flower you are.";
            break;
        case 2:
            message.innerHTML = "<span style='color: purple; font-size: 100px;'>O</span>n this day onwards, I want you to think that you matter, and that you are beautiful within all bounds!";
            break;
        case 3:
            message.innerHTML = "<span style='color: purple; font-size: 100px;'>V</span>ery special day awaits you! I want you to take a break from everything temporarily.";
            break;
        case 4:
            message.innerHTML = "<span style='color: purple; font-size: 100px;'>E</span>ach day as you grow up, I am here to witness your pain, pleasure, happiness, and all kinds. Remember that I am always here!";
            break;
        case 5:
            message.innerHTML = "<span style='color: purple; font-size: 100px;'>R</span>egardless, I want you to think that you are very special, and that we and I care for you a lot. I love you!";
            break;
        default:
            message.innerHTML = "";
    }
}
