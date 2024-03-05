public with sharing class GetAccountREcContact {
    @AuraEnabled()
    public static List<Contact> getContactRec(){
        return [Select Id, Name, Phone,(Select Id, LastName from Contacts) From Account];
    }
}