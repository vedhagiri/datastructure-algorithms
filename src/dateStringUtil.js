function checkDays(source) {
    var dispStr = "Invalid Date", days, diffMilliSec;
    if((source !== undefined) && (source !== '') && (source !== '0000-00-00 00:00:00')){
       // current date should get from server or calculate from user timezone settings data
       diffMilliSec = new Date().getTime() - new Date(source).getTime(); 
       if(Math.sign(diffMilliSec) !== -1){ 
         days =  Math.round(Math.abs(diffMilliSec) / (1000 * 60 * 60 * 24));
         dispStr = "(" + ((days >= 1) ? days + " day" + (days !== 1 ? "s" : "") +  " ago" : "today") + ")";
       } 
    }
    return dispStr;
};

console.log("yesterday: " + checkDays('Fri Feb 21 2019 16:45:11 GMT+0530 (India Standard Time)'));
console.log("Today: " + checkDays (new Date()));
console.log("tomorrow: " + checkDays('Fri Feb 24 2019 16:45:11 GMT+0530 (India Standard Time)'));
console.log("fewDays Ago: " + checkDays('Fri Feb 12 2019 16:45:11 GMT+0530 (India Standard Time)'));
console.log("fewDays Ago: " + checkDays('Fri Feb 10 2019 16:45:11 GMT+0530 (India Standard Time)'));
console.log("undefined: " + checkDays(undefined));
console.log("Empty: " + checkDays(""));
console.log("0000-00-00 00:00:00: " + checkDays('0000-00-00 00:00:00'));
//checkDays(new Date());

