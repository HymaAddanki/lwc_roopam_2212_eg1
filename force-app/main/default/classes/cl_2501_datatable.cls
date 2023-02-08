public with sharing class cl_2501_datatable 
{
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList()
    {
        
            return [Select Id,FirstName,LastName,Phone,Email from Contact Limit 10];
            
       
    }
}