let content = document.getElementById("content");
content.style.visibility = "hidden";
function run() {
  var Input = document.getElementById("city1").value;
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      Input +
      "&appid=2d1b74f5ad0d95acfc6cf9bf6bdd5687&units=metric",
    type: "get",
    success: function (data) {
      $("#city_name").html(data.name);
      $("#main").html(data.weather[0].main);
      $("#temp").html(data.main.temp + " C");
      content.style.visibility = "visible";
    },
    error: function (error) {
      content.style.visibility = "hidden";
      console.log("No Data Found");
    },
  });
}
if (content == "") {
  ci;
}