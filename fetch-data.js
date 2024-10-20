// Function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Select the data container

    try {
        // Fetch the user data from the API
        const response = await fetch(apiUrl);
        
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const users = await response.json();

        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Create an unordered list to display the user names
        const userList = document.createElement('ul');

        // Loop through the users array and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set user name as text
            userList.appendChild(listItem); // Add the list item to the list
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle any errors that occurred during the fetch
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('There was a problem fetching user data:', error);
    }
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
