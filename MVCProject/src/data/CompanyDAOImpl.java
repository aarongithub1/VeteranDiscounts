package data;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Address;
import entities.Company;

@Transactional
@Repository
public class CompanyDAOImpl implements CompanyDAO {

	@PersistenceContext
	EntityManager em;

	@Override
	public List<Company> index() {
		List c = new ArrayList<>();
		String query = "SELECT c from Company c";
		c = em.createQuery(query, Company.class).getResultList();
		return c;
	}

	@Override
	public Company show(int id) {

		return em.find(Company.class, id);
	}

	@Override
	public Company create(String json) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			Company newCompany = mapper.readValue(json, Company.class);
			em.persist(newCompany);
			em.flush();
			return newCompany;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;

	}

	@Override
	public Boolean delete(int id) {
		Company c = em.find(Company.class, id);
		em.remove(c);
		if (em.find(Company.class, id) == null) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public Company update(String json, int id) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			Company updatedCompany = mapper.readValue(json, Company.class);

			Company managed = em.find(Company.class, id);
			managed.setName(updatedCompany.getName());
			managed.setOwner(updatedCompany.getOwner());
			managed.setType(updatedCompany.getType());
			managed.setStoreUrl(updatedCompany.getStoreUrl());
			managed.setIsChain(updatedCompany.getIsChain());
			managed.setLocations(updatedCompany.getLocations());

			return managed;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
