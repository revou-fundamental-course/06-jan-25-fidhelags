function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const birth = document.getElementById('birth-date').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString();
    const dateString = currentTime.toLocaleDateString(); 

    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `
        <strong>Current Time:</strong> ${dateString} at ${timeString}<br>
        <br>
        <strong>Name:</strong> ${name} <br>
        <strong>Birth Date:</strong> ${birth} <br>
        <strong>Gender:</strong> ${gender} <br>
        <strong>Message:</strong> ${message} <br>
    `;
}
