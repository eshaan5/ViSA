const container = document.querySelector(".bars");

document.addEventListener("DOMContentLoaded", function () {
  alert("Please select the Number of Bars");
});

var size;

// function to disable the button
function disable() {
  // To disable the button "Generate New Array"
  document.getElementById("new").disabled = true;

  // To disable the button "Selection Sort"
  document.getElementById("selection").disabled = true;

  document.getElementById("bubble").disabled = true;
  document.getElementById("quick").disabled = true;
  document.getElementById("insertion").disabled = true;
  document.getElementById("arr_sz").disabled = true;
}

function enable() {
  document.getElementById("new").disabled = false;
  document.getElementById("bubble").disabled = false;
  document.getElementById("selection").removeAttribute("disabled");
  document.getElementById("quick").disabled = false;
  document.getElementById("insertion").disabled = false;
  document.getElementById("arr_sz").disabled = false;
}
// function to generate bars
function generatebars(num) {
  // remove all the bars
  container.innerHTML = "";

  //for loop to generate 20 bars
  for (let i = 0; i < num; i += 1) {
    // To generate random values from 1 to 100
    const value = Math.floor(Math.random() * 100) + 1;

    // To create element "div"
    const bar = document.createElement("div");

    // To add class "bar" to "div"
    bar.classList.add("bar");

    // Provide height to the bar
    bar.style.height = value * 3 + "px";

    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`;

    // To create element "label"
    const barLabel = document.createElement("label");

    // To add class "bar_id" to "label"
    barLabel.classList.add("bar_id");

    // Assign value to "label"
    barLabel.innerHTML = value;

    // Append "Label" to "div"
    bar.appendChild(barLabel);

    // Append "div" to "data-container div"
    container.appendChild(bar);

    size = num;
  }
}

document.getElementById("quick").addEventListener("click", function () {
  QuickSort(0, size - 1);
});

// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 300) {
  disable();
  let bars = document.querySelectorAll(".bar");
  // Assign 0 to min_idx
  var min = 0;
  for (var i = 0; i < bars.length; i += 1) {
    // Assign i to min_idx
    min = i;

    // Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "orange";
    for (var j = i + 1; j < bars.length; j += 1) {
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "red";

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      // To store the integer value of jth bar to var1
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);

      // To store the integer value of (min_idx)th bar to var2
      var val2 = parseInt(bars[min].childNodes[0].innerHTML);

      // Compare val1 & val2
      if (val1 < val2) {
        if (min !== i) {
          // Provide skyblue color to the (min-idx)th bar
          bars[min].style.backgroundColor = " rgb(24, 190, 255)";
        }
        min = j;
      } else {
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = " rgb(24, 190, 255)";
      }
    }

    // To swap ith and (min_idx)th bar
    var temp1 = bars[min].style.height;
    var temp2 = bars[min].childNodes[0].innerText;
    bars[min].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;

    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );

    // Provide skyblue color to the (min-idx)th bar
    bars[min].style.backgroundColor = " rgb(24, 190, 255)";

    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  enable();
}

async function BubbleSort(delay = 300) {
  disable();

  let bars = document.querySelectorAll(".bar");

  var count = 1;

  var n = bars.length;

  while (count < n) {
    for (var i = 0; i < n - count; i++) {
      bars[i].style.backgroundColor = "orange";
      bars[i + 1].style.backgroundColor = "red";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      var val1 = parseInt(bars[i].childNodes[0].innerHTML);
      var val2 = parseInt(bars[i + 1].childNodes[0].innerHTML);

      if (val1 > val2) {
        var temp1 = bars[i].style.height;
        var temp2 = bars[i].childNodes[0].innerText;
        bars[i].style.height = bars[i + 1].style.height;
        bars[i + 1].style.height = temp1;
        bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
        bars[i + 1].childNodes[0].innerText = temp2;
      }

      bars[i].style.backgroundColor = " rgb(24, 190, 255)";

      bars[i + 1].style.backgroundColor = " rgb(24, 190, 255)"; //skyblue

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );
    }
    count++;
  }
  for (var i = 0; i < n; i++) {
    bars[i].style.backgroundColor = " rgb(49, 226, 13)"; //lightgreen
  }
  enable();
}

async function Partition(l, r, delay = 600) {
  var vi, vj, vp;
  var bars = document.querySelectorAll(".bar");

  var pivot = parseInt(bars[r].childNodes[0].innerHTML);
  vp = bars[r].childNodes[0].innerText;
  bars[r].childNodes[0].innerHTML += "<br>   P";

  var i = l - 1;

  for (var j = l; j < r; j++) {
    if (parseInt(bars[j].childNodes[0].innerHTML) <= pivot) {
      i++;
      bars[i].style.backgroundColor = "red";
      vi = bars[i].childNodes[0].innerText;
      vj = bars[j].childNodes[0].innerText;
      bars[i].childNodes[0].innerHTML += "<br>   i";

      bars[j].style.backgroundColor = "orange";
      bars[j].childNodes[0].innerHTML += "<br>   j";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      bars[i].style.backgroundColor = " rgb(24, 190, 255)";
      bars[j].style.backgroundColor = " rgb(24, 190, 255)";

      var temp1 = bars[i].style.height;
      var temp2 = vi;
      bars[i].style.height = bars[j].style.height;
      bars[i].childNodes[0].innerText = vj;
      bars[j].style.height = temp1;
      bars[j].childNodes[0].innerText = temp2;

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    }
  }

  bars[i + 1].style.backgroundColor = "orange";
  bars[r].style.backgroundColor = "red";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay)
  );
  bars[i + 1].style.backgroundColor = " rgb(24, 190, 255)";
  bars[r].style.backgroundColor = " rgb(24, 190, 255)";

  bars[r].childNodes[0].innerText = vp;

  var temp1 = bars[i + 1].style.height;
  var temp2 = bars[i + 1].childNodes[0].innerText;

  vi = bars[i + 1].childNodes[0].innerText;
  vj = bars[r].childNodes[0].innerText;

  bars[i + 1].childNodes[0].innerHTML += "<br>   i";
  bars[r].childNodes[0].innerHTML += "<br>   j";

  bars[i + 1].style.height = bars[r].style.height;
  bars[i + 1].childNodes[0].innerText = vj;
  bars[r].style.height = temp1;
  bars[r].childNodes[0].innerText = vi;

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay)
  );

  return i + 1;
}

async function QuickSort(l, r, delay = 100) {
  disable();
  var bars = document.querySelectorAll(".bar");

  if (l < r) {
    var pivot = await Partition(l, r);
    await QuickSort(l, pivot - 1);
    await QuickSort(pivot + 1, r);
  }
  for (var i = l; i <= r; i++) {
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
  enable();
}

async function InsertionSort() {
  disable();

  var bars = document.querySelectorAll(".bar");
  var n = bars.length;
  for (var i = 1; i < n; i++) {
    var key = parseInt(bars[i].childNodes[0].innerHTML);
    var j = i - 1;
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      bars[j + 1].style.backgroundColor = "orange";
      bars[j].style.backgroundColor = "red";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 500)
      );
      bars[j + 1].childNodes[0].innerHTML = bars[j].childNodes[0].innerHTML;
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].style.backgroundColor = "rgb(24, 190, 255)";
      bars[j].style.backgroundColor = "rgb(24, 190, 255)";
      j--;
    }
    bars[j + 1].style.backgroundColor = "orange";
    bars[i].style.backgroundColor = "red";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 500)
    );
    bars[j + 1].childNodes[0].innerHTML = key;
    bars[j + 1].style.height = key * 3 + "px";
    bars[i].style.backgroundColor = "rgb(24, 190, 255)";
    bars[j + 1].style.backgroundColor = "rgb(49, 226, 13)";
  }
  for (var i = 0; i < n; i++) {
    bars[i].style.backgroundColor = "rgb(49, 226, 13)";
  }
  enable();
}

function generate() {
  window.location.reload();
}
