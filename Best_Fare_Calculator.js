public class TransitCalculator{
  int numOfDays;
  int numOfRides;
  String[] fareOptions={"Pay-per-ride","7-day-unlimited","30-day-unlimited"};
  double[] fareCost={2.75,33.00,127.00};
  
  public TransitCalculator(int num, int rides){
    this.numOfDays=num;
    this.numOfRides=rides;
  }
  
  public double unlimited7Price(){
    
double sevenDayPurchases = Math.ceil(numOfDays/ 7.0);
double total7DayCost = sevenDayPurchases * fareCost[1];

    return total7DayCost / numOfRides;
    
  }
  
  public double[] getRidePrices(){
   
    double unlimited30Price= fareCost[2]/numOfRides;
    double[] totalFarePerOption= {fareCost[0]*numOfRides,unlimited7Price(),unlimited30Price};
    return totalFarePerOption;
  }
  
  public String getBestFare(){
    double ridePrices=getRidePrices();
    double bestIndex=0;
    for (int i=0; i<ridePrices.length;i++){
      if (ridePrices[i]<ridePrices[bestIndex]){
        winningIndex=i;
      }
    }
    return "You should get the " + fareOptions[bestIndex] + " option at $" +ridePrices[bestIndex]+ " per ride.";
  }
  
  public static void main(String[] args){
    int numberOfDays=5;
    int numRides=12;
    
    TransitCalculator transCal = new TransitCalculator(5,12)
      
      System.out.println(transCal.getBestFare());
    
    
  }
  
}
