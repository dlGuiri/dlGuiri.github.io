function getPerson() {
    // Show loading message while fetching
    document.getElementById('quote').textContent = 'Loading person...';
    document.getElementById('classification').textContent = '';
    document.getElementById('personLink').textContent = '';
  
    // Fetch all people from the Star Wars API
    fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => {
            // Get a random person from the list
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const randomPerson = data.results[randomIndex];
  
            // Display the person's name, height, and birth year
            document.getElementById('quote').textContent = `Name: ${randomPerson.name}`;
            document.getElementById('classification').textContent = `Height: ${randomPerson.height} cm, Birth Year: ${randomPerson.birth_year}`;
  
            // Generate the link to the Star Wars databank
            generatePersonLink(randomPerson.name);
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            console.error('Error fetching person:', error);
            document.getElementById('quote').textContent = 'Failed to load person. Please try again.';
            document.getElementById('classification').textContent = '';
        });
  }
  
  function generatePersonLink(personName) {
    // Convert the person's name to lowercase and replace spaces with hyphens
    const formattedName = personName.toLowerCase().replace(/\s+/g, '-');
    const databankUrl = `https://www.starwars.com/databank/${formattedName}`;
  
    // Create the link element
    const linkElement = document.createElement('a');
    linkElement.href = databankUrl;
    linkElement.textContent = 'View on Star Wars Databank!';
    linkElement.target = '_blank'; // Open in a new tab
  
    // Add the link to the DOM
    document.getElementById('personLink').appendChild(linkElement);
  }
  