$(document).ready(function() {
    var buttons = [
        { "functionToInvoke" : "blockScoping", "title" : "Block Scoping" },
        { "functionToInvoke" : "globalScoping", "title" : "Global Scoping" },
        { "functionToInvoke" : "declaredGlobalScoping", "title" : "Declared Global Scoping" },
        { "functionToInvoke" : "plainObject", "title" : "Plain JavaScript Object" },
        { "functionToInvoke" : "addPropertiesDynamically", "title" : "Add Properties Dynamically" },
        { "functionToInvoke" : "addPropertiesDynamicallyKeySyntax", "title" : "Add Properties Dynamically With Key Syntax" },
        { "functionToInvoke" : "addFunctionsAsPropertiesDynamically", "title" : "Add Functions Dynamically" },
        { "functionToInvoke" : "deleteProperties", "title" : "Delete Properties" },
        { "functionToInvoke" : "useOfThisInsideOfAConstructedObject", "title" : "'this'" },
        { "functionToInvoke" : "overridingWhatConstructorFunctionReturns", "title" : "Override 'this'" },
        { "functionToInvoke" : "closure", "title" : "Closure" },
        { "functionToInvoke" : "multipleClosures", "title" : "Multiple Closures" },
        { "functionToInvoke" : "hoistedFunction", "title" : "Hoisted Functions" },
        { "functionToInvoke" : "hoistedVariables", "title" : "Hoisted Variables" }
    ];
                  
    var mainContent = $("#mainContent");
    for (var i = 0; i < buttons.length; i++) {
        mainContent.append($("<button data-function=\"" + buttons[i].functionToInvoke + "\">" + buttons[i].title + "</button>"));
    }
                  
    $("button").on("click", function(e) {
         e.preventDefault();
         var functionToInvoke = $(this).data("function");
         window[functionToInvoke]();
    });
});