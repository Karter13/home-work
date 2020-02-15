import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import './styles/styles.scss';
import { CONFIG } from './config';
import { PageRender } from './page-render';
import { RouterHistory } from './router';


class App {
  constructor() {
    this.news = [];
    this.router = new RouterHistory();
    this.pageRender = new PageRender(this.router);
    this.init();
  }

  init() {
    fetch(`${CONFIG.api}/articles`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.news = data;
        this.pageRender.getAllNews(data);
        this.pageRender.initSinglNewsPage();
        this.pageRender.initSerchPsge();
        this.pageRender.initAboutPage();
        this.initRouter();
        this.router.render(decodeURI(location.pathname));
      });
  }

  initRouter() {
    this.router.addRouter('', this.pageRender.renderHomePage.bind(this.pageRender, this.news));
    this.router.addRouter('articles',
      this.pageRender.renderSinglNewsPage.bind(this.pageRender, this.news));
    this.router.addRouter('404', this.pageRender.renderErrorPage);
    this.router.addRouter('search', this.pageRender.renderSearchPage.bind(this.pageRender, this.news));
    this.router.addRouter('about', this.pageRender.renderAboutPage.bind(this.pageRender, this.news));
  }

}

const app = new App();