var numberofbuttons = document.querySelectorAll(".drum").length;

somecolors = ["red", "blue", "purple", "lime", "fuchsia", "black"];

for (var i = 0; i < numberofbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninhtml = this.innerHTML;
        makesound(buttoninhtml);
    buttoninaction(buttoninhtml);
})}




        document.addEventListener("keydown", function (event) {
            makesound(event.key);
            buttoninaction(event.key);
        })



        function makesound(key) {
            switch (key) {
                case 'w':
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    document.querySelector("body").style.backgroundColor = somecolors[Math.floor(Math.random() * 6)];
                    break;


                case 'a':
                    var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                    document.querySelector("body").style.backgroundColor = somecolors[Math.floor(Math.random() * 6)];


                    break;
                case 's':
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    document.querySelector("body").style.backgroundColor = somecolors[Math.floor(Math.random() * 6)];
                    break;
                case 'd':
                    var audio = new Audio("sounds/tom-4.mp3");
                    audio.play();
                    document.querySelector("body").style.backgroundColor = somecolors[Math.floor(Math.random() * 6)];
                    break;

                case 'j':
                    var audio = new Audio("sounds/snare.mp3");
                    audio.play();
                    document.querySelector("body").style.backgroundColor = somecolors[Math.floor(Math.random() * 6)];
                    break;

                case 'k':
                    var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                    document.querySelector("body").style.backgroundColor = somecolors[Math.floor(Math.random() * 6)];
                    break;


                case 'l':
                    var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    document.querySelector("body").style.backgroundColor = somecolors[Math.floor(Math.random() * 6)];
                    break;



            }
        }
    function buttoninaction(currentkey){
        var activebutton=document.querySelector("."+currentkey);
        activebutton.classList.add("pressed");
        setTimeout(function()  {
            activebutton.classList.remove("pressed");
        }, 100);

    }