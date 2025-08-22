package com.examly.springapp.controller;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.exception.InvalidNameException;
import com.examly.springapp.model.SpiceMerchant;
import com.examly.springapp.service.SpiceMerchantService;

@RestController

@CrossOrigin(origins = "http://localhost:3000")
public class SpiceMerchantController {
    @Autowired
    public SpiceMerchantService spiceMerchantService;

    @PostMapping("/addSpiceMerchant")
    public SpiceMerchant addSpiceMerchant(@RequestBody SpiceMerchant spiceMerchant)
    {
        if(!spiceMerchant.getName().matches("^[a-zA-Z ]+$"))
        {
            throw new InvalidNameException("Name nust not contain special characters or numbers.");
        }
        return spiceMerchantService.addSpiceMerchant(spiceMerchant);
    }

    @GetMapping("/getAllSpiceMerchants")
    public List<SpiceMerchant> getAllSpiceMerchants()
    {
        return spiceMerchantService.getAllSpiceMerchants();
    }
    @GetMapping("/getSpiceMerchant/{id}")
    public ResponseEntity<?> getSpiceMerchant(@PathVariable int id)
    {
        Optional<SpiceMerchant> sp= spiceMerchantService.getSpiceMerchant(id);
        if(sp.isPresent())
        {
            return ResponseEntity.ok(sp.get());

        }
        else{
            return ResponseEntity.status(404).body("Id Not found");
        }
    }
    @PutMapping("/updateSpiceMerchant/{id}")
    public SpiceMerchant updateSpiceMerchant(@PathVariable int id, @RequestBody SpiceMerchant spiceMerchant)
    {
        if(!spiceMerchant.getName().matches("^[a-zA-Z ]+$"))
        {
            throw new InvalidNameException("Name nust not contain special characters or numbers.");
        }
        spiceMerchant.setId(id);
        return spiceMerchantService. updateSpiceMerchant(spiceMerchant,id);

    }
    
     @DeleteMapping("/deleteSpiceMerchant/{id}")
     public ResponseEntity<String> deleteSpiceMerchant(@PathVariable int id)
     {
        Boolean del=spiceMerchantService.deleteSpiceMerchant(id);
        if(del)
        {
            return ResponseEntity.ok("DeletedSuccessfully");
        }
        else
        {
            return ResponseEntity.status(404).body("Id "+id+" Not Found");
        }
     }
     @GetMapping("/paginated")
     public Page<SpiceMerchant> getPaginatedpages(
        @RequestParam(defaultValue = "0") int pageNo,
        @RequestParam(defaultValue = "2") int pageSize,
        @RequestParam(defaultValue = "name") String sortBy
     )
     {
        return spiceMerchantService.getPaginatedpages(pageNo,pageSize,sortBy);

     }
     @GetMapping("/getSpiceMerchantsByLocation/{location}")
    public List<SpiceMerchant> getSpiceMerchantsByLocation(@PathVariable String location) {
        return spiceMerchantService.getMerchantsByLocation(location);
    }

}
