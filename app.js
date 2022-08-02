//set date that we are counting down to
const eventDate='2024-08-09';

function getTimeToEvent(endDateTime){
    // calculate the number of milliseconds left to event from the current time
    const totalTimeLeft=Date.parse(endDateTime)-Date.parse(new Date());
    //calculate the number of seconds left per minute to event. 1 second=1000 milliseconds
    const seconds=Math.floor((totalTimeLeft/1000)%60);
    //calculate the number of minutes per hour left to event 
    const minutes=Math.floor((totalTimeLeft/1000/60)%60);
    //calculate the number of hours per day left to event 
    const hours=Math.floor(totalTimeLeft/(1000*60*60)%24)
    //calculate the number of days left to event
    const days=Math.floor(totalTimeLeft/(1000*60*60*24));

    // return remaining time as an object to be accessed getTimeToEvent(endDateTime).objectProperty
    return{
        totalTimeLeft,
        seconds,
        minutes,
        hours,
        days
    }// end of object

}

function startClock(id, endTime) {
    const clock = document.getElementById(id);
    // Update the countdown every 1000 milliseconds (1 second)
    const updateCountDown = setInterval(() => {
    
     clock.innerHTML=` ${getTimeToEvent(endTime).days} days 
                        ${getTimeToEvent(endTime).hours} hours
                       ${getTimeToEvent(endTime).minutes} minutes
                       ${getTimeToEvent(endTime).seconds} seconds` ;
      // stop the count down when the count reaches 0 seconds to deadline of event                 
      if (getTimeToEvent(endTime).totalTimeLeft <= 0) {
        clearInterval(updateCountDown);
        clock.innerHTML='THE EVENT HAS STARTED';
      }
    },1000);
  }
 
startClock('count-down-clock', eventDate);
  

