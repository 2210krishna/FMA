// package com.examly.springapp.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import com.examly.springapp.model.Evaluator;
// import com.examly.springapp.model.Territory;
// import com.examly.springapp.model.SpiceMerchant;
// import com.examly.springapp.service.EvaluatorService;
// import com.examly.springapp.service.TerritoryService;
// import com.examly.springapp.service.SpiceMerchantService;

// @RestController
// @CrossOrigin(origins = "http://localhost:3000")
// @RequestMapping("/guest")
// public class GuestController {

//     @Autowired
//     private EvaluatorService evaluatorService;

//     @Autowired
//     private TerritoryService territoryService;

//     @Autowired
//     private SpiceMerchantService spiceMerchantService;

//     @GetMapping("/status/{email}")
//     public String getApplicationStatus(@PathVariable String email) {
//         // 1. Check Evaluator table
        
//         SpiceMerchant sm = spiceMerchantService.getByEmail(email);
//         if (sm != null) {
//             return "Your application has been Verified. You can now Register as vendor";
//         }
//         // 2. Check Territory table
//         Territory t = territoryService.getByEmail(email);
//         if (t != null) {
//             return "Your application is in Verification stage.";
//         }
        
//         // 3. Check SpiceMerchant table
//         Evaluator ev = evaluatorService.getByEmail(email);
//         if (ev != null) {
//             return "Your application is in Evaluation stage.";
//         }

//         // 4. Not found anywhere
//         return "No application submitted yet.";
//     }
// }
package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.Evaluator;
import com.examly.springapp.model.Territory;
import com.examly.springapp.model.SpiceMerchant;
import com.examly.springapp.service.EvaluatorService;
import com.examly.springapp.service.TerritoryService;
import com.examly.springapp.service.SpiceMerchantService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/guest")
public class GuestController {

    @Autowired
    private EvaluatorService evaluatorService;

    @Autowired
    private TerritoryService territoryService;

    @Autowired
    private SpiceMerchantService spiceMerchantService;

    @GetMapping("/status/{email}")
    public String getApplicationStatus(@PathVariable String email) {
        SpiceMerchant sm = spiceMerchantService.getByEmail(email);
        if (sm != null) {
            return "Your application has been Verified. You can now Register as vendor";
        }

        Territory t = territoryService.getByEmail(email);
        if (t != null) {
            if (t.getStatus() == Territory.SpiceStatus.REJECTED) {
                return "Rejected: " + t.getRejectReason();
            }
            return "Your application is in Verification stage.";
        }

        Evaluator ev = evaluatorService.getByEmail(email);
        if (ev != null) {
            if (ev.getStatus() == Evaluator.Status.REJECTED) {
                return "Rejected: " + ev.getRejectReason();
            }
            return "Your application is in Evaluation stage.";
        }

        return "No application submitted yet.";
    }
}
