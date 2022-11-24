
const posts = [
    {
        "id": 1,
        "descr": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=153",
        "utente": {
            "nome": "Mario Rossi",
            "imgUtente": "https://unsplash.it/300/300?image=15"
        },
        "miPiace": 80,
        "data": "mm/gg/yyyy"
    },
    {
        "id": 2,
        "descr": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=199",
        "utente": {
            "nome": "Roberto Verdi",
            "imgUtente": "https://unsplash.it/300/300?image=16"
        },
        "miPiace": 190,
        "data": "mm/gg/yyyy"
    },
    {
        "id": 3,
        "descr": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=14",
        "utente": {
            "nome": "Gianna nannini",
            "imgUtente": "https://unsplash.it/300/300?image=17"
        },
        "miPiace": 145,
        "data": "mm/gg/yyyy"
    },
    {
        "id": 4,
        "descr": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "",
        "utente": {
            "nome": "Valeria Valentini",
            "imgUtente": "https://unsplash.it/300/300?image=18"
        },
        "miPiace": 53,
        "data": "mm/gg/yyyy"
    },
    {
        "id": 5,
        "descr": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=173",
        "utente": {
            "nome": "Riccardo Zanotti",
            "imgUtente": "https://unsplash.it/300/300?image=19"
        },
        "miPiace": 77,
        "data": "mm/gg/yyyy"
    },
];

posts.forEach((Elements) => {
    console.log(Elements);

// Post generation
let container = document.getElementById("container")

container.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${Elements.utente.imgUtente}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${Elements.utente.nome}</div>
                        <div class="post-meta__time">${(Math.floor(Math.random() * 12) + 1)} mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${Elements.descr}</div>
            <div class="post__image">
                <img src="${Elements.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${(Math.floor(Math.random() * 10000) + 1)}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
    });