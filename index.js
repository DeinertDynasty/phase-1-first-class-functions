// Function that takes a callback as an argument and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function.");
    }
    return namedFunction;
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("This is an anonymous function.");
    };
  }
// testing with baking instructions

function preheatOven() {
    console.log("Preheat the oven to 375°F");
  }
  
  function mixIngredients() {
    console.log("Mix the dry and wet ingredients together.");
  }
  
  function pourBatterIntoPan() {
    console.log("Pour the batter into a greased pan.");
  }
  
  function bakeInOven() {
    console.log("Bake in the oven for 30 minutes.");
  }
  
  function addFrosting() {
    console.log("Add frosting to the cake.");
  }
  
  function bakeCake(postBakeAction) {
    preheatOven();
    mixIngredients();
    pourBatterIntoPan();
    bakeInOven();
    postBakeAction();
  }
  
  function makeChocolateCake() {
    console.log("Make a chocolate cake:");
    bakeCake(addFrosting);
  }
  
  function makeVanillaCake() {
    console.log("Make a vanilla cake:");
    bakeCake(function () {
      console.log("Add sprinkles to the cake.");
    });
  }
  
  makeChocolateCake();
  makeVanillaCake();
  