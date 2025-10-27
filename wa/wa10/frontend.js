let triviaBtn = document.querySelector("#js-new-quote").
addEventListener('click', newNews);

let index = 0;

let current = {
    title: "",
    answer: ""
};

async function newNews() {
  try {
    const response = await fetch("http://localhost:3000/api/news");
    const json = await response.json();

    console.log(json.results[index].title);

    displayTitle(json.results[index].title)

    index += 1;

  } catch (err) {
    console.error("Failed to get news:", err);
  }
}



function displayTitle(title)
{
    const newsTitle = document.querySelector('#js-news-box');
    newsTitle.textContent = title;
    
}

/*function newAnswer()
{
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = current.answer;
}*/

newNews();