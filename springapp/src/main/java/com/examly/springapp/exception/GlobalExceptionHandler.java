package com.examly.springapp.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice 
class GlobalExceptionHandler {
    @ExceptionHandler(InvalidNameException.class)
    public ResponseEntity<Map<String,String>>handleInvalidNameException(InvalidNameException ex)
    {
        Map<String,String>errorRes=new HashMap<>();
        errorRes.put("error","InvalidNameException");
        errorRes.put("message",ex.getMessage());
        return new ResponseEntity<>(errorRes,HttpStatus.BAD_REQUEST);

    }


}
