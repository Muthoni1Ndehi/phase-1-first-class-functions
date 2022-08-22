function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction(){
return function namedfn()
{
    console.log("This is a named function");
};
}

function returnsAnAnonymousFunction(){
    return ()=> console.log("")
}