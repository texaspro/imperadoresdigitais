


Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}


let dayFields = document.querySelectorAll('#day');
let hourFields = document.querySelectorAll('#hour');
let minuteFields = document.querySelectorAll('#minute');
let secondFields = document.querySelectorAll('#second');

document.get
let interval;
const eventDay = moment(new Date().addHours(4));
  
// Convert to milisecond
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
  
const countDownFn = () => {
    const today = moment();
    const timeSpan = eventDay.diff(today);
  
    if (timeSpan <= -today) {
        console.log("Unfortunately we have past the event day");
        clearInterval(interval);
        return;
    } else if (timeSpan <= 0) {
        console.log("Today is the event day");
        clearInterval(interval);
        return;
    } else {
        const days = Math.floor(timeSpan / day);
        const hours = Math.floor((timeSpan % day) / hour);
        const minutes = Math.floor((timeSpan % hour) / minute);
        const seconds = Math.floor((timeSpan % minute) / second);

        dayFields.forEach(dayField => {
            dayField.innerHTML = days;
        })

        hourFields.forEach(hourField => {
            hourField.innerHTML = days;
        })

        minuteFields.forEach(minuteField => {
            minuteField.innerHTML = minutes;
        })

        secondFields.forEach(secondField => {
            secondField.innerHTML = seconds;
        })
  
        // Set results
        //dayField.innerHTML = days;
        //hourField.innerHTML = hours;
        //minuteField.innerHTML = minutes;
        //secondField.innerHTML = seconds;
    }
};
  
interval = setInterval(countDownFn, second);