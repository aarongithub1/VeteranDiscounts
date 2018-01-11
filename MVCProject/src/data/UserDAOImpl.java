package data;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Address;
import entities.User;

@Transactional
@Repository
public class UserDAOImpl implements UserDAO{

	@PersistenceContext
	private EntityManager em;
	

	@Override
	public List<User> index() {
		List<User> a = new ArrayList<>();
		String query = "SELECT a from User a";
		a = em.createQuery(query, User.class).getResultList();
		return a;
		
	}

	@Override
	public User show(int id) {
		return em.find(User.class, id);
	}

	@Override
	public Address create(String json) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			Address newAddress = mapper.readValue(json, Address.class);
			em.persist(newAddress);
			em.flush();
			return newAddress;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;

	}

	@Override
	public Boolean delete(int id) {
		Address a = em.find(Address.class, id);
		em.remove(a);
		if (em.find(Address.class, id) == null) {
			return true;
		} else {
			return false;
		}
	}
	
	@Override
	public Address update(String json, int id) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			Address updatedAddress = mapper.readValue(json, Address.class);
			Address managed = em.find(Address.class, id);
			managed.setStreet(updatedAddress.getStreet());
			managed.setCity(updatedAddress.getCity());
			managed.setState(updatedAddress.getState());
			managed.setZip(updatedAddress.getZip());
			managed.setLocation(updatedAddress.getLocation());
			managed.setLat(updatedAddress.getLat());
			managed.setLongitidue(updatedAddress.getLongitidue());
			return managed;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}	
	}
}
