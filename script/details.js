let data = []

function displayBooks(){
    let table = "";
    data = JSON.parse(localStorage.getItem('booksData'));

        for(let i =0;i<data.length;i++){
        table =
        `      
         <div class="bg-custemgraytext w-[270px] h-[250px] flex justify-center items-center relative" id="box-book-${i}">
            <div class="w-[123px] h-[175px]">
                <img src=${data[i].img} alt="">
            </div>
            <div class="w-[55px] h-[30px] rounded flex justify-center absolute mb-48 mr-48 items-center" style="background-color: #4B6587;">
                <h1 class="text-white">-40%</h1>
            </div>
            <div class="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center absolute ml-52 mb-48">
                <button id="heartButton-${i}" class="text-black text-xl focus:outline-none">
                    <i class="fa-regular fa-heart" style="color: #000000;"></i>
                </button>
            </div>
            <div class="w-[40px] h-[40px] bg-white rounded-full flex justify-center mb-24 items-center absolute ml-52">
                <button id="eyeButton-${i}" class="text-gray-400 text-xl focus:outline-none">
                    <i class="fa-regular fa-eye" style="color: #000000;"></i>
                </button>
            </div>
            <div class="w-full h-[50px] bg-black flex justify-center mt-52 items-center absolute hidden" id="addcart-${i}">
                <button>
                    <a href=""><h1 class="text-white font-bold text-xl">Add To Cart</h1></a>
                </button> 
            </div>
        </div>
        <div class="mt-3">
            <h1 class="font-bold">${data[i].title}</h1>
            <div class="flex space-x-3">
                <h3 class="text-gray-500 font-bold">${data[i].price}$</h3>
                <h3 class="text-gray-500 font-bold line-through">${data[i].price+19.9}$</h3>
            </div>
            <div class="flex space-x-2 mt-1 relative">
               <div>
                <i class="fa-sharp fa-solid fa-star" style="color: #ffad33;"></i>
                <i class="fa-sharp fa-solid fa-star" style="color: #ffad33;"></i>
                <i class="fa-sharp fa-solid fa-star" style="color: #ffad33;"></i>
                <i class="fa-sharp fa-solid fa-star" style="color: #ffad33;"></i>
                <i class="fa-sharp fa-solid fa-star" style="color: #ffad33;"></i>
               </div>
                <div><h1 class="absolute text-gray-500 font-bold ">(88)</h1></div>

            </div>
            
        </div>   
    `
        if(i==0){
            document.querySelector("#book-element").innerHTML = table;

        }else if(i==1){
            document.querySelector("#book-element1").innerHTML = table;
        }else if (i==2){
            document.querySelector("#book-element2").innerHTML = table;
        }else{
            document.querySelector("#book-element3").innerHTML = table;
        }


        document.querySelector(`#heartButton-${i}`).addEventListener('click', () => {
            const heartIcon = document.querySelector(`#heartButton-${i}`);
            heartIcon.innerHTML = '<i class="fa-solid fa-heart" style="color: red;"></i>';
        });
        
        document.querySelector(`#box-book-${i}`).addEventListener('mouseenter', () => {
            const addcart = document.querySelector(`#addcart-${i}`);
            addcart.classList.remove('hidden');
        });
        
        document.querySelector(`#box-book-${i}`).addEventListener('mouseleave', () => {
            const addcart = document.querySelector(`#addcart-${i}`);
            addcart.classList.add('hidden');
        });
    }
}


displayBooks()







// let heartPair=document.getElementById("heartButton");
// let heart = document.getElementById('heart');

// heart.addEventListener("click",()=>{
//     if(heart){
//        heart.parentElement.innerHTML = `<i class="fa-solid fa-heart fa-2x fa-2x" style="color: red;"></i>`;
        
// //    heart.innerHTML ='<i class="fa-solid fa-heart" style="color: red;"></i>';
//  }
// // else if(heart =='  <i class="fa-regular fa-heart fa-2x fa-2x" style="color: #000000;></i>'){
// //     heart=='  <i class="fa-regular fa-heart fa-2x fa-2x" style="color: red;"></i>'  

// })

// let count=1;
// const moins=getElementById("moins");
// const plus=getElementById("plus");
// const countour=getElementById("countour");
// let span=document.createElement("span");
// countour.append(span);
// span.innerText=count;
