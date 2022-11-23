
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
let postContainer = document.getElementById("container")
    let postCard = document.createElement("div");
    postCard.classList.add("post")
    postContainer.appendChild(postCard)
        let postHeader = document.createElement("div");
        postHeader.classList.add("post__header")
        postCard.appendChild(postHeader);
            let postMeta = document.createElement("div");
            postMeta.classList.add("post-meta")
            postHeader.appendChild(postMeta);
                let postMetaIcon = document.createElement("div");
                postMetaIcon.classList.add("post-meta__icon")
                postMeta.appendChild(postMetaIcon);
                    let profilePic = document.createElement("img");
                    profilePic.classList.add("profile-pic")
                    postMetaIcon.appendChild(profilePic);
                let postMetaData = document.createElement("div");
                postMetaData.classList.add("post-meta__data")
                postMeta.appendChild(postMetaData);
                    let postMetaAuthor = document.createElement("div");
                    postMetaAuthor.classList.add("post-meta__author")
                    postMetaData.appendChild(postMetaAuthor);
                    let postMetaTime = document.createElement("div");
                    postMetaTime.classList.add("post-meta__time")
                    postMetaData.appendChild(postMetaTime);
        let postText = document.createElement("div");
        postText.classList.add("post__text")
        postCard.appendChild(postText);
        let postImage = document.createElement("div");
        postImage.classList.add("post__image")
        postCard.appendChild(postImage);
            let image = document.createElement("img");
            postImage.appendChild(image);
        let postFooter = document.createElement("div");
        postFooter.classList.add("post__footer")
        postCard.appendChild(postFooter);
            let likes = document.createElement("div");
            likes.classList.add("likes");
            likes.classList.add("js-likes")
            postFooter.appendChild(likes);
                let likesCta = document.createElement("div");
                likesCta.classList.add("likes__cta");
                likes.appendChild(likesCta);
                    let likeButton = document.createElement("a");
                    likeButton.classList.add("like-button");
                    likeButton.classList.add("js-like-button");
                    likesCta.appendChild(likeButton);
                        let likeButtonIcon = document.createElement("i");
                        likeButtonIcon.classList.add("like-button__icon");
                        likeButtonIcon.classList.add("fas");
                        likeButtonIcon.classList.add("fa-thumbs-up");
                        likeButton.appendChild(likeButtonIcon);
                        let likeButtonLabel = document.createElement("span");
                        likeButtonLabel.classList.add("like-button__label")
                        likeButton.appendChild(likeButtonLabel);
                let likesCounter = document.createElement("div");
                likesCounter.classList.add("likes__counter");
                likes.appendChild(likesCounter);
                    let likesNumber = document.createElement("b");
                    likesNumber.classList.add("js-likes-counter");
                    likesNumber.setAttribute("id", "like-counter-1");
                    likesCounter.appendChild(likesNumber);
                   


// profile pics
profilePic.src = `${Elements.utente.imgUtente}`;

// Author
postMetaAuthor.textContent += `${Elements.utente.nome}`;

// Time
postMetaTime.textContent += `${(Math.floor(Math.random() * 12) + 1)}` + " mesi fa";

// Description
postText.textContent += `${Elements.descr}`;

// Main post Image
image.src = `${Elements.media}`

// "mi piace"
likeButtonLabel.textContent += " Mi Piace";

// "mi piace" counter
likesCounter.textContent += "Piace a " + `${
    likesNumber.textContent += `${(Math.floor(Math.random() * 10000) + 1).toString()}`
}` 
+ " persone";

});

