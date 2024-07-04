var productContainer = document.getElementById("products");
var searchTag = document.getElementById("search");
var productList = productContainer.querySelectorAll(".product-box"); // Select all product boxes

searchTag.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase(); // Convert input value to uppercase

    productList.forEach(function(product) {
        var productName = product.querySelector("p").textContent.toUpperCase(); // Get product name and convert to uppercase

        if (productName.indexOf(enteredValue) > -1) {
            product.style.display = "block"; // Show the product box if the search term matches
        } else {
            product.style.display = "none"; // Hide the product box if it doesn't match
        }
    });
});
