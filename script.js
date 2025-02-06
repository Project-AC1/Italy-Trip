let h1 = document.getElementById("h1")
let h2 = document.getElementById("h2")
let h3 = document.getElementById("h3")
let h4 = document.getElementById("h4")
let h5 = document.getElementById("h5")
let h6 = document.getElementById("h6")

let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")
let p5 = document.getElementById("p5")
let p6 = document.getElementById("p6")


h1.onmouseenter = function(){
    h1.innerHTML = "Le Voyage";
    p1.innerHTML = "-Par Wizz Air<br> -Payé 282 Eur<br> -De l'aéroport du Caire (CIA) à l'aéroport international de Milan()<br> -avec 227 Eur + 55 Eur (Circuit dynamique)";
    h1.style.marginTop = "75%";
}
h1.onmouseleave = function(){
    h1.innerHTML = "Flight";
    p1.innerHTML = "-By Wizz Airs<br> -Paid 282 Eur<br> -From Cairo Aiport (CIA) to Milan International Airport()<br> -with 227 Eur + 55 Eur ( Dynamic Tour )";
    h1.style.marginTop = "80%";
}


h2.onmouseenter = function(){
    h2.style.marginTop = "75%";
    h2.innerHTML = "l'Hotel";
    p2.innerHTML = "-B&B Hotel Milano Ornato<br> -3 nuits 194 Eur par étudiant<br> -Le petit-déjeuner est inclus<br> -Le 1er jour et le dernier jour seront passés à l'intérieur de l'hôtel</p>";
}
h2.onmouseleave = function(){
    h2.style.marginTop = "80%";
    h2.innerHTML = "Hotel";
    p2.innerHTML = " -B&B Hotel Milano Ornato<br> -3 night 194 Eur per Student<br> -Breadfast is Included<br> -1st Day and last Day will be <br>spent inside the hotel</p>";

}



h3.onmouseenter = function(){
    h3.style.marginTop = "55%";
    h3.innerHTML = "Moyens De Transport";
    p3.innerHTML = "-Train italien 59,8 Eur de Milan<br> à Rome et retour à Milan<br> - Hop on Hop 10 Eur<br> -Bus privé à Milan 40 Eur pour <br>4 jours</p>";

}
h3.onmouseleave = function(){
    h3.style.marginTop = "70%";
    h3.innerHTML = "Transport";
    p3.innerHTML = "-Italiano treno 59.8 Eur From   Milan<br> To Rome and Back To Milan <br> - Hop on Hop 10 Eur<br> -Private Bus in Milan 40 Eur for <br>4 days</p>";

}



h4.onmouseenter = function(){
    h4.style.marginTop = "70%";
    h4.innerHTML = "Visites";
    p4.innerHTML = "-Tour de Pise le jour 2<br> -Église catholique le jour 3<br> -Souvenir de Milan et pique-nique au Parco Sempione le jour 4";

}
h4.onmouseleave = function(){
    h4.style.marginTop = "75%";
    h4.innerHTML = "Visits";
    p4.innerHTML = " -Piza Tower on day 2 <br> -Catholic Church on Day 3<br> -Milano Souvenir & Picnic at Parco sempione Day 4</p>";

}



h5.onmouseenter = function(){
    h5.style.marginTop = "65%";
    h5.innerHTML = "Nourriture";
    p5.innerHTML = "-Pâtes d'autore le jour 1<br> -Pizza E Mozzarella les jours 2 et 3<br> -Pizza AM le jour 4<br> -Petit déjeuner à l'hôtel le jour 5 + Repas dans l'avion";

}
h5.onmouseleave = function(){
    h5.style.marginTop = "75%";
    h5.innerHTML = "Food";
    p5.innerHTML = " -Pasta D'Autore On Day 1<br> -Pizza E Mozzarella on Day 2 & 3<br> -Pizza AM On Day 4<br> -Breakfast at the Hotel On Day 5 + Food at the Airplane";
}



h6.onmouseenter = function(){
    h6.style.marginTop = "55%";
    h6.innerHTML = "Frais";
    p6.innerHTML = "-Le Budget que nous avons était de 1000 euros<br> -Nous avons dépensé 493 euros et en ajoutant 150 euros d'argent de poche<br> -Le coût final sera de 643 euros<br> -Ce qui représente 64,3 % du budget initial"

}
h6.onmouseleave = function(){
    h6.style.marginTop = "60%";
    h6.innerHTML = "Costs";
    p6.innerHTML = "-The Budget we Had was 1000 Eur<br> -We Spent 493 Eur & By Adding 150 Eur Pocket Money<br> -The Final Cost Will be 643 Eur<br> -Which is 64.3 % From the Initial Budget";
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'F11' || event.keyCode === 122) {  // Check if F11 is pressed
        event.preventDefault();  // Prevent the default F11 behavior (browser fullscreen)

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();  // For most browsers
        } else if (document.documentElement.mozRequestFullScreen) {  // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {  // Chrome, Safari
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {  // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
    }
});