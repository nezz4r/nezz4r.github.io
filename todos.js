var list = {};
var input = document.querySelector("#app input");
var div = document.querySelector("#list");
var ulist = document.createElement("ul");

div.appendChild(ulist);

function render() {
  ulist.innerHTML = "";
  for (item of Object.entries(list)) {
    var itemElement = document.createElement("li");
    var itemText = document.createTextNode(item[0] + ": " + item[1]);
    itemElement.appendChild(itemText);
    ulist.appendChild(itemElement);
  }
}

function adicionar() {
  ulist.innerHTML = "Carregando...";
  axios
    .get("https://api.github.com/users/" + input.value)
    .then(function (response) {
      list = response.data;
      render();
    })
    .catch(function (error) {
      console.warn(error);
      ulist.innerHTML = "ERROR 404";
    });
  input.value = "";
}
