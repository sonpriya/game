const prizes = [
  {
    id: 0,
    msg: "You've won a postcard from the <span>PHOTO ARCHIVES</span> category!",
  },
  {
    id: 1,
    msg: "You've won a postcard from the <span>Snippets</span> category!",
  },
  {
    id: 2,
    msg: "You've won a postcard from the <span>UNESCO</span> category!",
  },
  {
    id: 3,
    msg: "You've won a postcard from the <span>Forts of India</span> category!",
  },
  {
    id: 4,
    msg: "You've won a postcard from the <span>Musical Instruments of India</span>  category!",
  },
  {
    id: 5,
    msg: "You've won a postcard from the <span>Textiles and Fabrics of India </span> category!",
  },
  {
    id: 6,
    msg: "You've won a postcard from the <span>Ajanta Caves</span> category!",
  },
  {
    id: 7,
    msg: "You've won a postcard from the <span>Virtual Walkthrough</span> category!",
  },
  {
    id: 8,
    msg: "You've won a postcard from the <span>Paintings</span> category!",
  },
  {
    id: 9,
    msg: "You've won a postcard from the <span>Stories</span> category!",
  },
  {
    id: 10,
    msg: "You've wona postcard from the <span>Historic Cities of India</span> category!",
  },
  {
    id: 11,
    msg: "You've won a postcard from the <span>North-East Archive</span> category!",
  },
];

var activeBtn = false;
var audio = new Audio("./assets/wheel-audio.mp3");

function randomNum() {
  var prizeNum = Math.random() * 12;
  prizeNum = Math.floor(prizeNum);
  console.log(prizeNum);
  return prizeNum;
}

// console.log(prizeNum);

function removeClass() {
  prize = randomNum();

  document.getElementById("spinner").classList.remove("spin");
  document.getElementById("spin-btn").classList.remove("disabled");
  //   document.getElementById("spinner").classList.add("shake");

  document.getElementById("spinner").style.transform =
    "rotate(" + prize * 30 + "deg)";

  $(".pop-up-content").fadeIn();

  setTimeout(function () {
    document.getElementById("spin-btn").disabled = false;
    document.getElementById("arrow").classList.add("float");
    activeBtn = false;
  }, 2000);

  prizeText = prizes[prize].msg;

  document.getElementsByClassName("pop-up-para")[0].innerHTML = prizeText;
  $(".pop-up").fadeIn();
}

function spin() {
  activeBtn = true;
  audio.play();

  //   document.getElementById("spinner").classList.remove("shake");
  document.getElementById("arrow").classList.remove("float");
  document.getElementById("spinner").classList.add("spin");
  document.getElementById("spin-btn").disabled = true;

  setTimeout(removeClass, 5000);
}

document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === " " && activeBtn === false) {
    $("#spin-btn").trigger("click");
  }
});
