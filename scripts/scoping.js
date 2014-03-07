function blockScoping() {
    var x = 0;
    var message = 'Block scoping x = ';
    
    console.log(message + x);
    
    if (x == 0) {
        var x = 1;
        console.log(message + x);
    }
    
    console.log(message + x);
}

globalX = 0;

function globalScoping() {
    var message = 'Global scoping x = ';
    
    console.log(message + globalX);
    
    if (globalX == 0) {
        globalX = 1;
        console.log(message + globalX);
    }
    
    console.log(message + globalX);
}

var declaredGlobalX = 0;

function declaredGlobalScoping() {
    var message = 'Declared global scoping x = ';
    
    console.log(message + declaredGlobalX);
    
    if (declaredGlobalX == 0) {
        declaredGlobalX = 1;
        console.log(message + declaredGlobalX);
    }
    
    console.log(message + declaredGlobalX);
}


