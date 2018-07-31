


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.mixcloud.com/upload/?name=Sample&mp3=C:\Users\mk337\Desktop\lfzmain\c618_standup\test.mp3&access_token=wwuF3abGHhFGnR4CQAufVSJFfK4tkunC",
    "method": "POST",
    // "headers": {
    //   "Content-Type": "application/x-www-form-urlencoded",
    //   "Cache-Control": "no-cache",
    //   "Postman-Token": "3cd3e8bc-daaf-459e-8db0-937d66b11d29"
    // },
    "data": {
      "access_token": "wwuF3abGHhFGnR4CQAufVSJFfK4tkunC"
    },
    success: function() {
        console.log(response);
    }
  }
  
  $.ajax(settings);