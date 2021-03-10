const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const finalScoreMsg = document.getElementById("finalScoremsg");

const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 10;
if(mostRecentScore<8){
finalScoreMsg.innerHTML = "Unfortunately you did not pass the test. Please try again later!";}
else{
    finalScoreMsg.innerHTML ="You have successfully passed the test. You are now certified in Makeup general quiz.";
}

finalScore.innerText = "You Have Scored:  "+ mostRecentScore+"/10";

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 10),
    name: username.value
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};
