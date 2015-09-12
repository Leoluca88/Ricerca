var page = tabris.create("Page", {
  title: "Ricerca",
  topLevel: true
});

var proposals = ["napoli", "luca", "domenico", "massimo"];

var textView = tabris.create("TextView", {
  layoutData: {centerX: 0, centerY: 0}
}).appendTo(page);

var action = tabris.create("SearchAction", {
  title: "Cerca",
  image: "img/users.png"
}).on("select", function() {
  this.set("text", "");
}).on("input", function(widget, query) {
  updateProposals(query);
}).on("accept", function(widget, query) {
  textView.set("text", "Hai cercato la parola '" + query + "'");
});

updateProposals("");

page.open();

function updateProposals(query) {
  action.set("proposals", proposals.filter(function(proposal) {
    return proposal.indexOf(query.toLowerCase()) !== -1;
  }));
}