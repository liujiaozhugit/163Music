
function timeFormat(times){
    let m = parseInt((times % (1000*60*60)) / (1000*60));
    let s = parseInt((times % (1000*60)) / (1000));
    let mm = m >= 9 ? m : '0'+ m;
    let ss = s >= 9 ? s : '0'+ s;
    return mm+":"+ss;
}
export{
    timeFormat
}