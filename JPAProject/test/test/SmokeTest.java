package test;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class SmokeTest {
	private EntityManagerFactory emf;
	private EntityManager em;

	@Before
	public void set_up() {
		this.emf = Persistence.createEntityManagerFactory("RentAFriend");
		this.em = emf.createEntityManager();
		
//		this.profile = em.find(Profile.class, 1);
	}
	
	@After
	public void tear_down() {
		em.close();
		emf.close();
	}
	
	@Test
	public void smoke_test() {
		boolean test = true;
		assertEquals(true, test);
	}
}
