var data_path = "https://rhysalfshaw.com/food/data.csv";
console.log(data_path);

let data;
let output_1;
fetch(data_path)
    .then(response => response.text())
    .then(text => {
    data=text;
    var lines = data.split("\n"),
    output = [],
    i;
for (i = 0; i < lines.length; i++)
    output.push("<tr><td>"
                + lines[i].slice(0).split(",").join("</td><td>")
                + "</td></tr>");
output = output.join("");
output_1 = output;
var htmlObject = document.createElement('tbody');
htmlObject.innerHTML = output;
document.getElementById("table").appendChild(htmlObject);
});



