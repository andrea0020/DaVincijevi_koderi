package com.projektProgi.StoZelisCitati;

import org.springframework.boot.CommandLineRunner;
import    org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;

@SpringBootApplication
public class StoZelisCitatiApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(StoZelisCitatiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}
}
