/*window.onload = function() {
    const button = document.querySelector(".search-btn");

    button.addEventListener("click", () => {
        fetch("superheroes.php")
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => console.error("Error:", error));
    });
};*/

window.onload = () => {
    const form = document.getElementById("search-Form");
    const resultDiv = document.getElementById("result");
    const input = document.getElementById("search");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevent reload

        let query = input.value.trim();      // sanitize text
        let url = "superheroes.php?query=" + encodeURIComponent(query);

        fetch(url)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;   // show results in the <div>
            })
            .catch(error => {
                console.error("Error:", error);
                resultDiv.innerHTML = "<p>There was an error.</p>";
            });
    });
};

