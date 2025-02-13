const valantine = document.querySelector(".valantine");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const pic = document.querySelector(".picture");

const valantineRect = valantine.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

// Celebration function
function createCelebration() {
    document.body.classList.add('celebrate');
    
    // Create confetti
    const celebrationDiv = document.createElement('div');
    celebrationDiv.className = 'celebration';
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        celebrationDiv.appendChild(confetti);
    }
    document.body.appendChild(celebrationDiv);
    
    // Create floating hearts
    const heartsDiv = document.createElement('div');
    heartsDiv.className = 'hearts';
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsDiv.appendChild(heart);
    }
    document.body.appendChild(heartsDiv);
}

yesBtn.addEventListener('click', () => {
     question.innerHTML = "I love you. ❤️❤️❤️";
     pic.src = 'cute-bears.webp';
     yesBtn.parentNode.removeChild(yesBtn);
     noBtn.parentNode.removeChild(noBtn);
     createCelebration(); // Trigger celebration
});

noBtn.addEventListener('mouseover', () =>{
  pic.src ='cat_gun.gif';
  question.innerHTML = 'كلزق مب بكيفك';

  const i = Math.floor(Math.random() * (valantineRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (valantineRect.height - noBtnRect.height)) + 1;

  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
});