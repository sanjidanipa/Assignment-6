
const allCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(json => displayCategoriesName(json.categories))
}
const AllPlants =  () => {
    fetch ("https://openapi.programming-hero.com/api/plants")
    .then ((res) => res.json())
    .then ((data) => displayAllPlant(data.plants))


}
 
const displayAllPlant = (plants) => {
    const plantContainer = document.getElementById("plant-container");
   for
}



const displayCategoriesName = (names) => {
        const categoriesName = document.getElementById("categories_name");
        categoriesName.innerHTML = "";
        for (let name of names ){
            const btnDiv = document.createElement("div")
            btnDiv.innerHTML = `
            <p id= "category_btn_${name.category_name}" onclick="categoriesDetail(${name.category_name})" class="hover:bg-[#15803D] rounded-md hover:text-xl hover:font-semibold hover:text-white w-full p-3 my-3">${name.category_name}</p> `
            categoriesName.appendChild(btnDiv)
        }
}

allCategories()




  {
      "id": 1,
      "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
      "name": "Mango Tree",
      "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
      "category": "Fruit Tree",
      "price": 500
    },






