


// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.mixcloud.com/upload/?name=Sample&mp3=C:\Users\mk337\Desktop\lfzmain\c618_standup\test.mp3&access_token=wwuF3abGHhFGnR4CQAufVSJFfK4tkunC",
//     "method": "POST",
//     // "headers": {
//     //   "Content-Type": "application/x-www-form-urlencoded",
//     //   "Cache-Control": "no-cache",
//     //   "Postman-Token": "3cd3e8bc-daaf-459e-8db0-937d66b11d29"
//     // },
//     "data": {
//       "access_token": "wwuF3abGHhFGnR4CQAufVSJFfK4tkunC"
//     },
//     success: function() {
//         console.log(response);
//     }
//   }
  
//   $.ajax(settings);
$('document').ready(initializeApp);

function uploadSound(event) {
    event.preventDefault();
    debugger;
    var the_data = {
        'mp3': $(this).serialize(),
        'name': 'sample drake',
        'sections-0-artist': 'drake',
        'sections-0-song': 'drake song'

    }
    var ajaxOptions = {
        dataType: "json",
        data: $(this).serialize(),
        method: "POST",
        url: "https://api.mixcloud.com/upload/?access_token=BnjMq42FuHchBYzppmzCLd5ZcsVznVrh",

        success: function () {
            console.log("Success: Student Add to Serve")
        },
        error: console.log('oops')

    }
    $.ajax(ajaxOptions);
}

// uploadSound();


function initializeApp() {

    $('#fileToUpload').on('click', checkFile);
    $('button').on('click', checkFile);
    $('form').on('submit', uploadSound);
}

function checkFile() {
    console.log($('form').serialize())
}