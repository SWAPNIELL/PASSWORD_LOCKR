const entryForm = document.getElementById('entryForm');
const entryList = document.getElementById('entryList');
const entries = [];

entryForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const website = document.getElementById('website').value;

    if (entries.editIndex !== undefined) {
       
        entries[entries.editIndex] = { username, password, website };
        entries.editIndex = undefined;
    } else {
       
        entries.push({ username, password, website });
    }

    displayEntries();
    entryForm.reset();
});

function displayEntries() {
    entryList.innerHTML = '';

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Username:</strong> ${entry.username}<br>
            <strong>Password:</strong> ${entry.password}<br>
            <strong>Website Name:</strong> ${entry.website}<br>
            <button onclick="editEntry(${i})">Edit</button>
            <button onclick="deleteEntry(${i})">Delete</button>
        `;

        entryList.appendChild(listItem);
    }
}

function editEntry(index) {
    const entry = entries[index];
    document.getElementById('username').value = entry.username;
    document.getElementById('password').value = entry.password;
    document.getElementById('website').value = entry.website;
    entries.editIndex = index;
}

function deleteEntry(index) {
    entries.splice(index, 1);
    displayEntries();
}

displayEntries();
