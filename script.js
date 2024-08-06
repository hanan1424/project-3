document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let origin = document.getElementById('origin').value;
    let destination = document.getElementById('destination').value;
    let departureDate = document.getElementById('departure-date').value;
    let passengers = document.getElementById('passengers').value;

    if (origin && destination && departureDate && passengers) {
        // Implement the search functionality here
        alert(Searching for flights from ${origin} to ${destination} on ${departureDate} for ${passengers} passengers.);
    } else {
        alert('Please fill out all fields.');
    }
});