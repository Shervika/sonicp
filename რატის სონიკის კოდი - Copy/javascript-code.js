
const usernameInput = document.getElementById('username');
const playButton = document.getElementById('ghilaki');
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");
    const scoreDisplay = document.getElementById('score');
const submitButton = document.getElementById('submitButton');
    let score = 0

    function jump() {
      if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
          dino.classList.remove("jump");
        }, 300);
      }
    }

    let isAlive = setInterval(function () {
      
      let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

      
      let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
      );

      
      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
       
        alert(`Game Over! Your Score: ${score}`);
        score = 0; 
        scoreDisplay.textContent = score;
        open("index1.html");
      } else if (cactusLeft <= 0) {
        
        updateScore();
      }
    }, 10);

    document.addEventListener("keydown", function (event) {
      jump();
    });

    function updateScore() {
      score += 5; 
      scoreDisplay.textContent = `Score: ${score}`;
    }
    document.addEventListener('DOMContentLoaded', function () {
      
      var usernameInput = document.getElementById('username');
      var submitButton = document.getElementById('submitButton');
      var playButton = document.getElementById('tamashi');
  
     
      usernameInput.addEventListener('input', function () {
          
          submitButton.disabled = usernameInput.value.trim() === '';
      });
  
      
      document.getElementById('registrationForm').addEventListener('submit', function (event) {
          event.preventDefault();
          
      });
  
      
      playButton.addEventListener('click', function (event) {
          if (submitButton.disabled) {
              event.preventDefault();
              alert('Please enter your name and submit the form before playing.');
          }
          
      });
  });
  
  

    