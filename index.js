// code your solution here
function saturdayFun(activity) {
    if (activity === undefined) {
        activity = "roller-skate";
    }
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity) {
    if (activity === undefined) {
        activity = "go to the office";
    }
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair) {
    if (flair === undefined) {
        flair = "*";
    }
    return (function(param){
        if (param === undefined) {
            param = "special";
        }
        return `You are ${flair}${param}${flair}!`
    })
}

console.log(wrapAdjective("&&&")("batman"));