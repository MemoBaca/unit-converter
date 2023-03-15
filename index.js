/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let converBtn = document.getElementById("conver-btn")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

converBtn.addEventListener("click", function(){
    let units = document.getElementById("units").value
    updateLength(units)
    updateVolume(units)
    updateMass(units)
})

function updateLength(value){
    let meters = (value*3.281).toFixed(3)
    let feet = (value/3.281).toFixed(3)
    length.textContent = `${value} meters = ${meters} feet | ${value} feet = ${feet} meters`
}

function updateVolume(value){
    let liters = (value*0.264).toFixed(3)
    let gallons = (value/0.264).toFixed(3)
    volume.textContent = `${value} liters = ${liters} gallons | ${value} gallons = ${gallons} liters`
}

function updateMass(value){
    let kilos = (value*2.204).toFixed(3)
    let pounds = (value/2.204).toFixed(3)
    mass.textContent = `${value} kilos = ${kilos} pounds | ${value} pounds = ${pounds} kilos`
}
