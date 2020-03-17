public with sharing class backEndCalc {
    @AuraEnabled
    public static MortgageCalculator__c backEndCalc(MortgageCalculator__c, morgCalc) {
        int n = morgCalc.Length_of_loan__c * 12;
        int i = (morgCalc.Interest__c / 100) / 12;
        int d = (((1 + i) ** n) - 1) / (i * ((1 + i) ** n));
        
        int monthly  = (morgCalc.Price__c - morgCalc.Down_Payment_Amount__c) / d;
        int final = (monthly + morgCalc.insurance__c + morgCalc.tax__c);

        return final;
    }
}
