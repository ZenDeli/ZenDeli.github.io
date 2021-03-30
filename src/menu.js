const showExpandImageModal = (image) => {
    let imageElement = document.getElementById('imageElement');

    imageElement.setAttribute("src", `assets/menus/${image}.png`);

    setTimeout( _ => {$('#imageModal').modal("show")}, 100 );
}

const showFoodModal = (item) => {    
    // Find Item in Array
    let foodItem = FoodItems.find(obj => obj.Name == item);
    if (!foodItem) {
        console.error("No Such Item");
        return;
    }

    // Declaring Element Variables
    let foodImage = document.getElementById('food-modal-image');
    let modalTitle = document.getElementById("food-modal-title");
    let bodyTitle = document.getElementById("food-modal-body-title");
    let modalType = document.getElementById("food-modal-item-type");
    let modalPrice = document.getElementById("food-modal-price");
    let modalDescription = document.getElementById("food-modal-description");
    let modalIngredients = document.getElementById("food-modal-ingredients");

    foodImage.setAttribute("src", `assets/food/${foodItem.Image}`);
    foodImage.setAttribute("atl", foodItem.DisplayName);
    foodImage.setAttribute("title", foodItem.ImageName);

    // Add Item Details
    modalTitle.innerHTML = `${foodItem.Title} Details`;
    bodyTitle.innerHTML = foodItem.DisplayName;
    modalType.innerHTML = foodItem.ItemType;
    modalPrice.innerHTML = foodItem.Price;
    modalDescription.innerHTML = foodItem.Description ? `(${foodItem.Description})` : null;

    if (foodItem.Ingredients.length)
        modalIngredients.innerHTML = foodItem.Ingredients.join(", ");
    else {
        modalIngredients.innerHTML = "";
    }

    setTimeout( _ => {$('#food-detail-modal').modal("show")}, 100 );
}

const showDrinksModal = (item) => {
   // Find Item in Array
   let drinkItem = DrinkItems.find(obj => obj.Name == item);
   if (!drinkItem) {
       console.error("No Such Item");
       return;
   }

   // Declaring Element Variables
   let foodImage = document.getElementById('drinks-modal-image');
   let modalTitle = document.getElementById("drinks-modal-title");
   let bodyTitle = document.getElementById("drinks-modal-body-title");
   let modalPrice = document.getElementById("drinks-modal-price");
   let modalFlavors = document.getElementById("drinks-modal-flavors");
   let modalDescription = document.getElementById("drinks-modal-description");
   
   foodImage.setAttribute("src", `assets/food/${drinkItem.Image}`);
   foodImage.setAttribute("atl", drinkItem.DisplayName);
   foodImage.setAttribute("title", drinkItem.ImageName);

   // Add Item Details
   modalTitle.innerHTML = `${drinkItem.DisplayName} Details`;
   bodyTitle.innerHTML = drinkItem.DisplayName;
   modalPrice.innerHTML = drinkItem.Price;

   modalDescription.innerHTML = drinkItem.Description 
        ? `<h5>Description:</h5>${drinkItem.Description}` 
        : "";

   modalFlavors.innerHTML = "";
   if (drinkItem.Flavors.length)
        drinkItem.Flavors.forEach((flavor) => {
            let node = document.createElement("LI");
            node.innerHTML = flavor;
            modalFlavors.appendChild(node);
        })

        setTimeout( _ => {$('#drinks-detail-modal').modal("show")}, 100 );
}

const getItem = (item, name) => {
    return item.Name == name;
}