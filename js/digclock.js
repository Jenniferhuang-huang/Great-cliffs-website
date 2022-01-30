    //Create a time data function
      function currentTime() {
        //Declare variables
        var d = new Date();
        var hr = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        var ampm;

        if (sec < 10) {
          sec = "0" + sec;
        }
        if (min < 10) {
          min = "0" + min;
        }

        var utchr = d.getUTCHours();
        var timeDiff;
        var adjTimeDiff;
        var timeZone;

        timeDiff = utchr - hr;
        if (timeDiff >= 0) {
          adjTimeDiff = timeDiff;
        } else {
          adjTimeDiff = timeDiff + 24;
        }

        if (adjTimeDiff == 8) {
          timeZone = "PST";
        } else if (adjTimeDiff == 6) {
          timeZone = "CST";
        } else if (adjTimeDiff == 5) {
          timeZone = "EST";
        } else if (adjTimeDiff == 7) {
          timeZone = "MST";
        }

        if (hr == 12) {
          ampm = "PM";
        } else if (hr > 12) {
          hr -= 12;
          ampm = "PM";
        } else {
          ampm = "AM";
        }

        var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
        document.getElementById("clock").innerText = time;
      }
      setInterval(currentTime, 1000);