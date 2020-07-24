const scedule = require("node-schedule");
const shell = require("./shell");

const realTime = require("./settings").time;

const sd = scedule.scheduleJob(realTime, () => {
    // console.log('The answer to life, the universe, and everything!');
    shell()
  });