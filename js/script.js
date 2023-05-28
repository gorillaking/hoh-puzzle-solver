function load()
{
  fetch('./metadata.json')
    .then(response => response.json())
    .then(data => console.log(data))

  console.log("test");
}

window.onload = function() {
  console.log("on load");
}