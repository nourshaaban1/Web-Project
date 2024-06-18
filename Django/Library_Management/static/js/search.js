let dropdownBtnText = document.getElementById("drop-text");
let span = document.getElementById("span");
let icon = document.getElementById("icon");
let list = document.getElementById("list");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");

dropdownBtnText.onclick = function () {
  list.classList.toggle("show");
  icon.style.rotate = "-180deg";
};

window.onclick = function (e) {
  if (
    e.target.id !== "drop-text" &&
    e.target.id !== "icon" &&
    e.target.id !== "span" 
  ) {
    list.classList.remove("show");
    icon.style.rotate = "0deg";
  }
};

for (item of listItems) {
  item.onclick = function (e) {
    span.innerText = e.target.innerText;
    if (e.target.innerText == "Everything") {
      input.placeholder = "Search Anything...";
    } else {
      input.placeholder = "Search in " + e.target.innerText + "...";
    }
  };
}

// Global declaration of resultsContainer
let resultsContainer = document.getElementById('search-results');

// Function to perform search when input changes
function performSearch() {
    let searchQuery = input.value.trim();
    let searchType = span.innerText.trim();

    // Perform search only if there is a query
    if (searchQuery.length > 0) {
        let url = '/Book/search/?search_query=' + encodeURIComponent(searchQuery) + '&search_type=' + encodeURIComponent(searchType);

        // Make AJAX request to fetch search results
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Parse the JSON string in data.results
                let results = JSON.parse(data.results);
                console.log(results);
                displaySearchResults(results); // Pass results to display function
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });
    } else {
        clearSearchResults();
    }
}

// Function to display search results
function displaySearchResults(data) {
  resultsContainer.innerHTML = ''; // Clear previous results

  console.log(data); // Debugging: log the data received

  if (data.length === 0) {
      let noResults = document.createElement('div');
      noResults.classList.add('search-result-item');
      noResults.textContent = 'No results found';
      resultsContainer.appendChild(noResults);
      return;
  }

  // Create a <ul> element to hold the search results
  let resultsList = document.createElement('ul');

  // Loop through each result and create HTML elements to display them
  data.forEach(result => {
      let fields = result.fields;

      let listItem = document.createElement('li');
      listItem.classList.add('search-result-item')

      let link = document.createElement('a');
      link.href = '../book-page/' + fields.isbn + '/'; // Adjust URL to match your routing
      let img = document.createElement('img');
      img.classList.add('book');
      img.src = fields.cover;
      img.alt = fields.title;
      link.appendChild(img);

      let title = document.createElement('p');
      title.textContent = fields.title;

      let status = document.createElement('label');
      status.textContent = fields.status;

      listItem.appendChild(link);
      listItem.appendChild(title);
      listItem.appendChild(status);

      resultsList.appendChild(listItem);
  });

  resultsContainer.appendChild(resultsList);

  // Show the results container
  resultsContainer.classList.add('show');
}

// Function to clear search results
function clearSearchResults() {
  resultsContainer.innerHTML = '';
  resultsContainer.classList.remove('show');
}

// Handle input change event for search
input.addEventListener('input', performSearch);

input.addEventListener('focus', () => {
  if (resultsContainer.innerHTML.trim().length > 0) {
      resultsContainer.classList.add('show');
  }
});

input.addEventListener('blur', () => {
  setTimeout(() => {
      resultsContainer.classList.remove('show');
  }, 100); // Delay to allow click event on results
});