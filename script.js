document.write("Hello, world!");

function sayHello(){
  var response = prompt ("what's your name?");
  alert("hello " + response + ", have a good day!");
}
function add(a,b){
  return a+b
}
console.log(add(20,30));
console.log(add(100,30));

function showTopic(){
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}

var movies = ["Avengers","Captain Marvel","Black Panther","Spiderman"];
movies[0]="Wonder Woman";
movies.push("Avengers");
movies.pop();
console.log(movies);

var movie = {
  title:"Avengers",
  time:"12pm"
};
movie.status = "available";
console.log(movie);


var movie2 = ["Avengers","Captain Marvel","Black Panther","Spiderman"];
for (var movie of movie2){
 console.log(movie);
};
