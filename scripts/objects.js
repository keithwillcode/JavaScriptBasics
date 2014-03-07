var box = {
    height: 100,
    width: 200
};

function plainObject() {
    console.log("Box height = " + box.height);
    console.log("Box width = " + box.width);
}

function addPropertiesDynamically() {
    box.color = "black";
    console.log("Box height = " + box.height);
    console.log("Box width = " + box.width);
    console.log("Box color = " + box.color);
}

function addPropertiesDynamicallyKeySyntax() {
    var items = ["Bat", "Orange", "Microprocessor", "Madden", "Keyboard"];
    
    for (var i = 0; i < items.length; i++) {
        box["item" + i] = items[i];
        console.log("Box item[" + i + "] = " + box["item" + i]);
    }
}

function addFunctionsAsPropertiesDynamically() {
    box.explode = function () {
        var answer = confirm("Are you sure you want to blow the box up?");
        if (answer)
            console.log("BOOOOOOM!!!");
        else
            console.log("Keeping it safe I see...");
    }
    
    box.explode();
}

function deleteProperties() {
    box.depth = 300;
    console.log("Box depth = " + box.depth);
    delete box.depth;
    console.log("Box depth after deleting = " + box.depth);
}

function useOfThisInsideOfAConstructedObject() {
    var halo = new Halo();
    halo.loadout();
}

function overridingWhatConstructorFunctionReturns() {
    var haloOverride = new HaloOverride();
    haloOverride.loadout();
}

function closure() {
    var haloClosure = new HaloClosure();
    haloClosure.loadout();
}

function multipleClosures() {
    var haloMultipleClosures = new HaloMultipleClosures();
    haloMultipleClosures.loadout()();
}

function Halo() {
    this.weaponOne = "Sword";
    this.weaponTwo = "Shotgun";
    
    this.loadout = function() {
        console.log("Loadout: " + this.weaponOne + " and " + this.weaponTwo);
    };
}

function HaloOverride() {
    this.weaponOne = "Sword";
    this.weaponTwo = "Shotgun";
    
    this.loadout = function() {
        console.log("Loadout: " + this.weaponOne + " and " + this.weaponTwo);
    };
    
    return {
        loadout: function() {
            console.log("We overrode this and made a new function");
        }
    }
}

function HaloClosure() {
    var weaponOne = "Battle Rifle";
    var weaponTwo = "Sniper Rifle";
    
    this.loadout = function() {
        console.log("Loadout with closure: " + weaponOne + " and " + weaponTwo);
    }
}

function HaloMultipleClosures() {
    var weaponOne = "Battle Rifle";
    var weaponTwo = "Sniper Rifle";
    
    this.loadout = function() {
        console.log("Loadout with closure: " + weaponOne + " and " + weaponTwo);
        return function() { console.log("This = " + this); };
    }
}