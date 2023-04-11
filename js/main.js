

  let data = { mensaje: "Hola mundo! login" };

  fetch('http://localhost:8080/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(response => {
  return response.text();
}).then(data => {
  console.log(`Respuesta del servidor: ${data}`);
}).catch(error => {
  console.error('Error:', error);
});




const inputs = document.querySelectorAll(".input");

const user=document.getElementById("user");
console.log(user);

function focusFunx() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunx);
});



