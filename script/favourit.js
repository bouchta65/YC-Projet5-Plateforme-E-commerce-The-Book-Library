const otherBook1 = document.getElementById('other-book1');
const otherBook2 = document.getElementById('other-book2');
const otherBook3 = document.getElementById('other-book3');
const otherBook4 = document.getElementById('other-book4');
const favContainer = document.querySelector('#favContainer');

let booksData = [];
let favData = [];
document.addEventListener("DOMContentLoaded", () => {
    booksData = JSON.parse(localStorage.getItem('booksData'));
    favData = JSON.parse(localStorage.getItem('favourite'));
    console.log(booksData);
    console.log(favData);
    displayFavBooks();
    displayOtherBooks();
});

function displayFavBooks() {
    favData.forEach(book => {

        let newBook = document.createElement('div');
        newBook.className = "grid grid-cols-[35%,1fr] p-2 sm:p-4 min-h-44 rounded-md md:rounded-lg fav-book"
        newBook.innerHTML =
            `<img src="${book.img}" alt="${book.title}"
                    class="w-[85%] sm:w-4/5 h-auto object-contain">
                <div class="flex flex-col justify-between font-semibold">
                    <p>${book.title}</p>
                    <p>by <span class="font-bold text-[#4B6587]">${book.author}</span></p>
                    <p>${book.category}</p>
                    <p class="text-[#C44436]">$${book.price}</p>
                    <div class="flex justify-between">
                        <button
                            class="add-cart-btn bg-[#4B6587] text-white text-xs sm:text-base lg:text-sm xl:text-base md:p-2 lg:p-0 font-semibold w-2/5 lg:w-[45%] xl:w-2/5 h-9 sm:h-11 lg:h-9 xl:h-11 rounded-md">Add
                            to Cart</button>
                        <button id="remove-fav"
                            class="remove-fav-btn bg-[#C44436] text-white text-xs sm:text-base lg:text-sm xl:text-base md:p-2 lg:p-0 font-semibold w-2/5 lg:w-[45%] xl:w-2/5 h-9 sm:h-11 lg:h-9 xl:h-11 rounded-md">Remove</button>
                    </div>
                </div>`
        favContainer.appendChild(newBook);

        const removeButton = newBook.querySelector('.remove-fav-btn');
        removeButton.addEventListener('click', () => {
            newBook.remove();
        });
    });

}



function displayOtherBooks() {

    let bookCard = "";
    for (let i = 0; i < 4; i++) {
        bookCard =
            ` <img src="${booksData[i + 10].img}" alt="${booksData[i + 10].title}"
                    class="max-w-3/5 max-h-[50%] sm:mx-h-[80%]">
                <p class="font-semibold min-h-12">${booksData[i + 10].title}</p>
                <p class="min-h-12">${booksData[i + 10].author}</p>
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
