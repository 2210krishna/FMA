package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.SpiceMerchant;
import com.examly.springapp.repository.SpiceMerchantRepo;
@Service
public class SpiceMerchantService {
    @Autowired
    public SpiceMerchantRepo spiceMerchantRepo;
    public List<SpiceMerchant> getAllSpiceMerchants()
    {
        return  spiceMerchantRepo.findAll();
    }
    public SpiceMerchant addSpiceMerchant(SpiceMerchant spiceMerchant)
    {
        return spiceMerchantRepo.save(spiceMerchant);
    }
    public Optional<SpiceMerchant> getSpiceMerchant(int id) {
        return spiceMerchantRepo.findById(id);
    }
    public  Boolean  deleteSpiceMerchant(int id)
    {
        if(spiceMerchantRepo.existsById(id))
        {
         spiceMerchantRepo.deleteById(id);
         return true;

        }
        else
        {
            return false;
        }
    }
    public SpiceMerchant updateSpiceMerchant(SpiceMerchant spiceMerchant,int id) {
        Optional<SpiceMerchant>exists=spiceMerchantRepo.findById(id);
        if(exists.isPresent())
        {
            return spiceMerchantRepo.save(spiceMerchant);
        }
        else{
            return null;
        }
        
    }
    public Page<SpiceMerchant> getPaginatedpages(int pageNo, int pageSize, String  sortBy)
    {
        PageRequest pagable=PageRequest.of(pageNo, pageSize,Sort.by(sortBy));
        return spiceMerchantRepo.findAll(pagable);

    }

}
