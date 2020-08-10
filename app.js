const randomize = document.querySelector(".randomize");

function result() {
  const customName = document.getElementById("customname");
  const story = document.querySelector(".story");
  const us = document.getElementById("us");
  const uk = document.getElementById("uk");
  function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  const inserX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

  const inserY = ["the soup kitchen", "Disneyland", "the White House"];

  const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
  ];

  let xItem = randomValueFromArray(inserX);
  let yItem = randomValueFromArray(inserY);
  let zItem = randomValueFromArray(insertZ);
  let bob = "bob";
  let weightNew = "300 punds";
  let temp = "94 fahrenheit";
  if (customName.value !== "") {
    let name = customName.value;
    bob = name;
  }

  if (uk.checked) {
    let weight = Math.round(300 / 14) + " stones";
    weightNew = weight;
    let temperature = Math.round(((94 - 32) * 5) / 9) + " celcious";
    temp = temperature;
  } else us.checked;
  let storyText = `It was ${temp} outside, so ${xItem} went for a walk. 
     When they got to ${yItem}, they stared in horror for a few moments, 
     then ${zItem}. ${bob} saw the whole thing, but was not surprised — 
     ${xItem} weighs ${weightNew}, and it was a hot day.`;

  let newStory = storyText;
  story.textContent = newStory;
  story.style.visibility = "visible";
  console.log(newStory);
}

randomize.addEventListener("click", result);
