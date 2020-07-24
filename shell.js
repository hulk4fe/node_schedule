const shell = require("shelljs");
const output = require("./output");

const cmds = require("./settings").cmds;
const desc = require("./settings").desc;
var stripscript = function(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？↵\r]");
        var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    return rs;
}
module.exports = () => {
    shell.exec('echo "" > ./result.txt')
    shell.exec('sudo ~/.bash_profile')
    cmds.map((cmd, ind)=>{
        const stdout = shell.exec(cmd, {silent:true}).stdout
        if(stdout){
            console.log(`${new Date()}: exec command: ${cmd}`)
            output(`
${desc[ind]}
${stripscript(stdout)}
-----------------------
-----------------------
`)
        }
    })
}
