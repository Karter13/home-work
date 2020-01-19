
'use strct';

const SERVER_API = 'http://localhost:3006';

function RestServer(serverApi) {
  this.serverApi = serverApi;
  this.name = 'cars';
  this.car = document.getElementById('car');
  this.model = document.getElementById('model');
  this.description = document.getElementById('description');
  this.sendButton = document.getElementById('send-data');
  this.getButton = document.getElementById('get-data');
}

RestServer.prototype.getDataFromForm = function () {
  const car = this.car.value;
  const model = this.model.value;
  const description = this.description.value;

  return { car, model, description };
};

RestServer.prototype.addData = function () {
  const data = this.getDataFromForm();

  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${this.serverApi}/${this.name}`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));

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
      this.renderResponse(xhr.response);
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
  const data = this.getDataFromForm();

  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `${this.serverApi}/${this.name}/${id}`);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(data));

  xhr.onload = () => {
    console.log(xhr.response);
  };
};

RestServer.prototype.renderResponse = function (response) {
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


const restServer = new RestServer(SERVER_API);


function eventListener(reServer) {
  const server = reServer;

  server.sendButton.addEventListener('click', () => {
    restServer.addData();
  });

  server.getButton.addEventListener('click', () => {
    restServer.getData();
  });
}
eventListener(restServer);
