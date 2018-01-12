package data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Company;
import entities.Location;

@Transactional
@Repository
public class CompanyDAOImpl implements CompanyDAO {

	@PersistenceContext
	EntityManager em;

	@Override
	public Set<Company> index() {
		List c = new ArrayList<>();
		String query = "SELECT c from Company c";
		c = em.createQuery(query, Company.class).getResultList();
		Set<Company> set = new HashSet<>(c);
		return set;
	}

	@Override
	public Company show(int id) {
	
		Company c = em.find(Company.class, id);
		c.getLocations().size();
		return c;
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
		String query = "Select FROM Location l WHERE l.company.id=:cid";
		List<Location> l = em.createQuery(query,Location.class).setParameter("cid",id).getResultList();
		em.remove(l);
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
