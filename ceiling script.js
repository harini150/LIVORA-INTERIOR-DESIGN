const designs = [

    {
        name: "Classic Border",
        description: "A simple and elegant false ceiling suitable for compact rooms.",
        type: "Border Ceiling",
        material: "Gypsum",
        lighting: "LED Strip",
        colour: "White",
        pattern: "Minimal",
        layers: "1 Layer",
        price: "₹20,000 – ₹35,000",
        category: "Basic Range",
        className: "design1"
    },

    {
        name: "Simple Cove",
        description: "A clean cove design with soft lighting for modern bedrooms.",
        type: "Cove Ceiling",
        material: "Gypsum",
        lighting: "LED Strip",
        colour: "Warm White",
        pattern: "Minimal",
        layers: "2 Layers",
        price: "₹35,000 – ₹60,000",
        category: "Standard Range",
        className: "design2"
    },

    {
        name: "Wooden Touch",
        description: "A warm combination of wooden panels and gypsum.",
        type: "Tray Ceiling",
        material: "Wood + Gypsum",
        lighting: "Spot Light",
        colour: "Wood Brown",
        pattern: "Modern",
        layers: "2 Layers",
        price: "₹45,000 – ₹75,000",
        category: "Standard Range",
        className: "design3"
    },

    {
        name: "Modern Tray",
        description: "A stylish tray ceiling designed for contemporary homes.",
        type: "Tray Ceiling",
        material: "Gypsum",
        lighting: "LED + Spot",
        colour: "White",
        pattern: "Modern",
        layers: "2 Layers",
        price: "₹45,000 – ₹75,000",
        category: "Standard Range",
        className: "design4"
    },

    {
        name: "Geometric",
        description: "Creative geometric patterns for a modern premium interior.",
        type: "Geometric Ceiling",
        material: "Gypsum",
        lighting: "LED + Spot",
        colour: "White",
        pattern: "Geometric",
        layers: "2 Layers",
        price: "₹50,000 – ₹85,000",
        category: "Premium Range",
        className: "design5"
    },

    {
        name: "Circle Design",
        description: "Elegant circular ceiling design with a statement light.",
        type: "Circle Ceiling",
        material: "Gypsum",
        lighting: "Chandelier",
        colour: "Warm White",
        pattern: "Luxury",
        layers: "2 Layers",
        price: "₹50,000 – ₹90,000",
        category: "Premium Range",
        className: "design6"
    },

    {
        name: "Wooden Panel",
        description: "Premium wooden ceiling panels for a rich and warm appearance.",
        type: "Panel Ceiling",
        material: "Wood + Gypsum",
        lighting: "LED Strip",
        colour: "Wood Brown",
        pattern: "Modern",
        layers: "2 Layers",
        price: "₹55,000 – ₹1,00,000",
        category: "Premium Range",
        className: "design7"
    },

    {
        name: "Luxury Coffered",
        description: "A luxurious multi-layer coffered ceiling for premium homes.",
        type: "Coffered Ceiling",
        material: "Wood + Gypsum",
        lighting: "Chandelier",
        colour: "Wood Brown",
        pattern: "Luxury",
        layers: "3 Layers",
        price: "₹80,000 – ₹1,50,000",
        category: "Luxury Range",
        className: "design8"
    }

];

let currentDesign = 0;


function selectDesign(index) {

    currentDesign = index;

    const design = designs[index];

    const preview = document.getElementById("ceilingPreview");

    preview.className = "ceiling " + design.className;

    document.getElementById("designName").textContent =
        design.name;

    document.getElementById("designDescription").textContent =
        design.description;

    document.getElementById("summaryType").textContent =
        design.type;

    document.getElementById("summaryMaterial").textContent =
        design.material;

    document.getElementById("summaryLighting").textContent =
        design.lighting;

    document.getElementById("summaryColour").textContent =
        design.colour;

    document.getElementById("summaryPattern").textContent =
        design.pattern;

    document.getElementById("summaryLayers").textContent =
        design.layers;

    document.getElementById("price").textContent =
        design.price;

    document.getElementById("priceCategory").textContent =
        design.category;

    document.getElementById("designNumber").textContent =
        (index + 1) + " / 8";

    document.getElementById("summaryPreview").innerHTML =
        design.name.toUpperCase().replace(" ", "<br>");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function nextDesign() {

    currentDesign++;

    if (currentDesign >= designs.length) {
        currentDesign = 0;
    }

    selectDesign(currentDesign);
}


function previousDesign() {

    currentDesign--;

    if (currentDesign < 0) {
        currentDesign = designs.length - 1;
    }

    selectDesign(currentDesign);
}


function updateDesign() {

    const room =
        document.getElementById("room").value;

    const ceilingType =
        document.getElementById("ceilingType").value;

    const material =
        document.getElementById("material").value;

    const lighting =
        document.getElementById("lighting").value;

    const colour =
        document.getElementById("colour").value;

    const pattern =
        document.getElementById("pattern").value;

    const layers =
        document.getElementById("layers").value;

    document.getElementById("summaryType").textContent =
        ceilingType;

    document.getElementById("summaryMaterial").textContent =
        material;

    document.getElementById("summaryLighting").textContent =
        lighting;

    document.getElementById("summaryColour").textContent =
        colour;

    document.getElementById("summaryPattern").textContent =
        pattern;

    document.getElementById("summaryLayers").textContent =
        layers;

    document.getElementById("designDescription").textContent =
        "Customized " + ceilingType +
        " designed for your " + room +
        " with " + material +
        " and " + lighting + ".";

    alert("Your ceiling design has been updated!");
}


function saveDesign() {

    alert(
        "Design saved successfully!\n\n" +
        "Design: " +
        designs[currentDesign].name
    );
}


function getQuote() {

    alert(
        "Quote Request\n\n" +
        "Design: " +
        designs[currentDesign].name +
        "\nEstimated Cost: " +
        designs[currentDesign].price
    );
}


/* FILTER BUTTONS */

const filters = document.querySelectorAll(".filter");

filters.forEach(button => {

    button.addEventListener("click", function () {

        filters.forEach(btn =>
            btn.classList.remove("active")
        );

        this.classList.add("active");

    });

});


/* INITIAL DESIGN */

selectDesign(0);