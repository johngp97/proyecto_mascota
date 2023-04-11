package com.example.demo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
public class HomeController {

	
	@CrossOrigin(origins = "http://localhost:5500")
	@PostMapping("/login")

	public ResponseEntity<String> ejemplo(@RequestBody String mensaje) {
	//public void recibirMensaje(@RequestBody String mensaje) {
        System.out.println("Mensaje recibido desde el cliente: " + mensaje);
        // Aquí puedes hacer lo que quieras con el mensaje recibido
        
        
        String respuesta = "El servidor ha recibido el mensaje: " + mensaje;
        return ResponseEntity.ok(respuesta);
    }
}

