const fs = require('fs').promises;
const path = require('path');
// const util = require('util');

const dbPath = path.join(__dirname, '../', 'dataBase', 'users.json' );

// const readDbPr = util.promisify(fs.readFile);

 const readDb = async () => {
      const data = await fs.readFile(dbPath)

     return JSON.parse(data.toString());

 }

 const writeDb = async (data) => {
     await fs.writeFile(dbPath, `${JSON.stringify(data)}`)
 }
module.exports = {readDb, writeDb}