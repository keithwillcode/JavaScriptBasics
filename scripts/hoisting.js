function hoistedFunction() {
    console.log("hoistedFunction 1");
}

function hoistedFunction() {
    console.log("hoistedFunction 2");
}

function hoistedFunction() {
    console.log("hoistedFunction 3");
}

var hoistedFunction = function() {
    console.log("hoistedFunction expression");
};

function hoistedVariables() {
    var weaponOne = "Sword";
    var weaponTwo = "Shotgun";
    
    function loadout() {
        console.log("Loadout with function declaration: " + weaponOne + " and " + weaponTwo);
    }
    
    loadout();
    
    var loadout = function() {
        console.log("Loadout with function expression: " + weaponOne + " and " + weaponTwo);
    }
    
    var weaponTwo = "Sniper Rifle";
}




