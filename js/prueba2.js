var xhr = new XMLHttpRequest();
xhr.open("POST", "http://127.0.0.1:8080/ejercicio20/hola", true);

xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({dato1: 10, dato2: 20}));

xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
          console.log(xhr.responseText);
      } else {
          console.log('Hubo un error');
      }
  }
}