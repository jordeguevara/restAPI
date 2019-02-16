let compose = function(func1,func2) {  // function that takes two functions as parameters 
    return function(value){ 
        return func2(func1(value));
    }
}

let double = function(x) {
return x*2;
}

let triple = function(x){
return x * 3;
}

let quad = function(x) {
return x *4;
}

var composed  = compose(triple,double);

console.log(composed(2));