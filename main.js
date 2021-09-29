const fs = require('fs');
const path = require('path');

const boysPath = path.join(__dirname, 'boys');
const girlsPath = path.join(__dirname, 'girls');

fs.readdir(boysPath, (err, files) => {
    if (err) {
        console.log( err )
        return;
    }
    files.forEach(users =>{
        fs.readFile(path.join(boysPath, users), (err1, data) => {
            if(err1){
                console.log(err1)
                return;
            }
            const value = JSON.parse(data.toString())
            if(value.gender === 'female'){
                fs.rename(path.join(boysPath, users), path.join(girlsPath,users), err2 => {
                    if(err2){
                        console.log(err2)
                    }
                })
            }
        })
    })
})



fs.readdir(girlsPath, (err, files) => {
    if(err){
        console.log(err)
        return
    }
    files.forEach(users => {
        fs.readFile(path.join(girlsPath,users), (err1, data) => {
            if(err1){
                console.log(err1)
                return
            }
            let value = JSON.parse(data.toString())
            if(value.gender === "male"){
                fs.rename(path.join(girlsPath,users), path.join(boysPath,users), err2 => {
                    if(err2){
                        console.log(err2)
                    }
                })
            }
        })
    })
})

