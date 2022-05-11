console.log("working");

//Objects
//Objects are collections of Properties and method......
//Objects have key which are converted  to strings types, The properties nad methods donot follw the insertion order.....
//Create an Objects


let mobile = {
    brand: "Samsung",
    wigth: 200,
    isWorking: true,
    11: "Android Version",
    displayInfo: function() {
        console.log(`The brand of my is ${brand} and the weight is ${weigth} which is in the working condition ${isWorking} , also with a android version of ${11}`)
    }
}
console.log(mobile);

mobile.camera = "32px";
console.log(mobile);

//.......................................................................................
let mobile1 = {};
//we will start assigning properties to the objects using objectName.property

mobile1.brand = "OnePlus";
mobile1.wigth = 190;
mobile1.isWorking = false;
mobile1["camera"] = "32px";

console.log(mobile1);
//................................................................................

function Mobile(brand, wigth, camera) {
    this.brand = brand;
    this.wigth = wigth;
    this.camera = camera;
}
let apple = new Mobile("Apple", 190, "13px");
let vivo = new Mobile("Vivo", 190, "108");
console.log(apple);
console.log(vivo);