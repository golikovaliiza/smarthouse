"use strict";
var TV = {
   name: "Samsung TV",
   currentChannel: "You're watching Animal Planet"
}
var alarm = {
   name: "Security",
   signal: "beep-beep"
}
var facecontrol = {
   name: "Face Control"
}
function createAlarm(alarm) {
      var newAlarm = document.getElementById("alarm");
      newAlarm.style.display = "block";
      console.log(alarm.signal);
}
function createFaceControl(facecontrol) {
      var newFaceControl = document.getElementById("facecontrol");
      newFaceControl.style.display = "block";
      console.log(facecontrol);
      prompt ("Enter your name", "")
} 
function delTV() {
      var cancelTV = document.getElementById("TV");
      cancelTV.style.display = "none";
}
function delAlalrm() {
      var cancelAlarm = document.getElementById("alarm");
      cancelAlarm.style.display = "none";
}
function delFaceControl() {
      var cancelFaceControl = document.getElementById("facecontrol");
      cancelFaceControl.style.display = "none";
}
function createTV(TV) {
      var newTV = document.getElementById("TV");
      newTV.style.display = "block";
      console.log(TV.currentChannel);
}
var x = 1;
function turnOn () {
   console.log("Включено!");
}
function turnOff () {
   console.log("Выключено!");
}
function volumePlus () {
   if (x <= 15) {
   document.getElementById("vol").innerHTML=x++;
   }
}
function volumeMinus () {
   if (x >= 0) {
   document.getElementById("vol").innerHTML=x--;
   } 
}



