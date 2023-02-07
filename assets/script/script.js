const button = document.querySelector("#button");
const rating = document.querySelector(".rating");

const main = document.querySelector('main');
const result_frame = document.querySelector('.request');
const rating_result = document.querySelector('#rating-result');

let itemSelect = 0;

// Clicando e passando a classe 'actived'
for (let i = 0; i < rating.childElementCount; i++) {
  rating.children[i].addEventListener("click", () => {
    // Removendo os elementos com a classe 'actived'
    for (let j = 0; j < rating.childElementCount; j++) {
      rating.children[j].classList.remove("actived");
    }
    rating.children[i].classList.add("actived");
    itemSelect = i + 1;
    console.log("Item " + itemSelect);
  });
}

button.addEventListener("click", () => {
    main.classList.add('closedAnimation');
    rating_result.innerHTML = itemSelect;
});
