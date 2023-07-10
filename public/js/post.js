const createButtonEl = document.getElementById("create-button");

const clickHandler = () => {
  document.location.replace("/create-post");
};

createButtonEl.addEventListener("click", clickHandler);
