
function connectServer() {

    const websocketClient=new WebSocket("");
    
    const sendMessageButton=document.querySelector("[name=send_message_button2]");
    
    websocketClient.onopen=function(message){
    console.log("client connected");
    
    
    sendMessageButton.onclick=function(){
        var input = document.getElementById("username").value;
    
        document.getElementById('username').value='';
  
        //send to server
        
        var submit_boton= document.getElementById("boton");
        submit_boton.disabled = true;
    };
    
    
    websocketClient.addEventListener('message', (event) => {
    var post2=event.data;
    //console.log(post2);
    
    var input2 = document.getElementById("paquete").value;
        
    
    var p = document.getElementById("p3");
    frase=frase+post2+"<br>"+"<br>";
    p.innerHTML = frase;
    
    //document.getElementById("p3").innerHTML = post2;
    console.log('Message from server ', event.data);
    
    var submit_boton= document.getElementById("boton");
    submit_boton.disabled = false;
    
    });
    
    };
    
    websocketClient.onclose = function(event) {
        console.log("Se ha cerrado la conexión");
        setTimeout(function() {
          console.log("Intentando reconectar...");
          connectServer();
        }, 3000);
      };
    
    }
    
    connectServer();