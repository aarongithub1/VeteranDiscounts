package data;

import java.util.List;

import entities.Location;

public interface LocationDAO {
	public List<Location> index();
	public Location show(int id);
	public Location create(String json);
	public Boolean delete(int id);
	public Location update(String json, int id);


}
