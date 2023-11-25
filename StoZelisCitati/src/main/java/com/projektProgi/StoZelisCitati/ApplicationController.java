package com.projektProgi.StoZelisCitati;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ApplicationController {

    @GetMapping("/home")
    public String home(){
        return "index";
    }

    @GetMapping("/register")
    public String register(){
        return "register";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @GetMapping("/adminovHome")
    public String Admin(){ return "adminovHome";   }

    @GetMapping("/zahtjevi")
    public String zahtjev(){return "zahtjevi";}

}