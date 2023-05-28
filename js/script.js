let moveData;
let defaultGraph;

async function load()
{
  let config = {
    startOnLoad: true,
    flowchart: { useMaxWidth: false },
    maxTextSize: 90000
  }

  mermaid.initialize(config);

  fetch('./js/metadata.json')
    .then(response => response.json())
    .then(data => { moveData = data })
    .then(_ => createDefaultMermaidGraph())
    .then(_ => generateMermaidGraph(defaultGraph));
}

async function generateMermaidGraph(graph)
{
  var graphElement = document.getElementById("graph");
  graphElement.removeAttribute("data-processed");
  document.getElementById("graph").innerHTML = graph;

  await mermaid.run({
    querySelector: '.paths'
  });
}

function createDefaultMermaidGraph()
{
  defaultGraph = "graph TD\n";
  let keys = Object.keys(moveData);

  defaultGraph += `111111111[<div><p>111111111</p><img src="./images/111111111.png"></div>]\n`

  for(let i = 0; i < keys.length; i++)
  {
    let source = keys[i];
    let target = moveData[source];
    defaultGraph += `${source}[<div><p>${source}</p><img src="./images/${source}.png"></div>]\n`
    defaultGraph += `  ${source}-->${target}\n`
  }
}