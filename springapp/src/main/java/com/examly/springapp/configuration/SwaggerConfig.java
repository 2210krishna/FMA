 package com.examly.springapp.configuration;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@Configuration
@OpenAPIDefinition
(
    info=@Info(
        title="MySpringBootApplication",
        version="1.0",
        description="API Documentation for my Franchise Application"

    )

    
)
public class SwaggerConfig {

}
