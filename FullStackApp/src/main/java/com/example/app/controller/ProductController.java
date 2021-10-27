package com.example.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.exception.ResourceNotFoundException;
import com.example.app.model.Product;
//import com.example.app.repository.BrandRepository;
import com.example.app.repository.ProductRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ProductController {

	@Autowired
	private ProductRepository productRepository;
	//private BrandRepository brandRepository;
	
	//Get all products
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return productRepository.findAll();
		
	}
	
	//create product rest api
	@PostMapping("/products/addproduct")
	public Product createproduct (@RequestBody Product product) {
		return productRepository.save(product);
	}
	
	@GetMapping("/products/id/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable int id){
		Product product = productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Product not exits with :"+id));
		return ResponseEntity.ok(product);	
	}
	

//	@GetMapping("/products/query")
//	public List<Product> productQueryParam(@RequestParam(name="brand") String brand) {
//		return productRepository.findByBrand(brand);
//	}
	
	@GetMapping("/products/gen/{gen}")
	public List<Product> getProductByBrand(@PathVariable String gen){
		{
			
			List <Product> products=productRepository.findByGen(gen);
			if(products.isEmpty())
			{
				System.out.println(new ResourceNotFoundException("Product(s) with the brand "+ gen +" not found"));
			}
			
			return productRepository.findByGen(gen);
		}
		
	}
		
	
	@PutMapping("/products/update/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable int id, @RequestBody Product product)
	{
		Product s= productRepository.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Product not found"));
	    s.setName(product.getName());
	    s.setDescp(product.getDescp());
	    s.setBrand(product.getBrand());
	    s.setPrice(product.getPrice());
	    s.setImg(product.getImg());
	    s.setGen(product.getGen());
	    Product updatedProduct=productRepository.save(s);
	    return ResponseEntity.ok(updatedProduct);
	}
	
	@DeleteMapping("/products/delete/{id}")
	public String deleteProduct(@PathVariable int id)
	{
		productRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Product nor found"));
		productRepository.deleteById(id);
		return "The product with id: "+id+ "is removed from the database";
	}
}


//@GetMapping("/products/{brand}")
//public List<Product> getProductByBrand(@PathVariable String brand)
//{
//	//return studentRepo.findByName(name);
//	
//	List <Product> products=productRepository.findByBrand(brand);
//	if(products.isEmpty())
//	{
//		System.out.println(new ResourceNotFoundException("Product(s) with the brand "+ brand +" not found"));
//	}
//	
//	return productRepository.findByBrand(brand);
//}

//@GetMapping("/students/{name}")
//public List<Student> getStudentByName(@PathVariable String name)
//{
//	//return studentRepo.findByName(name);
//	
//	List <Student> students=studentRepo.findByName(name);
//	if(students.isEmpty())
//	{
//		System.out.println(new ResourceNotFoundException("Student(s) with the name "+ name +" not found"));
//	}
//	
//	return studentRepo.findByName(name);
//}
//@GetMapping("/query")
//public List<Product> getProductByBrand(@RequestParam("brand") String brand){
//	return brandRepository.findByBrand(brand);
//}
//
