package com.example.vuebackboard;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.example.vuebackboard")
@SpringBootApplication
public class VueBackboardApplication {

	public static void main(String[] args) {
		SpringApplication.run(VueBackboardApplication.class, args);
	}

}