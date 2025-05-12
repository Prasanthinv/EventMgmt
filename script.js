async function fetchEvents() {
    const response = await fetch("https://your-bucket-name.s3.amazonaws.com/events.json");
    const events = await response.json();
    const eventList = document.getElementById("event-list");

    events.forEach(event => {
        let li = document.createElement("li");
        li.textContent = `${event.name} - ${event.date}`;
        eventList.appendChild(li);
    });
}
fetchEvents();
