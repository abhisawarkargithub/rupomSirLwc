public with sharing class DataTableController {
   @AuraEnabled(cacheable=true)
   public static list<Account> getAccuntRec(){
   return [Select id,Name, Phone,Rating from Account limit 10];
   }
} 