


export const dateFormatter = function(day){

  let months = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];


  let date = new Date(day);
  let month_idx = date.getMonth();
  let month = months[month_idx];

  let dayNow = date.getDate();
  let year = date.getFullYear();
  let outputStr = (month + " " + dayNow + ', ' + year);
  return outputStr;
}


export const dateAndTimeFormatter = function(day){

  let months = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];


  let date = new Date(day);
  let month_idx = date.getMonth();
  let month = months[month_idx];

  let dayNow = date.getDate();
  let year = date.getFullYear();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amPm = (hours > 12) ? 'pm' : 'am';
  hours = (hours > 12) ? (hours - 12) : hours;
  if(hours < 1){
    hours = 12;
  }
  if(minutes < 10){
    minutes = '0'+minutes;
  }
  let outputStr = (month + " " + dayNow + ',' + year + " " + hours + ":" + minutes + amPm);
  return outputStr;
}
