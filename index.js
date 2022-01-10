function receivesAFunction(cb){
    cb();
};

function returnsANamedFunction(){
    return function beepbeep(){
        console.log('Hello!');
    };
};

function returnsAnAnonymousFunction(){
    return () => console.log('Bye!');
};