const fs = require("fs");
const path = require("path");
const file = path.resolve("./result.txt")

module.exports = (content) => {
    if(fs.existsSync(file)){
        fs.appendFileSync(file, content)
    }
}