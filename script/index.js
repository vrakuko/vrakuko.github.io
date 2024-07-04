const navbar = document.querySelector("ul");

navbar.addEventListener("hover", function(event) {
    // Prevent the default action of the anchor tag
    event.preventDefault();
    
    // Change the color of the text
    this.style.color = "red"; // Change "red" to any color you like
    
    // Change other styles as needed
    this.style.fontSize = "20px"; // Example: Change font size
});