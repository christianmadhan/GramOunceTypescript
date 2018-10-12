let inputOunce: HTMLInputElement = <HTMLInputElement>document.getElementById("ounce");
let inputGram: HTMLInputElement = <HTMLInputElement>document.getElementById("gram");

let convertOuncebtn:  HTMLButtonElement = <HTMLButtonElement>document.getElementById("convertToOunce");
let convertGrambtn:  HTMLButtonElement = <HTMLButtonElement>document.getElementById("convertToGram");

let convertedOunce: HTMLSpanElement = <HTMLSpanElement>document.getElementById("convertedOunce");
let convertedGram: HTMLSpanElement = <HTMLSpanElement>document.getElementById("convertedGram");

convertGrambtn.addEventListener("click", ()=> {
        convertedOunce.innerHTML = parseFloat(inputOunce.value) * 28.35 +  "";
});

convertOuncebtn.addEventListener("click", ()=> {
    convertedGram.innerHTML = parseFloat(inputGram.value) / 28.35 +  " ";
});