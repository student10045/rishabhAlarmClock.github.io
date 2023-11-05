const timeDisplay = document.getElementById("time");
const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const secondInput = document.getElementById("second");
const ampmSelect = document.getElementById("ampm");
const setAlarmButton = document.getElementById("setAlarm");
const alarmList = document.getElementById("alarmList");

// Function to display current time
setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "AM";

    if (h > 11) {
        h = h - 12;
        ampm = 'PM'
    }

    h = h == 0 ? h = 12 : h; 
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let timeValue = `${h}:${m}:${s} ${ampm}`;
    timeDisplay.textContent = timeValue;

    if (alarms.includes(timeValue)){
        alert(`Alarm: ${timeValue}`);
    }

}, 1000);

// Array to store alarms
const alarms = [];

// Function to display alarms
function displayAlarms() {
    alarmList.innerHTML = "";
    alarms.forEach((alarm, index) => {
        const alarmItem = document.createElement("li");
        alarmItem.textContent = alarm;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        alarmItem.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            alarms.splice(index, 1);
            displayAlarms();
        });
        alarmList.appendChild(alarmItem);
    });
}

setAlarmButton.addEventListener("click", () => {
    let h = hourInput.value;
    let m = minuteInput.value;
    let s = secondInput.value;
    let ampm = ampmSelect.value;

    if (h === "" || m === "" || s === "") {
        alert("Please fill in all fields.");
        return;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    const alarmTime = `${h}:${m}:${s} ${ampm}`;
    alarms.push(alarmTime);
    displayAlarms();
});