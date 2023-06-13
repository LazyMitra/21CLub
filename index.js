//kAD PRITISNES TEKST PUSTI DE MUZIKA
document.getElementsByClassName("player")[0].volume = 0.2;

var x = document.getElementById("verse1");
x.volume = 0.2;
function playVerse1() {
  x.play();
}
var y = document.getElementById("verse2");
y.volume = 0.2;
function playVerse2() {
  y.play();
}

// ZA PRIKAZ STRELICA NA DROPDOWN

const e = document.getElementsByClassName("dropbtn")[0];
e.addEventListener("mouseover", jwdown);
e.addEventListener("mouseout", jwnone);

function jwdown() {
  document
    .getElementsByClassName("JWarrow")[0]
    .classList.toggle("showed");
  document.getElementsByClassName("JWarrow")[0].classList.toggle("down");
}
function jwnone() {
  document
    .getElementsByClassName("JWarrow")[0]
    .classList.remove("showed");
}

const el = document.getElementsByClassName("dropbtn")[1];
el.addEventListener("mouseover", xxxdown);
el.addEventListener("mouseout", xxxnone);

function xxxdown() {
  document
    .getElementsByClassName("XXXarrow")[0]
    .classList.toggle("showed");
  document.getElementsByClassName("XXXarrow")[0].classList.toggle("down");
}
function xxxnone() {
  document
    .getElementsByClassName("XXXarrow")[0]
    .classList.remove("showed");
}

const ele = document.getElementsByClassName("dropbtn")[2];
ele.addEventListener("mouseover", lpdown);
ele.addEventListener("mouseout", lpnone);

function lpdown() {
  document
    .getElementsByClassName("LParrow")[0]
    .classList.toggle("showed");
  document.getElementsByClassName("LParrow")[0].classList.toggle("down");
}
function lpnone() {
  document
    .getElementsByClassName("LParrow")[0]
    .classList.remove("showed");
}

const elem = document.getElementsByClassName("dropbtn")[3];
elem.addEventListener("mouseover", psdown);
elem.addEventListener("mouseout", psnone);

function psdown() {
  document
    .getElementsByClassName("PSarrow")[0]
    .classList.toggle("showed");
  document.getElementsByClassName("PSarrow")[0].classList.toggle("down");
}
function psnone() {
  document
    .getElementsByClassName("PSarrow")[0]
    .classList.remove("showed");
}

const eleme = document.getElementsByClassName("dropbtn")[4];
eleme.addEventListener("mouseover", lldown);
eleme.addEventListener("mouseout", llnone);

function lldown() {
  document
    .getElementsByClassName("LLarrow")[0]
    .classList.toggle("showed");
  document.getElementsByClassName("LLarrow")[0].classList.toggle("down");
}
function llnone() {
  document
    .getElementsByClassName("LLarrow")[0]
    .classList.remove("showed");
}

const elemen = document.getElementsByClassName("dropbtn")[5];
elemen.addEventListener("mouseover", jimdown);
elemen.addEventListener("mouseout", jimnone);

function jimdown() {
  document
    .getElementsByClassName("Jimarrow")[0]
    .classList.toggle("showed");
  document.getElementsByClassName("Jimarrow")[0].classList.toggle("down");
}
function jimnone() {
  document
    .getElementsByClassName("Jimarrow")[0]
    .classList.remove("showed");
}

//ZA SPUSTANJE DROPDOWN

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementsByClassName("JWarrow")[0].classList.toggle("up");
}

function dropdown1() {
  document.getElementById("myDropdown1").classList.toggle("show");
  document.getElementsByClassName("XXXarrow")[0].classList.toggle("up");
}

function dropdown2() {
  document.getElementById("myDropdown2").classList.toggle("show");
  document.getElementsByClassName("LParrow")[0].classList.toggle("up");
}

function dropdown3() {
  document.getElementById("myDropdown3").classList.toggle("show");
  document.getElementsByClassName("PSarrow")[0].classList.toggle("up");
}

function dropdown4() {
  document.getElementById("myDropdown4").classList.toggle("show");
  document.getElementsByClassName("LLarrow")[0].classList.toggle("up");
}

function dropdown5() {
  document.getElementById("myDropdown5").classList.toggle("show");
  document.getElementsByClassName("Jimarrow")[0].classList.toggle("up");
}

//ZA DIZANJE DROPDOWN
window.onclick = function (event) {
  if (!event.target.matches("#JuiceWrld")) {
    var dropdowns = document.getElementsById("dropdown-content");
    var arrow = document.getElementsByClassName("JWarrow")[0];
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        arrow.classList.remove("up");
      }
    }
  } else if (!event.target.matches("#XXXTentacion")) {
    var dropdowns1 = document.getElementsById("dropdown-content");
    var arrow1 = document.getElementsByClassName("XXXarrow")[0];
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown1 = dropdowns1[i];
      if (openDropdown1.classList.contains("show")) {
        openDropdown1.classList.remove("show");
        arrow1.classList.remove("up");
      }
    }
  } else if (!event.target.matches("#LilPeep")) {
    var dropdowns2 = document.getElementsById("dropdown-content");
    var arrow2 = document.getElementsByClassName("LParrow")[0];
    var i;
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown2 = dropdowns2[i];
      if (openDropdown2.classList.contains("show")) {
        openDropdown2.classList.remove("show");
        arrow2.classList.remove("up");
      }
    }
  } else if (!event.target.matches("#PopSmoke")) {
    var dropdowns3 = document.getElementsById("dropdown-content");
    var arrow3 = document.getElementsByClassName("PSarrow")[0];
    var i;
    for (i = 0; i < dropdowns3.length; i++) {
      var openDropdown3 = dropdowns3[i];
      if (openDropdown3.classList.contains("show")) {
        openDropdown3.classList.remove("show");
        arrow3.classList.remove("up");
      }
    }
  } else if (!event.target.matches("#LilLoaded")) {
    var dropdowns4 = document.getElementsById("dropdown-content");
    var arrow4 = document.getElementsByClassName("LLarrow")[0];
    var i;
    for (i = 0; i < dropdowns4.length; i++) {
      var openDropdown4 = dropdowns4[i];
      if (openDropdown4.classList.contains("show")) {
        openDropdown4.classList.remove("show");
        arrow4.classList.remove("up");
      }
    }
  } else if (!event.target.matches("#JimmyWopo")) {
    var dropdowns5 = document.getElementsById("dropdown-content");
    var arrow5 = document.getElementsByClassName("Jimarrow")[0];
    var i;
    for (i = 0; i < dropdowns5.length; i++) {
      var openDropdown5 = dropdowns5[i];
      if (openDropdown5.classList.contains("show")) {
        openDropdown5.classList.remove("show");
        arrow5.classList.remove("up");
      }
    }
  }
};

//DROPDOWN ZA ALBUM
function GAGR() {
  var JWdropdown1 = document.getElementById("G&GRdrop");
  if (JWdropdown1.style.display === "block") {
    JWdropdown1.style.display = "none";
  } else {
    JWdropdown1.style.display = "block";
  }
}



function DRFL() {
  var JWdropdown2 = document.getElementById("DRFLdrop");
  if (JWdropdown2.style.display === "block") {
    JWdropdown2.style.display = "none";
  } else {
    JWdropdown2.style.display = "block";
  }
}

function LND() {

    var dropdown = document.getElementById("LNDdrop");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  
}

function FD() {
  var dropdown = document.getElementById("FDdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function Seven() {
  var dropdown = document.getElementById("drop17");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function BV() {
  var dropdown = document.getElementById("BVdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function Q() {
  var dropdown = document.getElementById("Qdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function S() {
  var dropdown = document.getElementById("Sdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function HB() {
  var dropdown = document.getElementById("HBdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function CB() {
  var dropdown = document.getElementById("CBdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function EE() {
  var dropdown = document.getElementById("EEdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function LF() {
  var dropdown = document.getElementById("LFdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function MTW() {
  var dropdown = document.getElementById("MTWdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function MTW2() {
  var dropdown = document.getElementById("MTW2drop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function SFTSAFTM() {
  var dropdown = document.getElementById("SFTSAFTMdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function F() {
  var dropdown = document.getElementById("Fdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function GB() {
  var dropdown = document.getElementById("GBdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function ADIB() {
  var dropdown = document.getElementById("ADIBdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function C() {
  var dropdown = document.getElementById("Cdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function T() {
  var dropdown = document.getElementById("Tdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function JK() {
  var dropdown = document.getElementById("JKdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function BATW() {
  var dropdown = document.getElementById("BATWdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function ML() {
  var dropdown = document.getElementById("MLdrop");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function alerts(){
  alert("Sorry but I don't care.");
}
document.getElementsByClassName('player')[ 0 ].volume = 0.2;
document.getElementsByClassName('player')[ 1 ].volume = 0.2;
document.getElementsByClassName('player')[ 2 ].volume = 0.2;
document.getElementsByClassName('player')[ 3 ].volume = 0.2;
document.getElementsByClassName('player')[ 4 ].volume = 0.2;
document.getElementsByClassName('player')[ 5 ].volume = 0.2;
document.getElementsByClassName('player')[ 6 ].volume = 0.2;
document.getElementsByClassName('player')[ 7 ].volume = 0.2;
document.getElementsByClassName('player')[ 8 ].volume = 0.2;
document.getElementsByClassName('player')[ 9 ].volume = 0.2;
document.getElementsByClassName('player')[ 10 ].volume = 0.2;
document.getElementsByClassName('player')[ 11 ].volume = 0.2;
document.getElementsByClassName('player')[ 12 ].volume = 0.2;
document.getElementsByClassName('player')[ 13 ].volume = 0.2;
document.getElementsByClassName('player')[ 14 ].volume = 0.2;
document.getElementsByClassName('player')[ 15 ].volume = 0.2;
document.getElementsByClassName('player')[ 16 ].volume = 0.2;
document.getElementsByClassName('player')[ 17 ].volume = 0.2;
document.getElementsByClassName('player')[ 18 ].volume = 0.2;
document.getElementsByClassName('player')[ 19 ].volume = 0.2;
document.getElementsByClassName('player')[ 20 ].volume = 0.2;
document.getElementsByClassName('player')[ 21 ].volume = 0.2;
document.getElementsByClassName('player')[ 22 ].volume = 0.2;
document.getElementsByClassName('player')[ 23 ].volume = 0.2;
document.getElementsByClassName('player')[ 24 ].volume = 0.2;
document.getElementsByClassName('player')[ 25 ].volume = 0.2;
document.getElementsByClassName('player')[ 26 ].volume = 0.2;
document.getElementsByClassName('player')[ 27 ].volume = 0.2;
document.getElementsByClassName('player')[ 28 ].volume = 0.2;
document.getElementsByClassName('player')[ 29 ].volume = 0.2;
document.getElementsByClassName('player')[ 30 ].volume = 0.2;
document.getElementsByClassName('player')[ 31 ].volume = 0.2;
document.getElementsByClassName('player')[ 32 ].volume = 0.2;
document.getElementsByClassName('player')[ 33 ].volume = 0.2;
document.getElementsByClassName('player')[ 34 ].volume = 0.2;
document.getElementsByClassName('player')[ 35 ].volume = 0.2;
document.getElementsByClassName('player')[ 36 ].volume = 0.2;
document.getElementsByClassName('player')[ 37 ].volume = 0.2;
document.getElementsByClassName('player')[ 38 ].volume = 0.2;
document.getElementsByClassName('player')[ 39 ].volume = 0.2;
document.getElementsByClassName('player')[ 40 ].volume = 0.2;
document.getElementsByClassName('player')[ 41 ].volume = 0.2;
document.getElementsByClassName('player')[ 42 ].volume = 0.2;
document.getElementsByClassName('player')[ 43 ].volume = 0.2;
document.getElementsByClassName('player')[ 44 ].volume = 0.2;
document.getElementsByClassName('player')[ 45 ].volume = 0.2;
document.getElementsByClassName('player')[ 46 ].volume = 0.2;
document.getElementsByClassName('player')[ 47 ].volume = 0.2;
document.getElementsByClassName('player')[ 48 ].volume = 0.2;
document.getElementsByClassName('player')[ 49 ].volume = 0.2;
document.getElementsByClassName('player')[ 50 ].volume = 0.2;
document.getElementsByClassName('player')[ 51 ].volume = 0.2;
document.getElementsByClassName('player')[ 52 ].volume = 0.2;
document.getElementsByClassName('player')[ 53 ].volume = 0.2;
document.getElementsByClassName('player')[ 54 ].volume = 0.2;
document.getElementsByClassName('player')[ 55 ].volume = 0.2;
document.getElementsByClassName('player')[ 56 ].volume = 0.2;
document.getElementsByClassName('player')[ 57 ].volume = 0.2;
document.getElementsByClassName('player')[ 58 ].volume = 0.2;
document.getElementsByClassName('player')[ 59 ].volume = 0.2;
document.getElementsByClassName('player')[ 60 ].volume = 0.2;
document.getElementsByClassName('player')[ 61 ].volume = 0.2;
document.getElementsByClassName('player')[ 62 ].volume = 0.2;
document.getElementsByClassName('player')[ 63 ].volume = 0.2;
document.getElementsByClassName('player')[ 64 ].volume = 0.2;
document.getElementsByClassName('player')[ 65 ].volume = 0.2;
document.getElementsByClassName('player')[ 66 ].volume = 0.2;
document.getElementsByClassName('player')[ 67 ].volume = 0.2;
document.getElementsByClassName('player')[ 68 ].volume = 0.2;
document.getElementsByClassName('player')[ 69 ].volume = 0.2;
document.getElementsByClassName('player')[ 70 ].volume = 0.2;
document.getElementsByClassName('player')[ 71 ].volume = 0.2;
document.getElementsByClassName('player')[ 72 ].volume = 0.2;
document.getElementsByClassName('player')[ 73 ].volume = 0.2;
document.getElementsByClassName('player')[ 74 ].volume = 0.2;
document.getElementsByClassName('player')[ 75 ].volume = 0.2;
document.getElementsByClassName('player')[ 76 ].volume = 0.2;
document.getElementsByClassName('player')[ 77 ].volume = 0.2;
document.getElementsByClassName('player')[ 78 ].volume = 0.2;
document.getElementsByClassName('player')[ 79 ].volume = 0.2;
document.getElementsByClassName('player')[ 80 ].volume = 0.2;
document.getElementsByClassName('player')[ 81 ].volume = 0.2;
document.getElementsByClassName('player')[ 82 ].volume = 0.2;
document.getElementsByClassName('player')[ 83 ].volume = 0.2;
document.getElementsByClassName('player')[ 84 ].volume = 0.2;
document.getElementsByClassName('player')[ 85 ].volume = 0.2;
document.getElementsByClassName('player')[ 86 ].volume = 0.2;
document.getElementsByClassName('player')[ 87 ].volume = 0.2;
document.getElementsByClassName('player')[ 88 ].volume = 0.2;
document.getElementsByClassName('player')[ 89 ].volume = 0.2;
document.getElementsByClassName('player')[ 90 ].volume = 0.2;
document.getElementsByClassName('player')[ 91 ].volume = 0.2;
document.getElementsByClassName('player')[ 92 ].volume = 0.2;
document.getElementsByClassName('player')[ 93 ].volume = 0.2;
document.getElementsByClassName('player')[ 94 ].volume = 0.2;
document.getElementsByClassName('player')[ 95 ].volume = 0.2;
document.getElementsByClassName('player')[ 96 ].volume = 0.2;
document.getElementsByClassName('player')[ 97 ].volume = 0.2;
document.getElementsByClassName('player')[ 98 ].volume = 0.2;
document.getElementsByClassName('player')[ 99 ].volume = 0.2;
document.getElementsByClassName('player')[ 100 ].volume = 0.2;
document.getElementsByClassName('player')[ 101 ].volume = 0.2;
document.getElementsByClassName('player')[ 102 ].volume = 0.2;
document.getElementsByClassName('player')[ 103 ].volume = 0.2;
document.getElementsByClassName('player')[ 104 ].volume = 0.2;
document.getElementsByClassName('player')[ 105 ].volume = 0.2;
document.getElementsByClassName('player')[ 106 ].volume = 0.2;
document.getElementsByClassName('player')[ 107 ].volume = 0.2;
document.getElementsByClassName('player')[ 108 ].volume = 0.2;
document.getElementsByClassName('player')[ 109 ].volume = 0.2;
document.getElementsByClassName('player')[ 110 ].volume = 0.2;
document.getElementsByClassName('player')[ 111 ].volume = 0.2;
document.getElementsByClassName('player')[ 112 ].volume = 0.2;
document.getElementsByClassName('player')[ 113 ].volume = 0.2;
document.getElementsByClassName('player')[ 114 ].volume = 0.2;
document.getElementsByClassName('player')[ 115 ].volume = 0.2;
document.getElementsByClassName('player')[ 116 ].volume = 0.2;
document.getElementsByClassName('player')[ 117 ].volume = 0.2;
document.getElementsByClassName('player')[ 118 ].volume = 0.2;
document.getElementsByClassName('player')[ 119 ].volume = 0.2;
document.getElementsByClassName('player')[ 120 ].volume = 0.2;
document.getElementsByClassName('player')[ 121 ].volume = 0.2;
document.getElementsByClassName('player')[ 122 ].volume = 0.2;
document.getElementsByClassName('player')[ 123 ].volume = 0.2;
document.getElementsByClassName('player')[ 124 ].volume = 0.2;
document.getElementsByClassName('player')[ 125 ].volume = 0.2;
document.getElementsByClassName('player')[ 126 ].volume = 0.2;
document.getElementsByClassName('player')[ 127 ].volume = 0.2;
document.getElementsByClassName('player')[ 128 ].volume = 0.2;
document.getElementsByClassName('player')[ 129 ].volume = 0.2;
document.getElementsByClassName('player')[ 130 ].volume = 0.2;
document.getElementsByClassName('player')[ 131 ].volume = 0.2;
document.getElementsByClassName('player')[ 132 ].volume = 0.2;
document.getElementsByClassName('player')[ 133 ].volume = 0.2;
document.getElementsByClassName('player')[ 134 ].volume = 0.2;
document.getElementsByClassName('player')[ 135 ].volume = 0.2;
document.getElementsByClassName('player')[ 136 ].volume = 0.2;
document.getElementsByClassName('player')[ 137 ].volume = 0.2;
document.getElementsByClassName('player')[ 138 ].volume = 0.2;
document.getElementsByClassName('player')[ 139 ].volume = 0.2;
document.getElementsByClassName('player')[ 140 ].volume = 0.2;
document.getElementsByClassName('player')[ 141 ].volume = 0.2;
document.getElementsByClassName('player')[ 142 ].volume = 0.2;
document.getElementsByClassName('player')[ 143 ].volume = 0.2;
document.getElementsByClassName('player')[ 144 ].volume = 0.2;
document.getElementsByClassName('player')[ 145 ].volume = 0.2;
document.getElementsByClassName('player')[ 146 ].volume = 0.2;
document.getElementsByClassName('player')[ 147 ].volume = 0.2;
document.getElementsByClassName('player')[ 148 ].volume = 0.2;
document.getElementsByClassName('player')[ 149 ].volume = 0.2;
document.getElementsByClassName('player')[ 150 ].volume = 0.2;
document.getElementsByClassName('player')[ 151 ].volume = 0.2;
document.getElementsByClassName('player')[ 152 ].volume = 0.2;
document.getElementsByClassName('player')[ 153 ].volume = 0.2;
document.getElementsByClassName('player')[ 154 ].volume = 0.2;
document.getElementsByClassName('player')[ 155 ].volume = 0.2;
document.getElementsByClassName('player')[ 156 ].volume = 0.2;
document.getElementsByClassName('player')[ 157 ].volume = 0.2;
document.getElementsByClassName('player')[ 158 ].volume = 0.2;
document.getElementsByClassName('player')[ 159 ].volume = 0.2;
document.getElementsByClassName('player')[ 160 ].volume = 0.2;
document.getElementsByClassName('player')[ 161 ].volume = 0.2;
document.getElementsByClassName('player')[ 162 ].volume = 0.2;
document.getElementsByClassName('player')[ 163 ].volume = 0.2;
document.getElementsByClassName('player')[ 164 ].volume = 0.2;
document.getElementsByClassName('player')[ 165 ].volume = 0.2;
document.getElementsByClassName('player')[ 166 ].volume = 0.2;
document.getElementsByClassName('player')[ 167 ].volume = 0.2;
document.getElementsByClassName('player')[ 168 ].volume = 0.2;
document.getElementsByClassName('player')[ 169 ].volume = 0.2;
document.getElementsByClassName('player')[ 170 ].volume = 0.2;
document.getElementsByClassName('player')[ 171 ].volume = 0.2;
document.getElementsByClassName('player')[ 172 ].volume = 0.2;
document.getElementsByClassName('player')[ 173 ].volume = 0.2;
document.getElementsByClassName('player')[ 174 ].volume = 0.2;
document.getElementsByClassName('player')[ 175 ].volume = 0.2;
document.getElementsByClassName('player')[ 176 ].volume = 0.2;
document.getElementsByClassName('player')[ 177 ].volume = 0.2;
document.getElementsByClassName('player')[ 178 ].volume = 0.2;
document.getElementsByClassName('player')[ 179 ].volume = 0.2;
document.getElementsByClassName('player')[ 180 ].volume = 0.2;
document.getElementsByClassName('player')[ 181 ].volume = 0.2;
document.getElementsByClassName('player')[ 182 ].volume = 0.2;
document.getElementsByClassName('player')[ 183 ].volume = 0.2;
document.getElementsByClassName('player')[ 184 ].volume = 0.2;
document.getElementsByClassName('player')[ 185 ].volume = 0.2;
document.getElementsByClassName('player')[ 186 ].volume = 0.2;
document.getElementsByClassName('player')[ 187 ].volume = 0.2;
document.getElementsByClassName('player')[ 188 ].volume = 0.2;
document.getElementsByClassName('player')[ 189 ].volume = 0.2;
document.getElementsByClassName('player')[ 190 ].volume = 0.2;
document.getElementsByClassName('player')[ 191 ].volume = 0.2;
document.getElementsByClassName('player')[ 192 ].volume = 0.2;
document.getElementsByClassName('player')[ 193 ].volume = 0.2;
document.getElementsByClassName('player')[ 194 ].volume = 0.2;
document.getElementsByClassName('player')[ 195 ].volume = 0.2;
document.getElementsByClassName('player')[ 196 ].volume = 0.2;
document.getElementsByClassName('player')[ 197 ].volume = 0.2;
document.getElementsByClassName('player')[ 198 ].volume = 0.2;
document.getElementsByClassName('player')[ 199 ].volume = 0.2;
document.getElementsByClassName('player')[ 200 ].volume = 0.2;
document.getElementsByClassName('player')[ 201 ].volume = 0.2;
document.getElementsByClassName('player')[ 202 ].volume = 0.2;
document.getElementsByClassName('player')[ 203 ].volume = 0.2;
document.getElementsByClassName('player')[ 204 ].volume = 0.2;
document.getElementsByClassName('player')[ 205 ].volume = 0.2;
document.getElementsByClassName('player')[ 206 ].volume = 0.2;
document.getElementsByClassName('player')[ 207 ].volume = 0.2;
document.getElementsByClassName('player')[ 208 ].volume = 0.2;
document.getElementsByClassName('player')[ 209 ].volume = 0.2;
document.getElementsByClassName('player')[ 210 ].volume = 0.2;
document.getElementsByClassName('player')[ 211 ].volume = 0.2;
document.getElementsByClassName('player')[ 212 ].volume = 0.2;
document.getElementsByClassName('player')[ 213 ].volume = 0.2;
document.getElementsByClassName('player')[ 214 ].volume = 0.2;
document.getElementsByClassName('player')[ 215 ].volume = 0.2;
document.getElementsByClassName('player')[ 216 ].volume = 0.2;
document.getElementsByClassName('player')[ 217 ].volume = 0.2;
document.getElementsByClassName('player')[ 218 ].volume = 0.2;
document.getElementsByClassName('player')[ 219 ].volume = 0.2;
document.getElementsByClassName('player')[ 220 ].volume = 0.2;
document.getElementsByClassName('player')[ 221 ].volume = 0.2;
document.getElementsByClassName('player')[ 222 ].volume = 0.2;
document.getElementsByClassName('player')[ 223 ].volume = 0.2;
document.getElementsByClassName('player')[ 224 ].volume = 0.2;
document.getElementsByClassName('player')[ 225 ].volume = 0.2;
document.getElementsByClassName('player')[ 226 ].volume = 0.2;
document.getElementsByClassName('player')[ 227 ].volume = 0.2;
document.getElementsByClassName('player')[ 228 ].volume = 0.2;
document.getElementsByClassName('player')[ 229 ].volume = 0.2;
document.getElementsByClassName('player')[ 230 ].volume = 0.2;
document.getElementsByClassName('player')[ 231 ].volume = 0.2;
document.getElementsByClassName('player')[ 232 ].volume = 0.2;
document.getElementsByClassName('player')[ 233 ].volume = 0.2;
document.getElementsByClassName('player')[ 234 ].volume = 0.2;
document.getElementsByClassName('player')[ 235 ].volume = 0.2;
document.getElementsByClassName('player')[ 236 ].volume = 0.2;
document.getElementsByClassName('player')[ 237 ].volume = 0.2;
document.getElementsByClassName('player')[ 238 ].volume = 0.2;
document.getElementsByClassName('player')[ 239 ].volume = 0.2;
document.getElementsByClassName('player')[ 240 ].volume = 0.2;
document.getElementsByClassName('player')[ 241 ].volume = 0.2;
document.getElementsByClassName('player')[ 242 ].volume = 0.2;
document.getElementsByClassName('player')[ 243 ].volume = 0.2;
document.getElementsByClassName('player')[ 244 ].volume = 0.2;
document.getElementsByClassName('player')[ 245 ].volume = 0.2;
document.getElementsByClassName('player')[ 246 ].volume = 0.2;
document.getElementsByClassName('player')[ 247 ].volume = 0.2;
document.getElementsByClassName('player')[ 248 ].volume = 0.2;
document.getElementsByClassName('player')[ 249 ].volume = 0.2;
document.getElementsByClassName('player')[ 250 ].volume = 0.2;
document.getElementsByClassName('player')[ 251 ].volume = 0.2;
document.getElementsByClassName('player')[ 252 ].volume = 0.2;
document.getElementsByClassName('player')[ 253 ].volume = 0.2;
document.getElementsByClassName('player')[ 254 ].volume = 0.2;
document.getElementsByClassName('player')[ 255 ].volume = 0.2;
document.getElementsByClassName('player')[ 256 ].volume = 0.2;
document.getElementsByClassName('player')[ 257 ].volume = 0.2;
document.getElementsByClassName('player')[ 258 ].volume = 0.2;
document.getElementsByClassName('player')[ 259 ].volume = 0.2;
document.getElementsByClassName('player')[ 260 ].volume = 0.2;
document.getElementsByClassName('player')[ 261 ].volume = 0.2;
document.getElementsByClassName('player')[ 262 ].volume = 0.2;
document.getElementsByClassName('player')[ 263 ].volume = 0.2;
document.getElementsByClassName('player')[ 264 ].volume = 0.2;
document.getElementsByClassName('player')[ 265 ].volume = 0.2;
document.getElementsByClassName('player')[ 266 ].volume = 0.2;
document.getElementsByClassName('player')[ 267 ].volume = 0.2;
document.getElementsByClassName('player')[ 268 ].volume = 0.2;
document.getElementsByClassName('player')[ 269 ].volume = 0.2;
document.getElementsByClassName('player')[ 270 ].volume = 0.2;
document.getElementsByClassName('player')[ 271 ].volume = 0.2;
document.getElementsByClassName('player')[ 272 ].volume = 0.2;
document.getElementsByClassName('player')[ 273 ].volume = 0.2;
document.getElementsByClassName('player')[ 274 ].volume = 0.2;
document.getElementsByClassName('player')[ 275 ].volume = 0.2;
document.getElementsByClassName('player')[ 276 ].volume = 0.2;
document.getElementsByClassName('player')[ 277 ].volume = 0.2;
document.getElementsByClassName('player')[ 278 ].volume = 0.2;
document.getElementsByClassName('player')[ 279 ].volume = 0.2;
document.getElementsByClassName('player')[ 280 ].volume = 0.2;
document.getElementsByClassName('player')[ 281 ].volume = 0.2;
document.getElementsByClassName('player')[ 282 ].volume = 0.2;
document.getElementsByClassName('player')[ 283 ].volume = 0.2;
document.getElementsByClassName('player')[ 284 ].volume = 0.2;
document.getElementsByClassName('player')[ 285 ].volume = 0.2;
document.getElementsByClassName('player')[ 286 ].volume = 0.2;
document.getElementsByClassName('player')[ 287 ].volume = 0.2;
document.getElementsByClassName('player')[ 288 ].volume = 0.2;
document.getElementsByClassName('player')[ 289 ].volume = 0.2;
document.getElementsByClassName('player')[ 290 ].volume = 0.2;
document.getElementsByClassName('player')[ 291 ].volume = 0.2;
document.getElementsByClassName('player')[ 292 ].volume = 0.2;
document.getElementsByClassName('player')[ 293 ].volume = 0.2;
document.getElementsByClassName('player')[ 294 ].volume = 0.2;
document.getElementsByClassName('player')[ 295 ].volume = 0.2;
document.getElementsByClassName('player')[ 296 ].volume = 0.2;
document.getElementsByClassName('player')[ 297 ].volume = 0.2;
document.getElementsByClassName('player')[ 298 ].volume = 0.2;
document.getElementsByClassName('player')[ 299 ].volume = 0.2;
document.getElementsByClassName('player')[ 300 ].volume = 0.2;
document.getElementsByClassName('player')[ 301 ].volume = 0.2;
document.getElementsByClassName('player')[ 302 ].volume = 0.2;
document.getElementsByClassName('player')[ 303 ].volume = 0.2;
document.getElementsByClassName('player')[ 304 ].volume = 0.2;
document.getElementsByClassName('player')[ 305 ].volume = 0.2;
document.getElementsByClassName('player')[ 306 ].volume = 0.2;
document.getElementsByClassName('player')[ 307 ].volume = 0.2;
document.getElementsByClassName('player')[ 308 ].volume = 0.2;
document.getElementsByClassName('player')[ 309 ].volume = 0.2;
document.getElementsByClassName('player')[ 310 ].volume = 0.2;
document.getElementsByClassName('player')[ 311 ].volume = 0.2;
document.getElementsByClassName('player')[ 312 ].volume = 0.2;
document.getElementsByClassName('player')[ 313 ].volume = 0.2;
document.getElementsByClassName('player')[ 314 ].volume = 0.2;
document.getElementsByClassName('player')[ 315 ].volume = 0.2;
document.getElementsByClassName('player')[ 316 ].volume = 0.2;
document.getElementsByClassName('player')[ 317 ].volume = 0.2;
document.getElementsByClassName('player')[ 318 ].volume = 0.2;
document.getElementsByClassName('player')[ 319 ].volume = 0.2;
document.getElementsByClassName('player')[ 320 ].volume = 0.2;
document.getElementsByClassName('player')[ 321 ].volume = 0.2;
document.getElementsByClassName('player')[ 322 ].volume = 0.2;
document.getElementsByClassName('player')[ 323 ].volume = 0.2;
document.getElementsByClassName('player')[ 324 ].volume = 0.2;
document.getElementsByClassName('player')[ 325 ].volume = 0.2;
document.getElementsByClassName('player')[ 326 ].volume = 0.2;
document.getElementsByClassName('player')[ 327 ].volume = 0.2;
document.getElementsByClassName('player')[ 328 ].volume = 0.2;
document.getElementsByClassName('player')[ 329 ].volume = 0.2;
document.getElementsByClassName('player')[ 330 ].volume = 0.2;
document.getElementsByClassName('player')[ 331 ].volume = 0.2;
document.getElementsByClassName('player')[ 332 ].volume = 0.2;
document.getElementsByClassName('player')[ 333 ].volume = 0.2;
document.getElementsByClassName('player')[ 334 ].volume = 0.2;
document.getElementsByClassName('player')[ 335 ].volume = 0.2;
document.getElementsByClassName('player')[ 336 ].volume = 0.2;
document.getElementsByClassName('player')[ 337 ].volume = 0.2;
document.getElementsByClassName('player')[ 338 ].volume = 0.2;
document.getElementsByClassName('player')[ 339 ].volume = 0.2;
document.getElementsByClassName('player')[ 340 ].volume = 0.2;
document.getElementsByClassName('player')[ 341 ].volume = 0.2;
document.getElementsByClassName('player')[ 342 ].volume = 0.2;
document.getElementsByClassName('player')[ 343 ].volume = 0.2;
document.getElementsByClassName('player')[ 344 ].volume = 0.2;
document.getElementsByClassName('player')[ 345 ].volume = 0.2;
document.getElementsByClassName('player')[ 346 ].volume = 0.2;
document.getElementsByClassName('player')[ 347 ].volume = 0.2;
document.getElementsByClassName('player')[ 348 ].volume = 0.2;
document.getElementsByClassName('player')[ 349 ].volume = 0.2;
document.getElementsByClassName('player')[ 350 ].volume = 0.2;
document.getElementsByClassName('player')[ 351 ].volume = 0.2;
