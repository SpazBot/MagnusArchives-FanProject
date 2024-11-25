let darkBool = false;
let monitorBool = false;

function toggleMonitor() {
    var x = document.getElementById('desktop');
    if (x.style.display === 'block') {
      x.style.display = 'none';
      monitorBool = false;
      joeSpooky();
    } else {
      x.style.display = 'block';
      monitorBool = true;
      joeSpooky();
    }
  }
  
function toggleDark(){
    var x = document.getElementById('dark');
    if (x.style.display === 'block') {
      darkBool = false;
      joeSpooky();
      x.style.display = 'none';
    } else {
      darkBool = true;
      joeSpooky();
      x.style.display = 'block';
    }
}
function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = currentDateTime;
}

function joeSpooky(){
  let x = document.getElementById('desktop');
  let y = document.getElementsByClassName('desktopIcon');
  if(darkBool && !monitorBool)
  {
    x.style.backgroundImage = "url(assets/joeSpooky.png)";
    
    for (let i = 0; i < y.length; i++) {
      y[i].style.display = 'none';
    }

    $("#desktop").fadeIn(8000);
  }
  if(!darkBool || monitorBool)
  {
    x.style.backgroundImage = "url(assets/DesktopBackground.png)";
    for (let i = 0; i < y.length; i++) {
      y[i].style.display = 'block';
    }
  }
}

// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);
