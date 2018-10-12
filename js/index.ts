import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios";


let getCarsbtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllButton");

interface ICar {
    model: string;
    vendor: string;
    price: number;
}

function doGetAll(): void {
    let uri: string = "http://rest-pele-easj-dk.azurewebsites.net/api/Cars";
    axios.get<ICar[]>(uri)
        .then(function (response: AxiosResponse<ICar[]>): void {
            console.log(response.data);
            let result: string = "<ol>";
            response.data.forEach((car: ICar) => {
                if(car !== null){
                    result += "<li>" + car.model + " " + car.price + "</li>";
                }
                 
            })
            result += "</ol>";
            let allCars: HTMLDivElement = <HTMLDivElement>document.getElementById("allCars");
            allCars.innerHTML = result;

            console.log(result);
        })
        .catch(function (error: AxiosError) {
            console.log(error);
        });
}
let addCarBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("addCarButton");


function addCar(): void {
    let modelInput: HTMLInputElement = <HTMLInputElement>document.getElementById("addModel");
    let vendorInput: HTMLInputElement = <HTMLInputElement>document.getElementById("addVendor");
    let priceInput: HTMLInputElement = <HTMLInputElement>document.getElementById("addPrice");

    let addModel: string = modelInput.value;
    let addVendor: string = vendorInput.value;
    let addPrice: number = Number(priceInput.value);

    let uri: string = "http://rest-pele-easj-dk.azurewebsites.net/api/Cars"
    axios.post<ICar>(uri, {model: addModel, vendor: addVendor, price: addPrice})
    .then(function(response: AxiosResponse): void{
        console.log(response.status + " " + response.statusText);
    })
    .catch((error: AxiosError)=>{
        console.log(error);
    })
}

let delbtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("deleteCar");

function deleteCar(): void {
    let modelElement : HTMLInputElement = <HTMLInputElement>document.getElementById("deleteModel");
    let deleteThisModel: string = modelElement.value;

    let uri: string ="http://rest-pele-easj-dk.azurewebsites.net/api/Cars/" + deleteThisModel;

    axios.delete(uri)
    .then(function(response: AxiosResponse): void{
            console.log(response);
    })
    . catch((error: AxiosError) => {
        console.log(error)
    })
}


delbtn.addEventListener("click", deleteCar);
addCarBtn.addEventListener("click",addCar)
getCarsbtn.addEventListener("click", doGetAll);