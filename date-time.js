let today = new Date();
let day = today.getDay();
const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
console.log("today is :" +days[day]);

//Hello I'm another comment

//let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
function timeAmPm(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours= hours % 12;
    let dateTime = hours + ampm + ':' + minutes + ':' + seconds
    return dateTime
}
console.log(timeAmPm(new Date))

//hello I'm a comment
//hello "masdfasdf comment" change