

let triviaBtn = document.querySelector("#js-new-quote").
addEventListener('click', newNews);

let favoriteBtn1 = document.querySelector("#favoritebutton1").
addEventListener('click', () => fav(0));
let favoriteBtn2 = document.querySelector("#favoritebutton2").
addEventListener('click', () => fav(1));
let favoriteBtn3 = document.querySelector("#favoritebutton3").
addEventListener('click', () => fav(2));
let favoriteBtn4 = document.querySelector("#favoritebutton4").
addEventListener('click', () => fav(3));
let favoriteBtn5 = document.querySelector("#favoritebutton5").
addEventListener('click', () => fav(4));
let favoriteBtn6 = document.querySelector("#favoritebutton6").
addEventListener('click', () => fav(5));
let favoriteBtn7 = document.querySelector("#favoritebutton7").
addEventListener('click', () => fav(6));
let favoriteBtn8 = document.querySelector("#favoritebutton8").
addEventListener('click', () => fav(7));
let favoriteBtn9 = document.querySelector("#favoritebutton9").
addEventListener('click', () => fav(8));
let favoriteBtn10 = document.querySelector("#favoritebutton10").
addEventListener('click', () => fav(9));

let remBtn1 = document.querySelector("#removebutton1").
addEventListener('click', () => rem(0));
let remBtn2 = document.querySelector("#removebutton2").
addEventListener('click', () => rem(1));
let remBtn3 = document.querySelector("#removebutton3").
addEventListener('click', () => rem(2));
let remBtn4 = document.querySelector("#removebutton4").
addEventListener('click', () => rem(3));
let remBtn5 = document.querySelector("#removebutton5").
addEventListener('click', () => rem(4));
let remBtn6 = document.querySelector("#removebutton6").
addEventListener('click', () => rem(5));
let remBtn7 = document.querySelector("#removebutton7").
addEventListener('click', () => rem(6));
let remBtn8 = document.querySelector("#removebutton8").
addEventListener('click', () => rem(7));
let remBtn9 = document.querySelector("#removebutton9").
addEventListener('click', () => rem(8));
let remBtn10 = document.querySelector("#removebutton10").
addEventListener('click', () => rem(9));

let index = 0;

let current = new Array(10);


async function newNews() {
  try {
    const response = await fetch("http://localhost:3000/api/news");
    const json = await response.json();

    //console.log(json.results[index].title);

    const newsTitle1 = document.querySelector('#news-title1');
    const newsTitle2 = document.querySelector('#news-title2');
    const newsTitle3 = document.querySelector('#news-title3');
    const newsTitle4 = document.querySelector('#news-title4');
    const newsTitle5 = document.querySelector('#news-title5');
    const newsTitle6 = document.querySelector('#news-title6');
    const newsTitle7 = document.querySelector('#news-title7');
    const newsTitle8 = document.querySelector('#news-title8');
    const newsTitle9 = document.querySelector('#news-title9');
    const newsTitle10 = document.querySelector('#news-title10');
    
    newsTitle1.textContent = json.results[0].title;
    newsTitle2.textContent = json.results[1].title;
    newsTitle3.textContent = json.results[2].title;
    newsTitle4.textContent = json.results[3].title;
    newsTitle5.textContent = json.results[4].title;
    newsTitle6.textContent = json.results[5].title;
    newsTitle7.textContent = json.results[6].title;
    newsTitle8.textContent = json.results[7].title;
    newsTitle9.textContent = json.results[8].title;
    newsTitle10.textContent = json.results[9].title;

    current[0] = json.results[0];
    current[1] = json.results[1];
    current[2] = json.results[2];
    current[3] = json.results[3];
    current[4] = json.results[4];
    current[5] = json.results[5];
    current[6] = json.results[6];
    current[7] = json.results[7];
    current[8] = json.results[8];
    current[9] = json.results[9];

    console.log(current[0].article_id);
    console.log(current[0].creator);
    
    index += 1;

  } catch (err) {
    console.error("Failed to get news:", err);
  }
}



function fav(index) {
    if (confirm('Add this to your list of favorites?'))
    {
        const key = current[index].article_id;
        const value = current[index].title;
        if (key && value) {
            localStorage.setItem(key, value);
            alert(`Saved to localStorage!\nKey: "${key}"\nValue: "${value}"`);
            viewLocalStorage();
        }
        else{
          console.log("err saving");
        }
    }
}

function viewLocalStorage() {
    const output = document.getElementById('output-info');
    let html = '';
    
    if (localStorage.length === 0) {
        html = '<span class="empty">Nothing to display</span>';
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            html += `<span class="value">${value}</span></div> <br><br>`;
        }
    }
    output.innerHTML = html;
}

function rem(index) {
    if (confirm('Remove from favorites?')) {
        localStorage.removeItem(current[index].article_id);
        viewLocalStorage();
        alert('removed from favorites!');
    }
}

function clearLocalStorage() {
    if (confirm('Clear all localStorage data?')) {
        localStorage.clear();
        viewLocalStorage();
        alert('localStorage cleared!');
    }
}

viewLocalStorage();
newNews();