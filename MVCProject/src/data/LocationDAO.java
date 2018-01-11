package data;

import java.util.Set;

import entities.Location;

public interface LocationDAO {
	public Set<Location> index();
	public Location show(int lid);
	public Location create(String json, int cid);
	public Boolean delete(int lid);
	public Location update(String json, int lid);


}
