const mongoose = require('mongoose');
const mongoURI = '<------------------->';

async function main(){
    try{
        await mongoose.connect(mongoURI);
        console.log(`connected to db`);
    }catch(err){
        console.log(`error in connecting to db ${err}`);
    }
}

main();