function nextPage(url) {
    window.location.href = url;
}


document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("no-btn");

    if (noBtn) {
        let moveX = 0;
        let moveY = 0;

        noBtn.addEventListener("mouseover", function () {
            moveX += (Math.random() > 0.5 ? 50 : -50); 
            moveY += (Math.random() > 0.5 ? 50 : -50); 

            noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
});
