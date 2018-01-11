package data;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Address;


@Transactional
@Repository
public class AddressDAOImpl implements AddressDAO{
	
	@PersistenceContext
	private EntityManager em;
	

	@Override
	public List<Address> index() {
		List<Address> a = new ArrayList<>();
		String query = "SELECT a from Address a";
		a = em.createQuery(query, Address.class).getResultList();
		return a;
		
	}

	@Override
	public Address show(int id) {
		return em.find(Address.class, id);
	}

	@Override
	public Address create(String json) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			Address newAddress = mapper.readValue(json, Address.class);
			em.persist(newAddress);
			em.flush();
			return newPayment;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;

	}

	@Override
	public Boolean delete(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Address update(String json, int id) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
