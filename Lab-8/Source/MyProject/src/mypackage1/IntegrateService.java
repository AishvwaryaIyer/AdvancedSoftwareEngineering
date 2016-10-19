package mypackage1;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.json.JSONException;
import org.json.JSONObject;

@Path("/integrate")
public class IntegrateService {
	
	public IntegrateService(){}
	
	
	  public long age,lifeexpectancy,a;

	  @GET
	  @Path("/calculateage")
	  @Produces("application/xml")
	  public long calculate(long year){
		  CalculateAge object=new CalculateAge();
		  age= object.calculate (year);
		  return age;
	  }
	  
	  @GET
	  @Path("/lifeexpectancy")
	  @Produces("application/xml")
	  public long calculatelife(long age){
		//calculate(age);
		 		  
		  CalculateLifeExpectancy object=new CalculateLifeExpectancy();
		lifeexpectancy=object.calculatelife(age);
		return lifeexpectancy;
	  }
	  
	  

	@Path("{x}")
	  @GET
	  @Produces("application/json")
	  public Response first(@PathParam("x")long year) throws JSONException {
		//long a;
		a=calculate(year);
		JSONObject jsonObject=new JSONObject();	
		jsonObject.put("YEAR",year );
		jsonObject.put("AGE",calculate(year));
		jsonObject.put("LIFEEXPECTANCY",calculatelife(a));
	

		String result = "" + jsonObject;
		return Response.status(200).entity(result).build();
	}
	  
	public static void main(String[] args){
		
		}
}

