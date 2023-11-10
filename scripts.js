const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
const bbcNewsUrl =`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;
const businessNewsUrl = `https://newsapi.org/v2/top-headlines?category=business&apiKey=${apiKey}`;
const sportsNewsUrl = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${apiKey}`;
const scienceNewsUrl = `https://newsapi.org/v2/top-headlines?category=science&apiKey=${apiKey}`;
const technologyNewsUrl = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        displayNews(data.articles);
        return data.articles;
    }
    catch(error) {
        console.error("There was an error", error);
        return [];
    }
}

async function fetchBbcNews() {
    try {
        document.getElementById('news').innerHTML = '';
        const response = await fetch(bbcNewsUrl);
        const data = await response.json();
        //console.log(data);
        displayNews(data.articles);
        return data.articles;
    }
    catch(error) {
        console.error("There was an error", error);
        return [];
    }
}

async function fetchBusinessNews() {
    try {
        document.getElementById('news').innerHTML = '';
        const response = await fetch(businessNewsUrl);
        const data = await response.json();
        //console.log(data);
        displayNews(data.articles);
        return data.articles;
    }
    catch(error) {
        console.error("There was an error", error);
        return [];
    }
}

async function fetchSportsNews() {
    try {
        document.getElementById('news').innerHTML = '';
        const response = await fetch(sportsNewsUrl);
        const data = await response.json();
        //console.log(data);
        displayNews(data.articles);
        return data.articles;
    }
    catch(error) {
        console.error("There was an error", error);
        return [];
    }
}

async function fetchTechnologyNews() {
    try {
        document.getElementById('news').innerHTML = '';
        const response = await fetch(technologyNewsUrl);
        const data = await response.json();
        //console.log(data);
        displayNews(data.articles);
        return data.articles;
    }
    catch(error) {
        console.error("There was an error", error);
        return [];
    }
}

async function fetchScienceNews() {
    try {
        document.getElementById('news').innerHTML = '';
        const response = await fetch(scienceNewsUrl);
        const data = await response.json();
        //console.log(data);
        displayNews(data.articles);
        return data.articles;
    }
    catch(error) {
        console.error("There was an error", error);
        return [];
    }
}
function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        //console.log(article.title);
        const articleDiv = document.createElement('div');
        const title = document.createElement("h4");
        title.textContent = article.title;
        articleDiv.appendChild(title);
        newsDiv.appendChild(articleDiv);
    }
}

function searchNews() {
    let inputValue = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!inputValue) {
        alert("Nothing Returned")
        return;
    }
    fetchNews().then(articles => {
        document.getElementById('news').innerHTML = '';
        let filteredArticles = articles.filter(article => article.title.toLowerCase().includes(inputValue));
        displayNews(filteredArticles);
        });
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchButton').addEventListener('click', searchNews);
});

document.getElementById('bbcnews').addEventListener('click', function(event) {
    // Prevent the default action of the anchor tag
    event.preventDefault();
     // Call your function here
    fetchBbcNews();
});

document.getElementById('businessnews').addEventListener('click', function(event) {
    // Prevent the default action of the anchor tag
    event.preventDefault();
     // Call your function here
    fetchBusinessNews();
});

document.getElementById('sportsnews').addEventListener('click', function(event) {
    // Prevent the default action of the anchor tag
    event.preventDefault();
     // Call your function here
    fetchSportsNews();
});

document.getElementById('sciencenews').addEventListener('click', function(event) {
    // Prevent the default action of the anchor tag
    event.preventDefault();
     // Call your function here
    fetchScienceNews();
});

document.getElementById('technologynews').addEventListener('click', function(event) {
    // Prevent the default action of the anchor tag
    event.preventDefault();
     // Call your function here
    fetchTechnologyNews();
});
fetchNews();


