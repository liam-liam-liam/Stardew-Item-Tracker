// Return a random integer from 0 to 23 (both included):
num = Math.floor(Math.random() * 24);

imageName ="frame_" +  num + "_delay-1.2s.png"
console.log(imageName)

document.getElementById("backgroundImage").style.backgroundImage = "url('assets/backgroundImages/" + imageName + "')"