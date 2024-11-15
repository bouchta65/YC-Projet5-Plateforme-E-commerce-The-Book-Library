
let detailbook = JSON.parse(localStorage.getItem('detailbook')) || [];

function affichData(){


let table="";

table=  `  
   <!-- image principale -->
            <div class=" img-hero flex bg-neutral-100	justify-center items-center content-center w-[300px] h[434px] lg:w-[500px] lg:h-[530px]">
                <img src=${detailbook[0].img} id="kingImg"
                    class="w-[280px] h-[400px] lg:w-[480] lg:h-[500px]  ">
            </div>

            <!-- container principale des informations -->
            <div class="info-hero flex  flex-col  justify-center mx-2 md:flex-col  min-h-[300px] gap-4 ">


               

                <!-- etoile et le prix et titre -->

                  <!-- titre -->
                <div class="star flex flex-col ">
                    <div>
                        <h2 id="title" class="text-3xl text-center  font-semibold font-serif">${detailbook[0].title}</h2>
                    </div>

                    <!-- etoile -->
                    <div class="mt-2 flex"> <span> <i class="fa-solid fa-star" style="color: #FFD43B;"></i></span>
                        <span> <i class="fa-solid fa-star" style="color: #FFD43B;"></i></span>
                        <span> <i class="fa-solid fa-star" style="color: #FFD43B;"></i></span>
                        <span> <i class="fa-solid fa-star" style="color: #FFD43B;"></i></span>
                        <span> <i class="fa-solid fa-star" style="color: #a1a1a1;"></i></span>
                         <!-- prix -->
                        <pre  > (150 reviews ) | <span id="price" class="font-bold text-2xl">${detailbook[0].price}</span> | <span  id="stock" class="text-bold text-2xl ">${detailbook[0].stock}</span></pre>
                    </div>
                   
                </div>

                <div class=" flex flex-col  justify-around gap-4 my-4">

                    <div class="parag w-[370px]">
                        <p id="descreption"> </p>
                        ${detailbook[0].description}
                        </p>
                    </div>

                    <!-- ligne des bottons  et j'adore-->
                    <div class="flex items-center justify-between  ">

                        <!-- button de quantite -->
                        <div class="border-2 border-solid border-black  h-[46px] flex  rounded-md">
                            <button id="moins" class=" w-[30px] h-[40px] md:w-[40px] md:h-[44px] text-black ">-</button>
                            <button id="countour" class=" md:w-[80px] h-[44px] w-[60px] border-r-2 border-l-2 border-solid border-black text-black ">0</button>
                            <button id="plus" class="w-[30px] h-[43px] md:w-[40px]  text-white text-center  bg-red-500 ">+</button>
                        </div>

                        <!-- button de buy now -->
                        <div class="h-[45px] md:w-[165px] w-[120px] bg-red-500 border-1 border-solid border-black  text-center content center items-center rounded-md">
                            <button id="buyNowbutton" class="rounded-sm text-center text-white h-[45px] md:w-[165px] w-[120px] ">Buy Now</button>
                        </div>

                        <div>
                           <button id="heartButton" class="text-black text-xl ">
                    <i class="fa-regular fa-heart" style="color: #000000;"></i>
                    </button>
                        </div>

                    </div>

                     <!-- laivraison -->
                <div class="border-2 border-black border-solid min-h[180px] w-[350px] md:w-[420px]  lg:w-[500px] ">
                    <!-- premiere partie -->
                    <div class="flex justify-around border-b-2 border-solid border-black mt-2 gap-8">
                        <div>
                            <img src="../images/details/delivery.png" alt="icone de voiture de laivraison"
                                class="h-[40px] w-[40px]">
                        </div>

                        <div class="gap-5">
                            <p>Free Delivery</p>
                            <p> <a href="#">Enter your postal code for Delivery Availability</a></p>
                        </div>
                    </div>

                    <!-- deuxieme partie -->
                    <div class="flex justify-around gap-8 ">
                        <div >
                            <p><i class="fa-solid fa-rotate fa-2x fa-2x" style="color: #000000;"></i></p>
                        </div>

                        <div class="gap-5">
                            <p>Free Delivery</p>
                            <p> <a href="#">Enter your postal code for Delivery Availability</a></p>
                        </div>
                    </div>

                </div>
                </div>

               
            </div>
`

document.querySelector("#container1").innerHTML = table
};















let quantite="";

function buyNow(){
    document.querySelector("#buyNowbutton").addEventListener('click',()=>{
   let quantite = countour.innerText;
   let detailbook = JSON.parse(localStorage.getItem('detailbook')) || [];
   let card = JSON.parse(localStorage.getItem('card')) || [];
   detailbook[0] = { ...detailbook[0], quantity: quantite };
    localStorage.setItem('card', JSON.stringify(detailbook));
   console.log(detailbook)
})
}


affichData()







let count =0;
const moins = document.getElementById("moins");
const plus = document.getElementById("plus");
const countour = document.getElementById("countour");

plus.addEventListener('click', () => {
    countour.innerText = count++;
});

moins.addEventListener('click', () => {
    if (count >= 0) {
        countour.innerText = count--;
    }
});

buyNow();


//ajouter la fonctionalite de favoris

let favourite = JSON.parse(localStorage.getItem('favourite')) || [];

const heartIcon = document.querySelector("#heartButton i");

if(favourite.some(book => book.id === detailbook[0].id)){

   heartIcon.classList.add('fa-solid');
    heartIcon.classList.remove('fa-regular');
    heartIcon.style.color = 'red';
 }else{

 heartIcon.classList.remove('fa-solid');
   heartIcon.classList.add('fa-regular');
   heartIcon.style.color = 'black'; 
 }
heartIcon.addEventListener('click', () => {

        if (heartIcon.classList.contains('fa-solid')) {
        
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
            heartIcon.style.color = 'black';

            const index = favourite.findIndex(book => book.id === detailbook[0].id);
            if (index !== -1) {
           
                favourite.splice(index, 1); 
            }
        } else {
        
                heartIcon.classList.add('fa-solid');
                heartIcon.classList.remove('fa-regular');
                heartIcon.style.color = 'red';
                favourite.push(detailbook[0]);
               

            }

            localStorage.setItem('favourite', JSON.stringify(favourite));
        });