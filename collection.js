var sidenav=document.getElementById("sidenav")
var menu=document.getElementById("menu-activate")
var close=document.getElementById("close-side")

menu.addEventListener("click",function()
{
sidenav.style.left=0
})

close.addEventListener("click",function()
{
sidenav.style.left="-60%"
})

var id=document.getElementById("offer-close")
var offer=document.getElementById("offer")
id.addEventListener("click",function()
{
  offer.style.display="none"
})













    const checkboxes = document.getElementsByName("tags")
    
    const products = document.querySelectorAll(".product");

   
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", filterProducts);
    });

    function filterProducts() {
    // Get all selected filter values
    const selectedFilters = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedFilters.push(checkbox.value);
        }
    });

    // Show or hide products based on the selected filters
    products.forEach((product) => {
        const tags = product.querySelector("tags").textContent.split(",");
        let matches = false;

        selectedFilters.forEach((filter) => {
            if (tags.includes(filter)) {
                matches = true;
            }
        });

        // Display the product if it matches the filters or if no filters are selected
        if (selectedFilters.length === 0 || matches) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
