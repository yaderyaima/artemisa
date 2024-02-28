const music = new Audio('Bleed It Out Official Music Video  Linkin Park.mp3')


// create array

const songs = [
    {
        id:'1',
        songName:`Paradise City <br>
        <div class="subtitle">Gun's And Roses</div>`,
        poster: "guns1.jpg"
    },
    {
        id:'2',
        songName:`Bleed It Out <br>
        <div class="subtitle">Linkin Park</div>`,
        poster: "link2.jpg"
    },
    {
        id:'3',
        songName:`For Whom The Bell Tolls <br>
        <div class="subtitle">Metallica</div>`,
        poster: "metal3.jpg"
    },
    {
        id:'4',
        songName:`Como Un Mago <br>
        <div class="subtitle">Warcry</div>`,
        poster: "war4.jpg"
    },
    {
        id:'5',
        songName:`Far Away <br>
        <div class="subtitle">Junior Sambo</div>`,
        poster: "junior5.jpg"
    },
    {
        id:'6',
        songName:`UnderGramos <br>
        <div class="subtitle">Mambo Rap</div>`,
        poster: "mambi6.jpg"
    },
    {
        id:'7',
        songName:`Sleepwalking <br>
        <div class="subtitle">Bring Me the Horizon</div>`,
        poster: "bmth.png"
    },
    {
        id:'8',
        songName:`El Angel Caido
        <br>
        <div class="subtitle">Avalanch</div>`,
        poster: "avalanch.jpg"
    },
    {
        id:'9',
        songName:`G.A.L.D
        <br>
        <div class="subtitle">Deluhi</div>`,
        poster: "deluhi.jpg"
    },
    {
        id:'10',
        songName:`Here Without You
        <br>
        <div class="subtitle">3 Doors Down</div>`,
        poster: "doors.jpg"
    },
    {
        id:'11',
        songName:`To the Hellfire
        <br>
        <div class="subtitle">Lorna Shore</div>`,
        poster: "lorna.jpg"
    },
    {
        id:'12',
        songName:`Nunca Tuve Tanto
        <br>
        <div class="subtitle">Nanpa Básico</div>`,
        poster: "nanpa.jpg"
    },
    {
        id:'13',
        songName:`You Only Live Once
        <br>
        <div class="subtitle">Suicide Silence</div>`,
        poster: "suicide.jpg"
    },
    {
        id:'14',
        songName:`I Am the Highway
        <br>
        <div class="subtitle">Audioslave</div>`,
        poster: "audios.jpg"
    },
    {
        id:'15',
        songName:`Vulnerable
        <br>
        <div class="subtitle">Alquimia</div>`,
        poster: "alquim.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((Element, i)=>{
    Element.getElementsByTagName('img')[0].src = songs[i].poster;
    Element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((Element)=>{
            Element.classList.add('bi-play-circle-fill');
            Element.classList.remove('bi-pause-circle-fill');
    })
}

let index = 0;
Array.from(document.getElementsByClassName('playListPlay')).forEach((Element)=>{
    Element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
    })
})