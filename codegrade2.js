function checkSpeed(speed){
    if (speed <= 70){
        return "ok"
    }else {
        let points = Math.floor((speed - 70) );
        if (points >12){
            return "License suspended";
        }else{
            return "points: " + points
        }
    }
}
let speed = Number(prompt("Enter vehicle speed (km/s):"));
if (isNaN(speed) || speed < 0 ){
}else {
    let result = checkSpeed(speed)
    alert(result);
}