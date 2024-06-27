/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
};

const numberArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const signs = ["♦", "♥", "♠", "♣"];

function generateSign() {
  let rdms = Math.floor(Math.random() * signs.length);
  let rdms2 = Math.floor(Math.random() * signs.length);
  let rcn = Math.floor(Math.random() * numberArr.length);
  //
  if (rdms === 0 || rdms === 1) {
    let x = document.getElementById("cardSign");
    x.style.color = "red";
    let z = document.getElementById("cardSignI");
    z.style.color = "red";
    let g = document.getElementById("number");
    g.style.color = "red";
  } else {
    let y = document.getElementById("cardSign");
    y.style.color = "black";
    let j = document.getElementById("cardSignI");
    j.style.color = "black";
    let g = document.getElementById("number");
    g.style.color = "black";
  }
  let number = `${numberArr[rcn]}`;
  let sign = `${signs[rdms]}`;
  let sign2 = `${signs[rdms]}`;
  document.getElementById("cardSign").innerHTML = sign;
  document.getElementById("cardSignI").innerHTML = sign2;
  document.getElementById("number").innerHTML = number;
}

document.getElementById("gen").addEventListener("click", generateSign);
