filePath = "https://raw.githubusercontent.com/RhysAlfShaw/RhysAlfShaw.github.io/main/recipes/recipes.json";

fetch(filePath)
.then(response => response.json())
 .then(data => {
   // length of json file
   var num_items = Object.keys(data).length;
   console.log(num_items)
   console.log(data)
   // loop through json file
   for (let i = 0; i < num_items; i++) {
     // save json data to variables
    const itemdata = data[i];
    
    const LargeTable = document.createElement("table")
    LargeTable.setAttribute("class", "card");
    LargeTable.setAttribute("data-aos", "fade-up");
    const tableRow = document.createElement("tr")

    const tablepiccolumn = document.createElement("td")
    
    const picture = document.createElement("img")
    if (itemdata.image !== undefined){
        picture.src = itemdata.image
        picture.setAttribute("style","width:400px; height:400px")
        tablepiccolumn.appendChild(picture)
    }
    
    const newDiv = document.createElement("td");
    newDiv.setAttribute("class", "card");
    newDiv.setAttribute("data-aos", "fade-up");

   // create new h2 element
    const newH2 = document.createElement("h2");
    newH2.textContent = itemdata.title;


   // create p element
    const descriptionTitle = document.createElement("h3")
    descriptionTitle.textContent = "Description"

    const newP = document.createElement("p");
    newP.textContent = itemdata.description;

    // create a p element for ingredients
    const Ingredient_list = document.createElement("h3");
    Ingredient_list.textContent = "Ingredients:";

    const newpingre = document.createElement("table");
    

    // create a div for the buttons
    const newDiv2 = document.createElement("div");
    newDiv2.setAttribute("style","display:inline-flex");
     
    var num_badges = Object.keys(itemdata.badges).length;
    var num_ingredients = Object.keys(itemdata.ingredients).length;
   

    

    for (let i = 0; i < num_ingredients; i++) {
        const CombinedDiv = document.createElement("tr");
        const ingredients = document.createElement("td");
        const quantities = document.createElement("td");
         // span full space
        ingredients.textContent = itemdata.ingredients[i].text
        quantities.textContent = itemdata.ingredients[i].quantities
        quantities.setAttribute("style","padding-left:20px")
        CombinedDiv.appendChild(ingredients);
        CombinedDiv.appendChild(quantities);
        newpingre.appendChild(CombinedDiv);
    }

    const Instruction_title = document.createElement("h3");
    Instruction_title.textContent = "Method";
    const Methods_section = document.createElement("p");
    Methods_section.textContent = itemdata.Methods;

    for (let i = 0; i < num_badges; i++) {
        const buton1 = document.createElement("span");
        const buton2 = document.createElement("span");
        const txt = document.createElement("txt")
        buton1.setAttribute("class", "badge badge-primary");
        buton2.setAttribute("style", "padding:3px;");
        txt.setAttribute("class", "badge_text");
        txt.textContent = itemdata.badges[i].text;
       
        buton2.appendChild(buton1);
        buton1.appendChild(txt);

        newDiv2.appendChild(buton2);
 
   } 
   newDiv.appendChild(newH2);
   newDiv.appendChild(descriptionTitle);
   newDiv.appendChild(newP);
   newDiv.appendChild(Ingredient_list);
   newDiv.appendChild(newpingre);
   newDiv.appendChild(Instruction_title);
   newDiv.appendChild(Methods_section);
   newDiv.appendChild(newDiv2);
   tableRow.appendChild(newDiv);
   tableRow.appendChild(picture);
   LargeTable.appendChild(tableRow);
   const currentDiv = document.getElementById('row');
   currentDiv.appendChild(LargeTable);
 }
 });