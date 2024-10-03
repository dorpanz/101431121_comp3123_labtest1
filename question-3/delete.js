const fs = require('fs');
const path = './Logs';

fs.readdir(path, (err, files) => {
    if (err) {
        return console.log(err);;
    }
    files.forEach(file => {
        const filePath = `${path}/${file}`;
        try {
            fs.unlinkSync(filePath);  
            console.log("deleting file...." + file);
        } catch (err) {
            return console.log(err);
        }
    });
    fs.rmdir(path, (err) => {
        if (err) {
            return console.log(err);
        };
    });
});
