let imgs = ["images/aang.jpg", "images/kataara.jpeg", "images/toph.png", "images/zukko.jpeg", "images/momo.png"];
let curr_ind = 0;

function nextPicture() {
    curr_ind += 1;
    if (curr_ind === imgs.length ) {
        curr_ind = 0;
    }
    document.getElementById("image").src = imgs[curr_ind];
}

function lastPicture() {
    curr_ind -= 1;
    if (curr_ind == -1) {
        curr_ind = imgs.length - 1;
    }
    document.getElementById("image").src = imgs[curr_ind]
}