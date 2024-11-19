// Fetching user Data File
async function getUserFile() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error(`User data contains some error`)
    }
    return response.json();
}

// Displaying User Data File 

async function displayUserFile() {
    let userData = document.getElementById('user-dataFile');
    
    try {
        let users = await getUserFile();
        let listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`)
        userData.innerHTML = listItems;
    } catch (error) {
        console.log(`error fetching data:`, error)
        userData.innerHTML = `<li> Error Fetching User data. Pls try again later.</li>`
    };
};

displayUserFile()

let displayButton = document.getElementById('displayButton');
let hideButton = document.getElementById('hideButton');
let userData = document.getElementById('user-dataFile');

displayButton.addEventListener('click', () => {
    userData.style.display = 'block'; 
    displayUserFile()
})

hideButton.addEventListener('click', () => {
    userData.style.display = 'none'; 
})