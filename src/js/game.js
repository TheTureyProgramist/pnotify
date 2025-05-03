const keys = ['0', 's', '!', '%', 'g', '6', 'j', '8', 'l', '1'];
let currentKeyIndex = 0;
const keyElement = document.getElementById('key');
const newGameBtn = document.getElementById('new-game');
function updateKeyDisplay() {
  keyElement.textContent = keys[currentKeyIndex];
}
function newGame() {
  currentKeyIndex = 0;
  updateKeyDisplay();
  info({
    text: `Game started! Tap "${keys[currentKeyIndex]}".`,
    delay: 1000,
  });
}
document.addEventListener('keydown', (event) => {
  const pressed = event.key.toLowerCase();
  if (pressed === keys[currentKeyIndex]) {
    currentKeyIndex++;
    if (currentKeyIndex < keys.length) {
      updateKeyDisplay();
    } else {
      alert({
        text: 'YOU WIN!',
        delay: 2100,
      });
      currentKeyIndex = 0;
    }
  } else {
    error({
      text: `Defeat! Your variant ${pressed}, true variant ${keys[currentKeyIndex]}`,
      delay: 3000,
    });
  }
});
document.addEventListener('keypress', (event) => {
  event.preventDefault();
});
newGameBtn.addEventListener('click', newGame);
newGame();