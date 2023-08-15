const image = document.querySelectorAll(".star");

image.forEach(item => {
    item.addEventListener("click", e => {
        for (let i = 0; i < image.length; i++) {
            if (image[i].src.match ('img/star-outline.svg')) {
                image[i].src = 'img/star-check.svg';
            } else {
                image[i].src = 'img/star-outline.svg';
            }
        }
    });
});