
const mToFConversion = 3.281
const lToGConversion = 0.264
const kToPConversion = 2.204


const numInput = document.getElementById("num-input").value
const convertBtn = document.getElementById("convert-btn")
const errorEl = document.getElementById("error-p")

const length = document.getElementById("length-p");
const volume = document.getElementById("volume-p");
const mass = document.getElementById("mass-p");

convertBtn.addEventListener("click", function () {
    errorEl.style.setProperty('display', 'none');

    let numInput = Number(document.getElementById("num-input").value)

    if (!numInput) {
        console.log(errorEl.style.getPropertyValue('--display'))
        errorEl.style.setProperty('display', 'block');
        return
        // style.setProperty('--deg', '20deg');
    }
    else {
        console.log(numInput);
    }

    let mToF = Math.round((numInput * mToFConversion + Number.EPSILON) * 100) / 100
    let fToM = Math.round((numInput / mToFConversion + Number.EPSILON) * 100) / 100
    length.innerHTML = `${numInput} meters = ${mToF} feet | ${numInput} feet = ${fToM} meters`

    let lToG = Math.round((numInput * lToGConversion + Number.EPSILON) * 100) / 100
    let gToL = Math.round((numInput / lToGConversion + Number.EPSILON) * 100) / 100
    volume.innerHTML = `${numInput} liters = ${lToG} gallons | ${numInput} gallons = ${gToL} liters`

    let kToP = Math.round((numInput * kToPConversion + Number.EPSILON) * 100) / 100
    let pToK = Math.round((numInput / kToPConversion + Number.EPSILON) * 100) / 100
    mass.innerHTML = `${numInput} kilos = ${kToP} pounds | ${numInput} pounds = ${pToK} kilos`





})