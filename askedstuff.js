var readDocs = confirm("Do you like to read docs?");
if (readDocs) {
  alert("you will be a great programmer");
} else {
  alert("you will be a good programmer");
}

<script>

  var name = "Faraz";
  var fullName = name + " " + "hafeez";
  var age = 33;
  var isCoding = true;
  var hobbies = ["Surfing internet", "Cooking", "coding"]
var programmer = {
    hobbies,
    name: "faraz hafeez",
  age: age,
  sayhi: function () {
    console.log(this.name);
    return this.age
  }

};
programmer.sayhi()
function createPar(text) {
  var p = document.createElement("P")
  p.innerText = text
  document.body.appendChild(p)
}
console.log(hobbies.length)
for (var i = 0; i < hobbies.length; {
    createPar(hobbies[i])
  }