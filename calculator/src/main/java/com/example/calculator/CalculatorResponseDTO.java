package com.example.calculator;

public class CalculatorResponseDTO {
	private Long timeExecution;
	private Long countPrimeNumbers;
	public Long getTimeExecution() {
		return timeExecution;
	}
	public void setTimeExecution(Long timeExecution) {
		this.timeExecution = timeExecution;
	}
	public Long getCountPrimeNumbers() {
		return countPrimeNumbers;
	}
	public void setCountPrimeNumbers(Long countPrimeNumbers) {
		this.countPrimeNumbers = countPrimeNumbers;
	}
}
