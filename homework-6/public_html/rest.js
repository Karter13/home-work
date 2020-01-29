
'use strct';

const SERVER_API = 'http://localhost:3006';
const RESURS = 'cars';

function RestServer(serverApi, name, func1, func2) {
  this.serverApi = serverApi;
  this.name = name;
  this.funcGet = func1;
  this.funcPost = func2;
}

RestServer.prototype.addData = function () {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${this.serverApi}/${this.name}`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(this.funcPost()));

  xhr.onload = () => {
    if (xhr.status === 201) {
      console.log('Data was added');
    }
  };
};

RestServer.prototype.getData = function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${this.serverApi}/${this.name}`);
  xhr.send();
  xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.status === 200) {
      this.funcGet(xhr.response);
    }
  };
};

RestServer.prototype.deleteData = function (id) {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `${this.serverApi}/${this.name}/${id}`);
  xhr.send();

  xhr.onload = () => {
    console.log(xhr.response);
  };
};

RestServer.prototype.changeData = function (id) {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `${this.serverApi}/${this.name}/${id}`);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(this.funcPost()));

  xhr.onload = () => {
    console.log(xhr.response);
  };
};

const getDataFromForm = () => {
  const car = document.getElementById('car').value;
  const model = document.getElementById('model').value;
  const description = document.getElementById('description').value;

  return { car, model, description };
};

const renderResponse = (response) => {
  response.forEach((car) => {
    const div = document.createElement('div');
    const template = `<h3>${car.car}</h3>
                      <p>${car.model}</p>
                      <span>${car.description}</span><br>
                      <a onclick="restServer.changeData(${car.id})">Change car</a>
                      <a onclick="restServer.deleteData(${car.id})">Delete car</a>`;
    div.innerHTML = template;
    document.querySelector('body').append(div);
  });
};


const restServer = new RestServer(SERVER_API, RESURS, renderResponse, getDataFromForm);


const eventListener = () => {
  const sendButton = document.getElementById('send-data');
  const getButton = document.getElementById('get-data');

  sendButton.addEventListener('click', () => {
    restServer.addData();
  });

  getButton.addEventListener('click', () => {
    restServer.getData();
  });
};
eventListener(restServer);
