let appInput = document.querySelector("#app-input");
let appList = document.querySelector("#app-list");
appInput.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addItem(this.value);
    this.value = "";
  }
});

const addItem = (appInput) => {
  let appListItem = document.createElement("li");
  appListItem.innerHTML = `${appInput}<i></i>`;
  appListItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  appListItem.querySelector("i").addEventListener("click", function () {
    appListItem.remove();
  });
  appList.appendChild(appListItem);
};
