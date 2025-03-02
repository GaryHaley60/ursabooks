const ScrollOfTheProphesy = document.getElementById("ScrollOfTheProphesy");

ScrollOfTheProphesy.addEventListener("mouseover", (event) => {
    event.target.src = "images/ParchmentScrollSmall.png";
    setTimeout(() => {
        event.target.src = "images/TiedScrollSmall.png";
    }, 15000);
});
