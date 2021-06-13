function receivesAFunction(callback){
    console.log(callback());
}

function returnsANamedFunction(){
    let nothing = function() { 
        return "before all"; 
    }
    return nothing;
}

function returnsAnAnonymousFunction(){
    return (function(){
        return "before all";
    })
}