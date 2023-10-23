console.log("Welcome to Gaana");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/2.Maahi_ve.mp3');
let masterPlay = document.getElementById('masterPlay');
let musicPlayer = document.getElementById('musicPlayer');
let songsSections = Array.from(document.getElementsByClassName('songsSections'))

let songs = [
    { songName: "Baari", filePath: "songs/1.Baari.mp3", coverPath: "imgs/baari.jpg" },
    { songName: "Maahi ve", filePath: "songs/2.Maahi_ve.mp3", coverPath: "imgs/maahi ve.jpg" },
    { songName: "High Rated", filePath: "songs/3.high_rated.mp3", coverPath: "imgs/high rated gabru.jpg" },
    { songName: "Khaab", filePath: "songs/4.khaab.mp3", coverPath: "imgs/Khaab.jpg" },
    { songName: "Laung Laachi", filePath: "songs/5.laung_laachi.mp3", coverPath: "imgs/Laung laachi.jpg" },
    { songName: "Makhna", filePath: "songs/6.makhna.mp3", coverPath: "imgs/Makhna.jpg" },
    { songName: "Malang", filePath: "songs/7.malang.mp3", coverPath: "imgs/Malang.jpg" },
    { songName: "Mile ho Tum humko", filePath: "songs/8.mile_ho_tum.mp3", coverPath: "imgs/Mile ho tum humko.png" },
    { songName: "Peaches", filePath: "songs/9.peaches.mp3", coverPath: "imgs/Peachess.jpg" },
    { songName: "Rain Over", filePath: "songs/10.rain_over.mp3", coverPath: "imgs/Rain over me.jpg" },
    { songName: "Save Your Tears", filePath: "songs/11.save_your_tears.mp3", coverPath: "imgs/save your tears.png" },
    { songName: "Super Star", filePath: "songs/12.suprtstar.mp3", coverPath: "imgs/Sukhe Super star.jpg" },
    { songName: "Love Nwantiti", filePath: "songs/13.CKay_Love_Nwantiti.mp3", coverPath: "imgs/ckay love.jpg" },
    { songName: "Elevated", filePath: "songs/14.elevated.mp3", coverPath: "imgs/Elevated.jpg" },
    { songName: "We Rollin", filePath: "songs/15.we_rollin.mp3", coverPath: "imgs/We rollin.jpg" },
    { songName: "Jalebi Baby", filePath: "songs/16.jalebi.mp3", coverPath: "imgs/Jalebi Baby.jpeg" },
    { songName: "Lungi Dance", filePath: "songs/17.lungi_dance.mp3", coverPath: "imgs/lungi Dance.jpg" },
    { songName: "Saiyaan Ji", filePath: "songs/18.saiyaanji.mp3", coverPath: "imgs/Saiyaan Ji.webp" },
    { songName: "Sohnea", filePath: "songs/19.Sohnea.mp3", coverPath: "imgs/Sohnea.jpg" },
    { songName: "Tere Sang Yaara", filePath: "songs/20.Tere_Sang_Yaara.mp3", coverPath: "imgs/Tera Saang yara.jpg" },
    { songName: "Vaaste", filePath: "songs/21.vaaste.mp3", coverPath: "imgs/Vaaste.jpg" },
    { songName: "Suroor", filePath: "songs/22.suroor.mp3", coverPath: "imgs/Suroor.jpg" },
    { songName: "Tu Hi Yaar Mera", filePath: "songs/23.Tu_Hi_Yaar_Mera.mp3", coverPath: "imgs/tu hi yaar mera.jpg" },
    { songName: "Swag Se Swagat", filePath: "songs/24.Swag_Se_Swagat.mp3", coverPath: "imgs/swag se sawagat.webp" },

]


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



// audioElement.play();


// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update  Seekbar
})

const makeAllPlays = () => {
    element.classList.add('overlay');
    Array.from(document.getElementsByClassName('songsSections')).forEach((element) => {
    })
}

Array.from(document.getElementsByClassName('songsSections')).forEach((element) => {
    element.addEventListener('click', (songsSections) => {
        makeAllPlays();
        index = parseInt(e.target.class);
        e.target.classList.remove("parte izquierda");
        e.target.classList.add("parte derecha");
        audioElement.src = `songs/${index + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("parte izquierda");
        masterPlay.classList.add("parte derecha");
    })
});


