let shufflelis = document.querySelectorAll(".shuffle li");
let imgs = document.querySelectorAll(".content-images .box img");

console.log(...shufflelis);
console.log(...imgs);

shufflelis.forEach(function (li) {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", mangeImges);
});


function removeActive() {
  shufflelis.forEach(function (li) {
    li.classList.remove("active");
  });
  this.classList.add("active");
};

function mangeImges() {
  imgs.forEach(function (img) {
    img.style.display = 'none';
  });
  document.querySelectorAll(this.dataset.cat).forEach(function (el) {
    el.style.display = 'block';
  });
};

/* Start Stats */
let stats = document.querySelector(".stats");
let numbrs = document.querySelectorAll(".stats .box .number");
let startes = false;

window.onscroll = function () {
  if(scrollY >= stats.offsetTop) {
    if(!startes) {
      numbrs.forEach((num) => startCount(num));
    }
    startes = true;
  };
};


function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if(el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
};
/* End Stats */
