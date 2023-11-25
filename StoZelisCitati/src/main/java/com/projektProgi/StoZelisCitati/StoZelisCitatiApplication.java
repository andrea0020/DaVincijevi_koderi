package com.projektProgi.StoZelisCitati;

import org.springframework.boot.CommandLineRunner;
import    org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class StoZelisCitatiApplication extends SpringBootServletInitializer implements CommandLineRunner {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder){
		return builder.sources(StoZelisCitatiApplication.class);
	}


	public static void main(String[] args) {
		SpringApplication.run(StoZelisCitatiApplication.class, args);
	}



	@Override
	public void run(String... args) throws Exception {

	}
}
