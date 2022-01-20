const fs = require('fs');

function writeDataToFile(filename, connect) {
    fs.writeFileSync(filename, JSON.stringify(connect), 'utf8', (err)=> {
        if(err){
            console.log(err);
        }
    });

}
module.exports = {writeDataToFile};