// Read and parse the JSON data
let beats = [
    {
        "title": "Ump Jump",
        "file": "ump_jump.mp3",
        "genre": "Hip-Hop",
        "price": "$20"
    },
    {
        "title": "Chill Vibes",
        "file": "chill_vibes.mp3",
        "genre": "Trip-Hop",
        "price": "$15"
    },
    {
        "title": "Summer Chill",
        "file": "summer_chill.mp3",
        "genre": "Chillout",
        "price": "$25"
    }
];

// Get the container element where the beats will be added
let container = document.getElementById("beats-container");

// Iterate over the beats array and generate the HTML for each beat
for (let i = 0; i < beats.length; i++) {
    let beat = beats[i];
    let html = `
        <li>
            <h3>${beat.title}</h3>
            <audio controls>
                <source src="${beat.file}" type="audio/mpeg">
            </audio>
            <p>Genre: ${beat.genre}</p>
            <p>Price: ${beat.price}</p>
        </li>
    `;
    container.innerHTML += html;
}
fetch('beats-data.json')
  .then(response => response.json())
  .then(data => {
    // Get the container element where the beats will be added
    const container = document.getElementById('beats-container');

    // Loop through the array of beats
    data.forEach(beat => {
      // Create a new list item element
      const li = document.createElement('li');

      // Create a new heading element
      const h3 = document.createElement('h3');
      h3.textContent = beat.title;

      // Create a new p element for genre
      const genre = document.createElement('p');
      genre.textContent = beat.genre;

      // Create a new p element for price
      const price = document.createElement('p');
      price.textContent = beat.price;

      // Create a new audio element
      const audio = document.createElement('audio');
      audio.setAttribute('controls', true);

      // Create a new source element
      const source = document.createElement('source');
      source.setAttribute('src', beat.audio);
      source.setAttribute('type', 'audio/mpeg');

      // Append the source element to the audio element
      audio.appendChild(source);

      // Append the heading, genre and price elements to the list item element
      li.appendChild(h3);
      li.appendChild(genre);
      li.appendChild(price);
      li.appendChild(audio);

      // Append the list item element to the container element
      container.appendChild(li);
    });
  });
