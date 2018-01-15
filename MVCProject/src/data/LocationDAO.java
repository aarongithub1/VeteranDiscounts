package data;

import java.util.List;
import java.util.Set;

import entities.Location;

public interface LocationDAO {
	public Set<Location> index();
	public Location show(int lid);
	public Location create(String json, int cid, int aid);
	public Boolean delete(int lid, int cid);
	public Location update(String json, int lid, int cid);
	List<Location> getAllLocationsByKeyword(String keyword);


}
