//access token to use maxbox api
mapboxgl.accessToken = 'pk.eyJ1Ijoic2J1cmZvcmQxMTIxIiwiYSI6ImNsZzRqcXRjeDBpN28zZnIzNzFwc3hwOWIifQ.E6KooNfwrwsKBkhWpN9CGQ';
//variables to access buttons
const addAddressButton = document.getElementById("addAddress");
const optimizeRouteButton = document.getElementById("optimizeRoute");
//object that will contain all information needed to determine most efficient route
let routeDetails = 
{
    //grabs start and end address from local storage
    start : localStorage.getItem("startAddress"),
    end : localStorage.getItem("endAddress"),
    //stores the start and end address to the address list
    addressList : [localStorage.getItem("startAddress"), localStorage.getItem("endAddress")],
};
//clears start and end addresses from local storage
localStorage.clear();

//when add address button is clicked
addAddressButton.addEventListener("click", (event) => 
{
    //create variables for user input and address table
    let userInput = document.getElementById("address").value;
    const addressTable = document.getElementById("addressTable");
    //push user input to address list
    routeDetails.addressList.push(userInput);
    //creates a new row at the bottom of the address table
    const newRow = addressTable.insertRow(-1);
    //creates a new cell in the new row
    const addressCell = newRow.insertCell(0);
    //fills the new cell with the user input
    addressCell.innerHTML = userInput;
    //resets the input field to be blank
    userInput = "";
    console.log(routeDetails);
    alert(routeDetails);
});

