// get text file.
// Define the file path
//const filePath = 'https://raw.githubusercontent.com/RhysAlfShaw/RhysAlfShaw.github.io/main/Assets/project-content/test.txt';
    
// change to local file path
const filePath = 'Assets/project-content/test.txt';
var data ={};
// for json 
// Fetch the JSON data
//fetch('data.json')
// .then(response => response.json())
//  .then(data => {
    // Do something with the data
//    console.log(data.title); // Output: "PhD Research: Radio source multipicity and Machine Learning."
//    console.log(data.status); // Output: "Inprogress ~ Due for completion 2026"
//    console.log(data.description); // Output: "Developing tools to create true associations between separated radio sources using morphological, spectral and flux analysis of the source to feed into a neural network to learn characteristics of these associations. This will allow for quick processing of SKA and future radio observational data."
//    console.log(data.badges); // Output: [{text: "Python"}, {text: "Machine Learning"}, {text: "Neural Network"}, {text: "Radio Astronomy"}]
//    console.log(data.githubLink); // Output: "https://github.com/RhysAlfShaw"
//  });

// Fetch the file
fetch(filePath)
  .then(response => response.text())
  .then(text => {
    // Split the file contents by line
    const lines = text.split('\n');

    // Loop through each line and save it as a variable
    const data = {};
    for (let i = 0; i < lines.length; i++) {
      const variableName = `line${i + 1}`;
      const variableValue = lines[i];

      // Save the variable to be used later in the program
      data[variableName] = variableValue;
    }

    // Create HTML elements for each line.
    // create new div element
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "card");
    newDiv.setAttribute("data-aos", "fade-up");

    // create new h2 element
    const newH2 = document.createElement("h2");
    newH2.textContent = data['line1'];

    // create h5 element
    const newH5 = document.createElement("h5");
    newH5.textContent = data['line2'];

    // create p element
    const newP = document.createElement("p");
    newP.textContent = data['line3'];

    // create a div for the buttons
    const newDiv2 = document.createElement("div");
    newDiv2.setAttribute("style","display:inline-flex");
    var num_bages = 6;
    
    for (let i = 0; i < num_bages; i++) {
        const buton1 = document.createElement("span");
        const buton2 = document.createElement("span");
        const txt = document.createElement("txt")
        buton1.setAttribute("class", "badge badge-primary");
        buton2.setAttribute("style", "padding:3px;");
        txt.setAttribute("class", "badge_text");
        const linename = `line${i + 4}`;
        txt.textContent = data[linename];
        
        buton2.appendChild(buton1);
        buton1.appendChild(txt);
        newDiv2.appendChild(buton2);
    }

    // append child to parent
    newDiv.appendChild(newH2);
    newDiv.appendChild(newH5);
    newDiv.appendChild(newP);
    newDiv.appendChild(newDiv2);

    // get element by id
    const currentDiv = document.getElementById("LEFT");
    currentDiv.appendChild(newDiv);
  });
