// News Section
const NewsURL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cb6c5bb50e274c499e1c51436e28ff47`;

fetch(NewsURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let NewsWebsite = jsObject.articles;
    console.log(jsObject);

    let today = document.createElement('section');
    today.classList.add('news-box');

    for (let i = 0; i < NewsWebsite.length; i++) {
      let div = document.createElement('div');
      div.classList.add('news-text');
      today.appendChild(div);

      let h2 = document.createElement('h2');
      h2.textContent = NewsWebsite[i].title;
      div.appendChild(h2);

      let author = document.createElement('h3');
      author.textContent = NewsWebsite[i].author;
      div.appendChild(author);

      let a = document.createElement('a');
      a.textContent = NewsWebsite[i].url;
      a.href = NewsWebsite[i].url;
      a.target = '_window';
      div.appendChild(a);

      let img = document.createElement('img');
      img.src = NewsWebsite[i].urlToImage;
      img.classList.add('news-img');
      today.appendChild(img);

      if (5 <= i) {
        div.classList.add('hidden');
        img.classList.add('hidden');
      }

      document.querySelector('div.news-box').appendChild(today);
    }
  });
