package controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.CompanyDAO;
import entities.Company;

@RestController
public class CompanyController {

	@Autowired
	private CompanyDAO dao;

	@RequestMapping(path = "company", method = RequestMethod.GET)
	public List<Company> index() {
		return dao.index();

	}

	@RequestMapping(path = "company/{cid}", method = RequestMethod.GET)
	public Company show(@PathVariable int cid, HttpServletResponse res) {
		Company c = dao.show(cid);
		if (c == null) {
			res.setStatus(400);
			return c;
		} else {
			res.setStatus(201);
			return c;
		}
	}

	@RequestMapping(path="company",method=RequestMethod.POST)
	public Company create(@RequestBody String json, HttpServletResponse res) {
		Company c = dao.create(json);
		if (c == null) {
			res.setStatus(400);

		} else {
			res.setStatus(201);
		}
		return c;
	}
	
	@RequestMapping(path = "company/{cid}", method = RequestMethod.PUT)
	public Company update(@RequestBody String json, HttpServletResponse res,
			@PathVariable int cid) {
		Company c = dao.update(json, cid);
		if (c == null) {
			res.setStatus(400);
		} else {
			res.setStatus(200);
		}
		return c;
	}
	
	@RequestMapping(path="company/{cid}",method = RequestMethod.DELETE)
	public Boolean delete(HttpServletResponse res, @PathVariable int cid) {
		Boolean b = dao.delete(cid);
		if (b == true){
			res.setStatus(201);
			return b;
		} else {
			res.setStatus(400);
		return false;}
	}
}
