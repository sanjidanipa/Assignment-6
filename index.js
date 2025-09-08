
const allCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(json => displayCategoriesName(json.categories))
}
 const allPlants = async() => {
    const url = "https://openapi.programming-hero.com/api/plants";
    const res = await fetch(url)
    const data = await res.json();
    displayAllPlants(data.plants)
};

const plantCategory =

allPlants()

const displayAllPlants = (plants) =>{
    const plantContainer = document.getElementById("plant-container");
    for (let plant of plants){
        const plantCard = document.createElement("div")
        plantCard.innerHTML = `
        <div class="p-4 bg-white shadow-lg rounded-lg">
        <img src="${plant.image}" class="rounded-lg w-80 h-44 mb-3">
        <div class="space-y-1">
          <h2 class="font-semibold text-[#1F2937]">${plant.name}</h2>
          <p class="text-[#1F2937]">${plant.description}</p>
        </div>
        <div class="flex justify-between items-center my-3">
          <p class=" p-2 bg-[#DCFCE7] text-[#15803D] font-medium rounded-xl">${plant.category}</p>
          <p class="font-semibold">৳<span>${plant.price}</span></p>
        </div>
        <button id="add_cart" class="btn bg-[#15803D] text-white rounded-2xl w-full ">Add to Cart</button>
      </div>`
      plantContainer.appendChild(plantCard)
    }
}


const displayCategoriesName = (names) => {
        const categoriesName = document.getElementById("categories_name");
        categoriesName.innerHTML = "";
        for (let name of names ){
            const btnDiv = document.createElement("div")
            btnDiv.innerHTML = `
            <button id= "category_btn_${name.category_name}" onclick="categoriesDetail(${name.category_name})" class="btn bg-transparent border-none flex justify-start hover:bg-[#15803D] rounded-md hover:text-xl hover:font-semibold hover:text-white w-full p-3 my-3">${name.category_name}</button> `
            categoriesName.appendChild(btnDiv)
        }
}

allCategories()










