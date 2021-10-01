const fs = require('fs');
const path = require('path');

const boysPath = path.join(__dirname, 'boys');
const girlsPath = path.join(__dirname, 'girls');

const moveGenders = (prevPath, gender, newPath) => {
    fs.readdir(prevPath, (err, files) => {

        if (err) {
            console.log(err);
            return;
        }

        files.forEach(users => {
            fs.readFile(path.join(prevPath, users), (err1, data) => {

                if (err1) {
                    console.log(err1);
                    return;
                }

                const value = JSON.parse(data.toString());

                if (value.gender === gender) {
                    fs.rename(path.join(prevPath, users), path.join(newPath, users), err2 => {
                        if (err2) {
                            console.log(err2);
                        }
                    })
                }
            })
        })
    })
}

moveGenders(boysPath, 'female', girlsPath);
moveGenders(girlsPath, 'male', boysPath);