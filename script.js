// geting canvas by id c
var c = document.getElementById("matrix-rain");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "BINARYABCDEFGHIJKLMNOPQRSTUVWXYZ素早い茶色のキツネが怠惰な犬を飛び越えるБыстраякоричневаялисапрыгаетчерезленивуюсобаку123456789@#$%^&*()*&^%";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#A1C51E"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 30);


const chartData = {
  labels: ["Staking Rewards Emission", "DAO Treasury", "Foundation Treasury", "Development Team Instant Emission", "Development Team Periodical Distribution", "Private Sale", "Pre-Sale Round 1", "Pre-Sale Round 2"],
  data: [65.22, 8.70, 4.78, 5.22, 5.22, 6.52, 2.17, 2.17],
};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".binary-stats .details ul");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data,
        backgroundColor: ['#A1C51E', '#FF93BA', '#E375FF', '#892DFF', '#FF8469', '#FF6535', '#60B3FF', '#397CFF' ],
      },
    ],
  },
  options: {
    cutout: '80%',
    borderWidth: 0,
    borderRadius: 8,
    hoverBorderWidth: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const populateUl = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
    ul.appendChild(li);
  });
};




populateUl();


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));