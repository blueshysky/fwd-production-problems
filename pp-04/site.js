document.addEventListener('DOMContentLoaded', function(){
  var sound = document.querySelector('audio');
  sound.className = 'hide';
});

function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
};
