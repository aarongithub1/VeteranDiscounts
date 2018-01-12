package data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Address;
import entities.Company;
import entities.Location;

@Transactional
@Repository
public class LocationDAOImpl implements LocationDAO {

	@PersistenceContext
	private EntityManager em;

	// index - show all locations
	@Override
	public Set<Location> index() {
		String query = "SELECT DISTINCT l FROM Location l";
		List<Location> locations = em.createQuery(query, Location.class).getResultList();
		Set<Location> set = new HashSet<>(locations);
		return set;
	}

	// show a location by id
	@Override
	public Location show(int lid) {

		Location location = em.find(Location.class, lid);

		if (location == null || location.getId() != lid) {
			return null;
		}

		return location;
	}

	// create a location for a company
	@Override
	public Location create(String json, int cid) {

		ObjectMapper mapper = new ObjectMapper();
		Location location = null;

		try {

			location = mapper.readValue(json, Location.class);
			
//			Address address = location.getAddress();
			Company company = em.find(Company.class, cid);
			
			location.setCompany(company);
//			location.setAddress(address);
			
			em.persist(location);
			em.flush();

		} catch (Exception e) {
			e.printStackTrace();
		}

		return location;

	}

	// delete a location
	@Override
	public Boolean delete(int lid) {
		String query = "DELETE FROM Location l WHERE l.id = :lid";
		int delete = em.createQuery(query).setParameter("lid", lid).executeUpdate();
		if (delete > 0) {
			return true;
		}
		return false;
	}

	// update a location
	@Override
	public Location update(String json, int lid) {

		ObjectMapper mapper = new ObjectMapper();
		Location updateLocation = null;
		Location oldLocation = null;

		try {
			updateLocation = mapper.readValue(json, Location.class);
			oldLocation = em.find(Location.class, lid);

			oldLocation.setHours(updateLocation.getHours());
			// oldLocation.setOwner(updateLocation.getOwner());
			oldLocation.setPhoneNumber(updateLocation.getPhoneNumber());

		} catch (Exception e) {
			e.printStackTrace();
		}

		return oldLocation;
	}

	// Event search by keyword
	@Override
	public List<Location> getAllLocationsByKeyword(String keyword) {
		String query = "SELECT l FROM Location l WHERE l.company.name"
				+ " LIKE CONCAT('%', :company,'%')"
				+ " OR l.phoneNumber LIKE CONCAT('%', :phoneNumber,'%')"
				+ " OR l.address.street LIKE CONCAT('%', :street,'%')"
				+ " OR l.address.city LIKE CONCAT('%', :city,'%')"
				+ " OR l.address.state LIKE CONCAT('%', :state,'%')"
				+ " OR l.address.zip LIKE CONCAT('%', :zip,'%')";
		
		return em.createQuery(query, Location.class)
				.setParameter("company", keyword)
				.setParameter("phoneNumber", keyword)
				.setParameter("state", keyword)
				.setParameter("desc", keyword)
				.setParameter("activity",keyword)
				.getResultList();
	}

}
