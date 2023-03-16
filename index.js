const receivesAFunction = (callBack) => {return callBack()}

const returnsANamedFunction = () => {return receivesAFunction}

const returnsAnAnonymousFunction = () => {return (function(){ console.log("hey")})}