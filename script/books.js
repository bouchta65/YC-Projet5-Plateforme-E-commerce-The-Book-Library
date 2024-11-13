

const api2 = "https://file-json-test.vercel.app/fichier.json"

async function booksAPI(){
    const respond = await fetch(api2);
    const data = await respond.json();
    console.log(data);
    
    displayBooks(data);
    }
    booksAPI()
    function displayBooks (data){

        const booksToDisplay = data;
        const booksContainer = document.querySelector('.books-container');

        booksToDisplay.forEach(book => {
          let bookElement = document.createElement('div');
            bookElement.classList.add('book-item','w-auto','flex','flex-col','items-center','gap-1');

            bookElement.innerHTML = `<div class="w-auto flex flex-col items-center gap-1 ">
              <img src="${book.img}" alt="${book.title}">
              <h2 class="font-bold text-center">${book.title}</h2>
              <h3 class="font-extralight text-center">${book.author}</h3>
              <button type="button" id="${book.id}" class="bg-orange-600 font-bold text-white  h-[40px] w-auto text-center max-[600px]:text-xs rounded-md py-2 px-3 ">Add to Cart</button>
            </div>`
            console.log(bookElement);
            booksContainer.appendChild(bookElement);

        });
    }
    let booksData = []
document.addEventListener("DOMContentLoaded", () => {
    booksData = JSON.parse(localStorage.getItem('booksData'));
    console.log(booksData)
});