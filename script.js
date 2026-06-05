let db = document.getElementById("db").href;
let searchBox = document.querySelector("#search-box");

document.addEventListener("DOMContentLoaded", () => {
    // Path to the file on your server (e.g., data.txt, data.json, or template.html)
	const filePath = 'https://github.com/StudentGama/studentgama.github.io/raw/refs/heads/main/data/database.csv';

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.text(); // Use .json() if loading a JSON file
        })
        .then(data => {
            // Insert the text content into the DOM element
            document.getElementById("content-target").textContent = data;
        })
        .catch(error => {
            console.error("Error loading file:", error);
            document.getElementById("content-target").textContent = "Failed to load file.";
        });
});
/*
Papa.parse(db, {
	header: true,
	complete: function(results) {
		console.log("Finished:", results.data);
	}, error: function(error) {
		console.error('Error parsing CSV:', error);
	}
});

console.log(db);
*/
searchBox.oninput = () => {
	console.log(searchBox.value);
}