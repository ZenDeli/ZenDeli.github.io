const showFoodModal = (item) => {    
    // Find Item in Array
    let foodItem = FoodItems.find(obj => obj.Name == item);
    if (!foodItem) {
        console.error("No Such Item");
        return;
    }

    // Declaring Element Variables
    let modalSize = document.getElementById("food-modal-dialog");
    let foodImage = document.getElementById('food-modal-image');
    let modalContentDialog = document.getElementById("food-modal-body-content-dialog");
    let modalTitle = document.getElementById("food-modal-title");
    let bodyTitle = document.getElementById("food-modal-body-title");
    let modalType = document.getElementById("food-modal-item-type");
    let modalPrice = document.getElementById("food-modal-price");
    let modalIngredients = document.getElementById("food-modal-ingredients");
    let modalDescription = document.getElementById("food-modal-description");

    // If Item Has Image, (TODO: To Be reworked once all items have images)
    if (foodItem.Image) {
        if (!modalContentDialog.classList.contains("col-lg-6")) {
            modalContentDialog.classList.add("col-lg-6");
        }

        if (!modalSize.classList.contains("modal-lg")) {
            modalSize.classList.add("modal-lg")
        }

        if (foodImage) {
            foodImage.setAttribute("src", `assets/food/${foodItem.Image}`);
            foodImage.setAttribute("atl", foodItem.DisplayName);
            foodImage.setAttribute("title", foodItem.ImageName);
        } else {
            foodImage = document.createElement("IMG");
            foodImage.setAttribute("id", "food-modal-image");
            foodImage.setAttribute("class", "col-12 col-lg-6 my-2");
            foodImage.setAttribute("src", `assets/food/${foodItem.Image}`);
            foodImage.setAttribute("atl", foodItem.DisplayName);
            foodImage.setAttribute("title", foodItem.ImageName);
            document.getElementById("food-modal-body-content").prepend(foodImage);
        }
    }
    else {
        if (modalContentDialog.classList.contains("col-lg-6")) {
            modalContentDialog.classList.remove("col-lg-6");
        }
        
        if (modalSize.classList.contains("modal-lg")) {
            modalSize.classList.remove("modal-lg")
        }

        if (foodImage) {
            foodImage.parentNode.removeChild(foodImage)
        }
    }

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

    $('#food-detail-modal').modal("show");
}

const showDrinksModal = (item) => {
   // Find Item in Array
   let drinkItem = DrinkItems.find(obj => obj.Name == item);
   if (!drinkItem) {
       console.error("No Such Item");
       return;
   }

   // Declaring Element Variables
   let modalSize = document.getElementById("drinks-modal-dialog");
   let foodImage = document.getElementById('drinks-modal-image');
   let modalContentDialog = document.getElementById("drinks-modal-body-content-dialog");
   let modalTitle = document.getElementById("drinks-modal-title");
   let bodyTitle = document.getElementById("drinks-modal-body-title");
   let modalPrice = document.getElementById("drinks-modal-price");
   let modalFlavors = document.getElementById("drinks-modal-flavors");
   let modalDescription = document.getElementById("drinks-modal-description");
   // If Item Has Image, (TODO: To Be reworked once all items have images)
   if (drinkItem.Image) {
       if (!modalContentDialog.classList.contains("col-lg-6")) {
           modalContentDialog.classList.add("col-lg-6");
       }

       if (!modalSize.classList.contains("modal-lg")) {
           modalSize.classList.add("modal-lg")
       }

       if (foodImage) {
           foodImage.setAttribute("src", `assets/food/${drinkItem.Image}`);
           foodImage.setAttribute("atl", drinkItem.DisplayName);
           foodImage.setAttribute("title", drinkItem.ImageName);
       } else {
           foodImage = document.createElement("IMG");
           foodImage.setAttribute("id", "drinks-modal-image");
           foodImage.setAttribute("class", "col-12 col-lg-6 my-2");
           foodImage.setAttribute("src", `assets/food/${drinkItem.Image}`);
           foodImage.setAttribute("atl", drinkItem.DisplayName);
           foodImage.setAttribute("title", drinkItem.ImageName);
           document.getElementById("drinks-modal-body-content").prepend(foodImage);
       }
   }
   else {
       if (modalContentDialog.classList.contains("col-lg-6")) {
           modalContentDialog.classList.remove("col-lg-6");
       }
       
       if (modalSize.classList.contains("modal-lg")) {
           modalSize.classList.remove("modal-lg")
       }

       if (foodImage) {
           foodImage.parentNode.removeChild(foodImage)
       }
   }

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

    $('#drinks-detail-modal').modal("show");
}

const getItem = (item, name) => {
    return item.Name == name;
}