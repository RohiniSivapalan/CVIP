document.getElementById('signup').addEventListener('click', function(event) {
    
    event.preventDefault();
    // Get the entered email

    const email = document.getElementById('emailInput').value;

    if (email.trim() === '') {
        return; // Do not proceed to the next page
    }

    // Save the email to local storage
    localStorage.setItem('userEmail', email);

    setTimeout(function() {
        window.location.href = 'movies.html';
    }, 100);
});
