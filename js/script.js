var moveData;

async function load()
{
  

  fetch('./js/metadata.json')
    .then(response => response.json())
    .then(data => { moveData = data });
    // .then(_ => generateMermaidGraph());

    await generateMermaidGraph()
}

async function generateMermaidGraph()
{
  var list = ["test1", "test2", "test3"]
  var random = Math.floor(Math.random() * 3); 

  var graph = "graph TD\n";
  graph += " " + list[random] + "-->C[fa:fa-ban forbidden]";

  var graphElement = document.getElementById("graph");
  graphElement.removeAttribute("data-processed");
  document.getElementById("graph").innerHTML = graph;

  mermaid.initialize();
  await mermaid.run({
    querySelector: '.test'
  });

  // 0000111-->C[fa:fa-ban forbidden]
  // A[<img src='./images/000000010.png'>] --- B
  // B-->D[<img src='./images/000000010.png'>];
  // B-->E
}