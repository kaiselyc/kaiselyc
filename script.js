document.addEventListener("DOMContentLoaded", () => {

    const PASSWORD = "0113";
    const unlockBtn = document.getElementById("unlockBtn");
    const lockScreen = document.getElementById("lockScreen");
    const book = document.getElementById("book");
    const bgMusic = document.getElementById("bgMusic");
    const flipSound = document.getElementById("flipSound");

    unlockBtn.addEventListener("click", () => {
        const input = document.getElementById("password").value;
        if(input === PASSWORD){
            lockScreen.style.display = "none";
            book.style.display = "block";
            bgMusic.play();
        } else {
            alert("Wrong password 💔");
        }
    });


    const pageFlip = new St.PageFlip(book, {
        width: 1900,
        height: 1900,
        size: "stretch",
        showCover: true,
        mobileScrollSupport: false,
        maxShadowOpacity: 0.6,
        drawShadow: true,
        flippingTime: 900,
        useMouseEvents: true,
        autoSize: false
    });

    pageFlip.loadFromHTML(document.querySelectorAll(".page"));
    pageFlip.on("flip", () => { flipSound.play(); });


    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-10px";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createHeart, 500);

});


