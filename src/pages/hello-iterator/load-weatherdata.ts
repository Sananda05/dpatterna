import{
    DataCollection,
    

}from "../../patterns/iterator/weatherdata-iterator"

const collection = new DataCollection();


export async function getData() {
   collection.addItem("dhaka");
   collection.addItem("rajshahi");
   collection.addItem("sylhet");
   collection.addItem("cittagong");
   collection.addItem("khulna");
   collection.addItem("rangpur");
  
   return collection.getIterator();
  
  }
   


 
