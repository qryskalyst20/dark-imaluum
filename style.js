const boxtitle = document.querySelector(
  "section.content div.row div.col-md-6:nth-child(2) .box.box-solid.box-shadow .box-header.bg-green-gradient a h3.box-title"
);

if (boxtitle) {
  boxtitle.innerHTML = "Support My Github!";
}

const parentItem = document.querySelector(
  "section.content div.row div.col-md-6:nth-child(2) .box.box-solid.box-shadow .box-body"
);

parentItem.style.display = "flex";
parentItem.style.justifyContent = "center";
parentItem.style.alignItems = "center";

const newItem = document.createElement("div.newItem");
newItem.innerHTML = ` 
  <a href="https://github.com/qryskalyst20/dark-imaluum" target="_blank" style="color: white; font-weight: bold; background-color: green; padding: 20px; width: fit-content; border-radius: 10px;">
    Check out the source code on Github!
  </a>`;

parentItem.innerHTML = newItem.innerHTML;

const image = document.querySelector("a.btn.bg-white img");

if (image) {
  image.src =
    "https://pbs.twimg.com/media/F7fJIGKbEAAOz9I?format=jpg&name=small";
}

// <img src="https://pbs.twimg.com/media/F7fJIGKbEAAOz9I?format=jpg&name=large" alt="imaluum" style="width: 100%; height: auto; border-radius: 10px;"/>
