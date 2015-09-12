var page = tabris.create("Page", {
  title: "Prodotti",
  topLevel: true
});

var tabFolder = tabris.create("TabFolder", {
  layoutData: {left: 0, top: 0, right: 0, bottom: 0},
  paging: true
}).appendTo(page);

var createTab = function(title, image) {
  var tab = tabris.create("Tab", {
    title: title, // converted to upper-case on Android
    image: {src: image, scale: 2} // image only used by iOS
  }).appendTo(tabFolder);
  tabris.create("TextView", {
    layoutData: {centerX: 0, centerY: 0},
    text: "Qui faccio apparire le " + title + "\n(Su IOS accanto alle voci di menù dovrebbe apparire un\'iconcina)"
  }).appendTo(tab);
};

createTab("Scarpe", "img/users.png");
createTab("Maglie", "img/users.png");
createTab("Pantofole", "img/users.png");

page.open();

tabFolder.on("change:selection", function(widget, tab) {
  console.log(tab.get("title"));
});