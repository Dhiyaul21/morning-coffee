// delivery list
const links1 = document.querySelectorAll('.tmbl1');

if (links1.length) {
links1.forEach((link) => {
    link.addEventListener('click', (e) => {
    links1.forEach((link) => {
        link.classList.remove('active');
    });
    e.preventDefault();
    link.classList.add('active');
    });
});
}

// kategori list
const links = document.querySelectorAll('.tmbl');
    
if (links.length) {
links.forEach((link) => {
    link.addEventListener('click', (e) => {
    links.forEach((link) => {
        link.classList.remove('active');
    });
    e.preventDefault();
    link.classList.add('active');
    });
});
}

// filter
const filterButtons = document.querySelectorAll(".container .tmbl");
const filterItem = document.querySelectorAll(".menu .item")

// item
const filterItems = e => {
  filterItem.forEach(item => {
    item.classList.add("hide");
    if( item.dataset.name === e.target.dataset.name || e.target.dataset.name === "all" ) {
      item.classList.remove("hide");
    }
  });
};

// gitu dah
filterButtons.forEach(tmbl => tmbl.addEventListener("click", filterItems));
