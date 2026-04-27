// Select all buttons
const buttons = document.querySelectorAll(".card button");

let cartCount = 0;

// Create cart display
const cartDisplay = document.createElement("div");
cartDisplay.innerHTML = "Cart: 0 items";
cartDisplay.style.position = "fixed";
cartDisplay.style.top = "10px";
cartDisplay.style.right = "10px";
cartDisplay.style.background = "black";
cartDisplay.style.color = "white";
cartDisplay.style.padding = "10px";
document.body.appendChild(cartDisplay);

// Add click event to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartDisplay.innerHTML = `Cart: ${cartCount} items`;
        alert("Item added to cart 🛒");
    });
});