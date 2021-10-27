package com.example.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products")

public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private int id;
	
	@Column(name = "p_name")
	private String name;
	
	@Column(name = "p_desc")
	private String descp;
	
	@Column(name = "p_price")
	private double price;
	
	@Column(name = "p_brand")
	private String brand;
	
	@Column(name = "p_img")
	private String img;
	
	@Column(name = "p_gen")
	private String gen;
	
	public Product() {
		
	}
	
	public Product(String name, String descp, double price, String brand, String img, String gen) {
		super();
		this.name = name;
		this.descp = descp;
		this.price = price;
		this.brand = brand;
		this.img = img;
		this.gen = gen;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescp() {
		return descp;
	}
	public void setDescp(String descp) {
		this.descp = descp;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}

	public String getGen() {
		return gen;
	}

	public void setGen(String gen) {
		this.gen = gen;
	}




}
