package controllers;

import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
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
	private CompanyDAO companyDAO;
	
	//Search by Company
	@RequestMapping(path="company/discount/search/{searchString}", method=RequestMethod.GET)
	public List<Company> searchCompany(HttpServletRequest req, HttpServletResponse res, 
			@PathVariable String searchString) {
		List<Company> company = companyDAO.getLocationsByCompany(searchString);
		
		if(company == null) {
			res.setStatus(400);
		}
		else {
			res.setStatus(201);
		}
		return company;
	}

	@RequestMapping(path = "company", method = RequestMethod.GET)
	public Set<Company> index() {
		return companyDAO.index();

	}

	@RequestMapping(path = "company/{cid}", method = RequestMethod.GET)
	public Company show(@PathVariable int cid, HttpServletResponse res) {
		Company c = companyDAO.show(cid);
		if (c == null) {
			res.setStatus(400);
			return c;
		} else {
			res.setStatus(201);
			return c;
		}
	}

	@RequestMapping(path="{uid}/company",method=RequestMethod.POST)
	public Company create(@RequestBody String json, HttpServletResponse res, @PathVariable int uid) {
		Company c = companyDAO.create(uid, json);
		if (c == null) {
			res.setStatus(400);

		} else {
			res.setStatus(201);
		}
		return c;
	}
	
	@RequestMapping(path = "{uid}/company/{cid}", method = RequestMethod.PUT)
	public Company update(@RequestBody String json, HttpServletResponse res,
			@PathVariable int cid, @PathVariable int uid) {
		Company c = companyDAO.update(json, cid, uid);
		if (c == null) {
			res.setStatus(400);
		} else {
			res.setStatus(200);
		}
		return c;
	}
	
	@RequestMapping(path="{uid}/company/{cid}",method = RequestMethod.DELETE)
	public Boolean delete(HttpServletResponse res, @PathVariable int cid, @PathVariable int uid) {
		Boolean b = companyDAO.delete(cid,uid);
		if (b == true){
			res.setStatus(201);
			return b;
		} else {
			res.setStatus(400);
		return false;
		}
	}
}
