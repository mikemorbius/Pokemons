// var elForm = document.querySelector('.js-form');
// var elInput = document.querySelector('.js-input');
// var elRecord = document.querySelector('.js-record');
// var elList = document.querySelector('.js-list');
// var elSpinner = document.querySelector('.js-spinner');
// var todos = [];

// elForm.addEventListener('submit', function (evt) {
// 	evt.preventDefault();
// 	elList.innerHTML = '';

// 	var obj = {
// 		id: todos.length + 1,
// 		text: elInput.value,
// 	};

// 	todos.push(obj);

// 	for (todo of todos) {
// 		var newItem = document.createElement('li');
// 		newItem.textContent = `${todo.id}. ${todo.text}`;
// 		newItem.setAttribute('class', 'list-group-item');

// 		elList.appendChild(newItem);
// 	}

// 	elInput.value = '';
// });

// var voice = new webkitSpeechRecognition();

// voice.lang = 'uz-UZ';

// elRecord.addEventListener('click', function () {
// 	voice.start();
// 	elSpinner.classList.remove('d-none');
// });

// voice.onend = function (evt) {
// 	elSpinner.classList.add('d-none');
// 	console.log('END');
// };

// voice.onresult = function (evt) {
// 	elInput.value = evt.results[0][0].transcript;
// };

// var elBox = document.querySelector('.js-box');

// elBox.textContent = '<strong>Hello world</strong>';

// SPLIT

// var str = 'Hello world goodbye good day nice Hello world goodbye good day nice';

// console.log(str.split(' ', 10));

// MASALA

// var elForm = document.querySelector('.js-form');
// var elArea = document.querySelector('.js-area');
// var elList = document.querySelector('.js-list');

// elForm.addEventListener('submit', function (evt) {
// 	evt.preventDefault();
// 	var newArr = elArea.value.split(',');

// 	for (item of elArea.value.split(',')) {
// 		var newItem = document.createElement('li');
// 		newItem.textContent = item;
// 		elList.appendChild(newItem);
// 	}
// });

// INCLUDES => boolean

// var fruits = ['apple', 'peach', 'banana', 'strawberry'];

// console.log(fruits.includes('banana', 3));

// console.log(pokemons);

// HOMEWORK-1

var elWrap = document.querySelector(".wrapper");

for (let i = 0; i < pokemons.length; i++) {
  var newCard = document.createElement("li");
  newCard.setAttribute("class", "card col-2");
  // console.log(newCard.classList);
  newCard.innerHTML = `
  <img class="card-img" src="${pokemons[i].img}"></img>
  <div class="card-body pt-0 pb-0">
  <h4 class="card-title text-center m-0">${pokemons[i].name}</h4>
  <p class="card-text flex-wrap m-0">
  <p class="small m-0"><strong>Type:</strong> ${pokemons[i].type.join(", ")}</p>
  <p class="small m-0"><strong>Height:</strong> ${pokemons[i].height}</p>
  <p class="small m-0 pb-0"><strong>Weight:</strong> ${pokemons[i].weight}</p>
  <p class="small m-0"><strong>Weaknesses:</strong> ${pokemons[
    i
  ].weaknesses.join(", ")}</p>
  </p>
  </div>
  <strong class="text-center">${pokemons[i].id}</strong>
    `;
  elWrap.appendChild(newCard);
}

// HOMEWORK-2

var elSelect = document.querySelector("select");

var typeArr = [];
// for (let i = 0; i<pokemons.length;i++) {
//   typeArr.push(pokemons[i].type)
// }
for (item of pokemons) {
  typeArr.push(item.type.join(", "));
  // console.log(item.type.join(", "));
}
// console.log(typeArr.join(", ").split(", "));
var allTypes = typeArr.join(", ").split(", ");
console.log(allTypes);
var setTypes = new Set(allTypes);
console.log(setTypes);

for (type of setTypes) {
  var elOption = document.createElement("option");
  elOption.setAttribute("value", `${type}`);
  elOption.innerHTML = `${type}`;
  elSelect.appendChild(elOption);
}
// typeArr.join(", ")
// // var type = typeArr.split(",")
// var typeArr2 =new Set(typeArr)

// console.log(typeArr);

elSelect.addEventListener("change", (evt) => {
  var filteredTypes = [];

  if(evt.target.value == "All"){
    filteredTypes = pokemons;
  } else {
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].type.includes(evt.target.value)) {
        filteredTypes.push(pokemons[i]);
      }
    }
  }

  elWrap.innerHTML = "";

  console.log(filteredTypes);

  filteredTypes.forEach((el) => {
    newCard.innerHTML = `
  <img class="card-img" src="${el.img}"></img>
  <div class="card-body pt-0 pb-0">
  <h4 class="card-title text-center m-0">${el.name}</h4>
  <p class="card-text flex-wrap m-0">
  <p class="small m-0"><strong>Type:</strong> ${el.type.join(", ")}</p>
  <p class="small m-0"><strong>Height:</strong> ${el.height}</p>
  <p class="small m-0 pb-0"><strong>Weight:</strong> ${el.weight}</p>
  <p class="small m-0"><strong>Weaknesses:</strong> ${el.weaknesses.join(
    ", "
  )}</p>
  </p>
  </div>
  <strong class="text-center">${el.id}</strong>
    `;
    elWrap.innerHTML += newCard.outerHTML;
  });
});
