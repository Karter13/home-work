class DarkSky {
  constructor(render) {
    this.proxy = 'https://cors-anywhere.herokuapp.com/';
    this.api = 'https://api.darksky.net/forecast/3d8590dd8146eaf94eac55c25d4ad305/';
    this.render = render;
  }

  getData(coordinates) {
    fetch(`${this.proxy}${this.api}${coordinates}?lang=ru`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(`data not received status: ${response.status}`);
      })
      .then((data) => this.render(data));
  };
}

const render = (data) => {
  const cardWeather = document.querySelector('.cardweather'); git
  const div = document.createElement('div');
  let template = '';
  console.log(data);
  cardWeather.innerHTML = '';
  template = `<div class="card" style="width: 30rem;">
                        <div class="header">
                          Часовой пояс: ${data.timezone}
                        </div>
                        <ul class="list">
                          <li>Широта:  ${data.latitude}</li>
                          <li>Долгота:  ${data.longitude}</li>
                          <li>Погода:  ${data.currently.summary}</li>
                          <li>Температура:  ${data.currently.temperature}</li>
                          <li>Ветер м/с:  ${data.currently.windSpeed}</li>
                        </ul>
                      </div>`; git
  div.innerHTML = template;
  cardWeather.append(div);
};

const sky = new DarkSky(render);

const btn = document.querySelector('.btn');
const input = document.querySelector('.coordinates');
const msg = document.querySelector('.message');

const handler = () => {
  if (input.value === '') {
    msg.innerHTML = `<div class="alert">
                      Введите долготу и ширину!
                    </div>`;
  } else {
    sky.getData(input.value);
    msg.innerHTML = '';
    input.value = '';
  }
};

btn.addEventListener('click', handler);