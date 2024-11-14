const otherBook1 = document.getElementById('other-book1');
const otherBook2 = document.getElementById('other-book2');
const otherBook3 = document.getElementById('other-book3');
const otherBook4 = document.getElementById('other-book4');


let booksData = []
document.addEventListener("DOMContentLoaded", () => {
    booksData = JSON.parse(localStorage.getItem('booksData'));
    console.log(booksData);
    displayOtherBooks();
});

function displayOtherBooks() {

    let bookCard = "";
    for (let i = 0; i < 4; i++) {
        bookCard =
            ` <img src="${booksData[i+10].img}" alt="${booksData[i+10].title}"
                    class="max-w-3/5 max-h-[50%] sm:mx-h-[80%]">
                <p class="font-semibold min-h-12">${booksData[i+10].title}</p>
                <p class="min-h-12">${booksData[i+10].author}</p>
                <button
                    class="bg-[#4B6587] text-white text-xs sm:text-base lg:text-sm xl:text-base md:p-2 lg:p-0 font-semibold w-3/5 lg:w-[45%] xl:w-2/5 h-9 sm:h-11 lg:h-9 xl:h-11 rounded-md">Add
                    to Cart</button>
            `
        if (i == 0) {
            otherBook1.innerHTML = bookCard;
        } else if (i == 1) {
            otherBook2.innerHTML = bookCard;
        } else if (i == 2) {
            otherBook3.innerHTML = bookCard;
        } else {
            otherBook4.innerHTML = bookCard;
        }

    }


}
