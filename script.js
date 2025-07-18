const clockContainer = document.getElementById("clock");

function createDigitColumn(){
    const container = document.createElement("div");
    container.className = "digit-container";

    const strip = document.createElement("div");
    strip.className = "digit-strip";

    for(let i=0;i<10;i++){
        const digit = document.createElement("div");
        digit.className = "digit";
        digit.textContent = i;
        strip.appendChild(digit);
    }

    container.appendChild(strip);
    return {container,strip};
}

const digits = [];

for(let i=0;i<6;i++){
    const {container,strip} = createDigitColumn();
    clockContainer.appendChild(container);
    digits.push(strip);

    if (i === 1 || i === 3) {
        const colon = document.createElement("div");
        colon.className = "colon";
        colon.textContent = ":";
        clockContainer.appendChild(colon);
    }
}
function updateClock(){
    const now = new Date();
    const h = now.getHours().toString().padStart(2,"0");
    const m = now.getMinutes().toString().padStart(2,"0");
    const s = now.getSeconds().toString().padStart(2,"0");
    const timeStr = h + m + s;

    for(let i=0;i<digits.length;i++){
        const num = parseInt(timeStr[i]);
        digits[i].style.transform = `translateY(-${num*90}px)`;
    }
}
setInterval(updateClock,1000);
updateClock();
function updateDate(){
    const now = new Date();
    const options = {weekday:"long",year:"numeric",month:"long",day:"numeric"};
    const dateString = now.toLocaleDateString(undefined,options);
    document.getElementById("date").textContent = dateString;
}
updateDate();
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});