const fs = require('fs');
const path = "./Logs";

fs.access(path, (err) =>{
    if (err) {
        fs.mkdir(path, (err) => {
            if(err){
                console.log(err);
            } else{
                process.chdir(path);
                for (let i = 1; i <= 10; i++) {
                    const fileName = `log${i}.txt`;
                    const content = "Name of file is" + fileName;
                    try {
                        fs.writeFileSync(fileName, content);  
                        console.log(fileName); 
                    } catch (err) {
                        return console.log(err);
                    }
                }
            }
        });
    }else {
        console.log("Directory already exists");
    }
})