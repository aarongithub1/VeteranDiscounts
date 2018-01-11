package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Address {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String state;
	private String city;
	@Column(name = "zip_code")
	private int zip;
	private String street;
	private String lat;
	@Column(name = "long")
	private String longitidue;
	@ManyToOne
	@JoinColumn(name = "store_id")
	private Store store;
	/// GETTERS AND SETTERS

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getZip() {
		return zip;
	}

	public void setZip(int zip) {
		this.zip = zip;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getLat() {
		return lat;
	}

	public void setLat(String lat) {
		this.lat = lat;
	}

	public String getLongitidue() {
		return longitidue;
	}

	public void setLongitidue(String longitidue) {
		this.longitidue = longitidue;
	}

	public int getId() {
		return id;
	}

	public Store getStore() {
		return store;
	}

	public void setStore(Store store) {
		this.store = store;
	}

	//////// EVERYTHING ELSE
	@Override
	public String toString() {
		return "Address [id=" + id + ", state=" + state + ", city=" + city + ", zip=" + zip + ", street=" + street
				+ ", lat=" + lat + ", longitidue=" + longitidue + "]";
	}
}