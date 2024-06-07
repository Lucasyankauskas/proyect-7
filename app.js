
// this is the date you want to put
const futureDate = new Date(2024, 5, 23, 0, 0, 0); 
const futureTime = futureDate.getTime();


function getRemainingTime(){
    const today = new Date().getTime();
    const timeDiff = futureTime - today;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("dayTen").textContent = Math.floor(days/10);
    document.getElementById("dayUnit").textContent = days % 10;
    document.getElementById("hourTen").textContent = Math.floor(hours/10);
    document.getElementById("hourUnit").textContent = hours % 10;
    document.getElementById("minuteTen").textContent = Math.floor(minutes/10);
    document.getElementById("minuteUnit").textContent = minutes % 10;
    document.getElementById("secondTen").textContent = Math.floor(seconds/10);
    document.getElementById("secondUnit").textContent = seconds % 10;

    if(timeDiff <= 0){
        document.getElementById("countdown").textContent =" se acabo el tiempo!";
        clearInterval(intervalID);
        return;
    }
}

getRemainingTime();

const intervalID = setInterval(getRemainingTime, 1000);