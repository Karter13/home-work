import { CONFIG } from "./config";

export class PageRender {
  constructor(router) {
    this.router = router;
  }

  renderHomePage(news) {
    const page = document.querySelector(CONFIG.selectors.homePage);
    const allNews = document.querySelectorAll(CONFIG.selectors.allNews);


    [...allNews].forEach((item) => {
      item.style.display = CONFIG.none;
    });

    [...allNews].forEach((item) => {
      news.forEach((elem) => {
        if (Number(item.dataset.index) === Number(elem.id)) {
          item.style.display = CONFIG.block;
        }
      });
    });
    page.style.display = CONFIG.block;
  }

  initNewsLocation() {
    const news = document.querySelectorAll(CONFIG.selectors.allNews);
    news.forEach((item) => {
      item.addEventListener('click', (event) => {
        const clicked = event.target;
        if (clicked.classList.contains('btn-primary')) {
          const { index } = item.dataset;
          window.history.pushState(null, null, `/articles/${index}`);
          this.router.render(decodeURI(location.pathname));
        }
      });
    });
  }

  getAllNews(data) {
    const allNews = document.querySelector(CONFIG.selectors.news);
    data.forEach((element) => {
      const div = document.createElement('div');
      const template = `<div class="card mb-3 single-card" style="width: 18rem;" data-index="${element.id}">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.description}</p>
          <a class="btn btn-primary">Читать</a>
        </div>
      </div>
    </div>`;
      div.innerHTML = template;
      allNews.append(div);
    });
    this.initNewsLocation();

  }

  initSinglNewsPage() {
    this.singleNewsPage = document.querySelector(CONFIG.selectors.singleNews);
    this.block = this.singleNewsPage.style.display = CONFIG.block;
    this.singleNewsPage.addEventListener('click', (event) => {
      if (this.block) {
        const clicked = event.target;
        if (clicked.classList.contains('btn-primary')) {
          history.pushState(null, null, '/');
          this.router.render(decodeURI(location.pathname));
        }
      }
    });
  }

  render404() {
    window.history.pushState(null, null, '/404');
    this.router.render(decodeURI(location.pathname));
  }

  renderErrorPage() {
    const errorPage = document.querySelector(CONFIG.selectors.errorPage);
    errorPage.style.display = CONFIG.block;
  }

  renderSinglNewsPage(news) {
    const page = document.querySelector(CONFIG.selectors.singleNews);
    const cardBody = document.querySelector(CONFIG.selectors.singlePageContent);
    const index = location.pathname.split('/articles/')[1].trim();
    let isFind = false;
    if (news.length) {
      news.forEach((element) => {
        if (Number(element.id) === Number(index)) {
          isFind = true;
          cardBody.querySelector('.card-title').innerText = element.title;
          cardBody.querySelector('.card-text').innerText = element.content;
        }
      });
    }
    if (isFind) {
      page.style.display = CONFIG.block;
    } else {
      this.render404();
    }
  }

  initSerchPsge() {
    const btnSearch = document.querySelector(CONFIG.selectors.btnSearch);
    btnSearch.addEventListener('click', (event) => {
      event.preventDefault();
      history.pushState(null, null, '/search/');
      this.router.render(decodeURI(location.pathname));
    });
  }

  renderSearchPage(news) {
    const searchInput = document.querySelector(CONFIG.selectors.searchInput);
    const searchPage = document.querySelector(CONFIG.selectors.searchPage);
    const searchCard = document.querySelector(CONFIG.selectors.searchCard);
    searchCard.innerHTML = '';
    let isFind = false;
    const newsSerch = news.filter((item) => item.title.toLowerCase().includes(searchInput.value));
    if (newsSerch.length) {
      isFind = true;
      newsSerch.forEach((element) => {
        const div = document.createElement('div');
        const template = `<div class="card mb-3 single-card" style="width: 18rem;" data-index="${element.id}">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <a class="btn btn-primary">Читать</a>
          </div>
        </div>
      </div>`;
        div.innerHTML = template;
        searchCard.append(div);
      });
    }
    searchInput.value = '';
    if (isFind) {
      searchPage.style.display = CONFIG.block;
      this.initNewsLocation();
    } else {
      this.render404();
    }
  }

  activButonAboutPage() {
    const buttonAboutPage = document.querySelector(CONFIG.selectors.button);
    console.log(buttonAboutPage);
    buttonAboutPage.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, '/');
      this.router.render(decodeURI(location.pathname));
    });
  }

  initAboutPage() {
    const buttonAboutPage = document.querySelector(CONFIG.selectors.btnAboutPage);
    buttonAboutPage.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, '/about/');
      this.router.render(decodeURI(location.pathname));
    });
  }

  renderAboutPage() {
    const aboutPage = document.querySelector(CONFIG.selectors.aboutPage);
    aboutPage.style.display = CONFIG.block;
    this.activButonAboutPage();
  }
}
