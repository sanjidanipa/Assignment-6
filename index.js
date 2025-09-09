const allCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(json => {
      displayCategoriesName(json.categories)
    })
}
 const allPlants = async() => {
    const url = "https://openapi.programming-hero.com/api/plants";
    const res = await fetch(url)
    const data = await res.json();
    displayAllPlants(data.plants)
    
};

const plantByCategory = async(id) => {
     const url = `https://openapi.programming-hero.com/api/category/${id}`;
    const res = await fetch(url);
    const details = await res.json();
    displayAllPlants(details.plants)
    
};



allPlants()

const displayAllPlants = (plants) =>{
    const plantContainer = document.getElementById("plant-container");
  plantContainer.innerHTML = "";
    for (let plant of plants){

        const plantCard = document.createElement("div")
        plantCard.innerHTML = `
        <div class="p-4 bg-white shadow-lg rounded-lg">
        <img src="${plant.image}" class="rounded-lg w-80 h-44 mb-3">
        <div class="">
          <h2 class=" my-2 font-semibold text-[#1F2937]">${plant.name}</h2>
          <p class="my-2 text-justify text-[#1F2937]">${plant.description}</p>
        </div>
        <div class="flex justify-between items-center my-3">
          <button id="type_of_tree" class="btn border-none bg-[#DCFCE7] text-[#15803D] font-medium rounded-xl">${plant.category}</button>
          <p class="font-semibold">৳<span>${plant.price}</span></p>
        </div>
        <button id="add_cart" class="btn bg-[#15803D] text-white rounded-2xl w-full ">Add to Cart</button>
      </div>`
      plantContainer.appendChild(plantCard)
    }
}
 
function addTOCart(plants){
  const cartContainer = document.getElementById("cart_container")
  cartContainer.innerHTML = "";
  const cartBtn = document.getElementById("add_cart")
  for(let plant of plants){
    const newCart = document.createElement("div")
    newCart.innerHTML = `
    <div
              class="flex justify-between items-center bg-[#CFF0DC] p-3 m-3 rounded-md"
            >
              <div class="">
                <h1>${plant.name}</h1>
                <p>${plant.price}<span>1</span></p>
              </div>
              <span>❌</span>
            </div>`
            cartContainer.appendChild(newCart)
  }

}



const displayCategoriesName = (names) => {
        const categoriesName = document.getElementById("categories_name");
        for (let name of names ){
            const btnDiv = document.createElement("div")
            btnDiv.innerHTML = `
            <button id= "category_btn_${name.category_name}" onclick="plantByCategory(${name.id})" class="btn category_btn bg-transparent border-none flex justify-start hover:bg-[#15803D] rounded-md hover:text-xl hover:font-semibold hover:text-white w-full p-3 my-3">${name.category_name}</button> `
            categoriesName.appendChild(btnDiv)
        }
}

allCategories()










