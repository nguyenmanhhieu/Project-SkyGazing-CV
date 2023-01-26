function timeLives() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let minut = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let session = document.getElementById('session');
  
    if(hrs >= 12) {
        session.innerHTML = 'PM'
    }
    else{
        session.innerHTML = 'AM'
    }
    if(minut < 10) {
        document.getElementById('minutes').innerHTML = "0" + minut;
    }
  
    if(minut >= 10) {
        document.getElementById('minutes').innerHTML = minut;
    }
  
    if(seconds < 10) {
    document.getElementById('seconds').innerHTML = "0" + seconds;
    }
    if(seconds >=10) {
        document.getElementById('seconds').innerHTML = seconds;
    }
  
    if(hrs < 10) {
        document.getElementById('hours').innerHTML = "0" + hrs;
    }
    if(hrs >= 10) {
        document.getElementById('hours').innerHTML = hrs;
    }
  
  }
  setInterval(timeLives, 10);