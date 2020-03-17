({
    calcMonthly: function (component, event, helper) {
        var curr = component.get("v.newCalc")

        let n = curr.Length_of_loan__c * 12
        let i = (curr.Interest__c / 100) / 12
        let d = (((1 + i) ** n) - 1) / (i * ((1 + i) ** n))

        let monthly = (curr.Price__c - curr.Down_Payment_Amount__c) / d
        let final = (monthly + parseInt(curr.insurance__c) + parseInt(curr.tax__c))
        component.set("v.newCalc.monthly__c", helper.moneyFormat(final))
    },

    handleChange: function (component, event, helper) {
        var curr = component.get("v.newCalc")
        let downPayment = curr.Down_Payment__c / 100 * curr.Price__c
        component.set("v.newCalc.Down_Payment_Amount__c", Math.floor(downPayment))
    },

    handleChange2: function (component, event, helper) {
        var curr = component.get("v.newCalc")
        let downPayment = curr.Down_Payment__c / 100 * curr.Price__c
        component.set("v.newCalc.Down_Payment__c", curr.Down_Payment__c)
        component.set("v.newCalc.Down_Payment_Amount__c", Math.floor(downPayment))
    },

    callBackEnd: function (component, calcData) {
        // Create the action
        var action = component.get("c.backEndCalc");
        action.setParams({
            "calcData": calcData
        });
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.newCalc.backEndTest__c", helper.moneyFormat(response.getReturnValue()));
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
})