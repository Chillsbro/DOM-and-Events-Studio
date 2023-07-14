function init () {
const flightStatus = document.getElementById("flightStatus");
const takeOffButton = document.getElementById("takeoff");
const shuttleBackground = document.getElementById("shuttleBackground");
const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
const landButton = document.getElementById("landing");
const abortMissionBtn = document.getElementById("missionAbort")
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const rocket = document.getElementById("rocket");
rocket.style.left = "325px";
rocket.style.right = "0px"
rocket.style.top = "250px";
rocket.style.down = "0px";

takeOffButton.addEventListener("click", (e) => {
    const getTakeOffStatus = window.confirm("Confirm that the shuttle is ready for takeoff");    
    if (getTakeOffStatus) {
       flightStatus.innerHTML = "Shuttle in flight";
       shuttleBackground.style.backgroundColor = "blue";
       spaceShuttleHeight.innerHTML = 10000;
    }
});

landButton.addEventListener("click", () => {
    alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
    rocket.style.left = "325px";
    rocket.style.right = "0px"
    rocket.style.top = "250px";
    rocket.style.down = "0px";
    
});
abortMissionBtn.addEventListener("click", () => {
 const getAbortStatus = window.confirm("Confirm that you want to abort the mission.");
 if (getAbortStatus) {
    flightStatus.innerHTML = "Mission aborted.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
    rocket.style.left = "325px";
    rocket.style.right = "0px"
    rocket.style.top = "250px";
    rocket.style.down = "0px";
 }
})

upBtn.addEventListener("click", () => {
 
 rocket.style.top = (parseInt(rocket.style.top)-10)+"px";
 
});
downBtn.addEventListener("click", () => {
    rocket.style.top = (parseInt(rocket.style.top)+10)+"px"; 
});
leftBtn.addEventListener("click", () => {
    rocket.style.left = (parseInt(rocket.style.left)-10)+"px"; 
});
rightBtn.addEventListener("click", () => {
    rocket.style.left = (parseInt(rocket.style.left)+10)+"px"; 
});




}

window.addEventListener("load",init);