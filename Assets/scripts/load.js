// get text file.
// Define the file path
//const filePath = 'https://raw.githubusercontent.com/RhysAlfShaw/RhysAlfShaw.github.io/main/Assets/project-content/test.txt';
    
// change to local file path
const filePath = "https://raw.githubusercontent.com/RhysAlfShaw/RhysAlfShaw.github.io/main/Assets/project-content/test.JSON";
// filePath = "../test.JSON"
// for json 
// Fetch the JSON data
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
     
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "card");
      newDiv.setAttribute("data-aos", "fade-up");

    // create new h2 element
      const newH2 = document.createElement("h2");
      newH2.textContent = itemdata.title;

    // create h5 element
      const newH5 = document.createElement("h5");
      newH5.textContent = itemdata.status;

    // create p element
      const newP = document.createElement("p");
      newP.textContent = itemdata.description;

    // create a div for the buttons
      const newDiv2 = document.createElement("div");
      newDiv2.setAttribute("style","display:inline-flex");
      
      var num_badges = Object.keys(itemdata.badges).length;
    
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
    newDiv.appendChild(newH5);
    newDiv.appendChild(newP);
    newDiv.appendChild(newDiv2);

    // create a new div for the github link
    const newDiv3 = document.createElement("div");
    const newa = document.createElement("a");
    newa.setAttribute("href", itemdata.githubLink);
    newa.setAttribute("class", "github_link");
    const newimg = document.createElement("img");
    newimg.setAttribute("src", "Assets/images/github-logo.png");
    newimg.setAttribute("class", "github_img");
    newa.appendChild(newimg);
    newDiv3.appendChild(newa);
    newDiv.appendChild(newDiv3);

    // get element by id
    console.log(itemdata.type)
    const currentDiv = document.getElementById(itemdata.type);
    currentDiv.appendChild(newDiv);
  }
  });
