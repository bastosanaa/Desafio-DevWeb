package com.example.calculator;

import java.time.Duration;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/calculadoraPrimos")
  ResponseEntity<CalculatorResponseDTO> calculatePrimes(@RequestParam Long number) {
        Long count = Long.valueOf(0);
        Long startTime = System.nanoTime();

        if (number >= 3){
            if (number % 2 == 0 || number == 3 ){
                number -= 1;
            }
            else {
                number -= 2;
            }
            while (number > 1) {
                if (isPrimeNumber(number)){
                    count += 1;
                }
                if (number > 3) {
                    number -= 2;
                }
                else {
                    number -= 1;
                }
            }
        }
        
        Long endTime = System.nanoTime();
        
        
        CalculatorResponseDTO calculatorResponseDTO = new CalculatorResponseDTO();
        calculatorResponseDTO.setTimeExecution(endTime - startTime);
        calculatorResponseDTO.setCountPrimeNumbers(count);
    return ResponseEntity.ok(calculatorResponseDTO);
  }

  @GetMapping("/api/welcome")
  String calcula() {
    
    return "bem vindo a calculadora";
  }
  
  public static boolean isPrimeNumber(Long num){
      for (int i = 3; i < num; i+= 2){
          if (num % i == 0) {
              return false;
          }
      }
      return true;
  }
  
}
