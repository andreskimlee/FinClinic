# The Financial Clinic - Full Stack Developer Challenge

## Question Types:
 1 - 2:  Subjective
3: Coding
4: Salesforce Lightning Components and Apex

# Questions:
## What is a RESTful Web Service? Please provide an example below or a line of code from your GitHub account showing the different use cases for HTTP methods. Please explain what each method is doing.

RESTful API's generally refer to an architectural style for web development which focuses on the scalability and performance based on the constraints of stateless communication via HTTP and client/server architecture. Generally a API request will hit a server and it will respond in XML/JSON format. Endpoints generally have CRUD(create, read, update, destroy) principles. 

![alt-text](https://i.imgur.com/NvbQmC1.png)

The code above is an example of a GET HTTP request that will fetch a users info given a usersID. This route is setup on our backend using NodeJS and will return a JSON response with the users info such as a profile photo, name, address, etc. 

## Explain the differences between the keywords implements and extends in Apex.
 
 Extend refers to the class inheritance within APEX. Since Apex follows the principle of OOP, extend allows one class to inherit the class methods of a another class. Implementation refers to the usage of Interfaces in Apex where a class can utilize a method depending on your application. However, to utilize interfaces, another class must implement it by providing a body for all of the methods contained in the interface. 

## Problem: Take a list of integers and find the common digit? Create a file using any language(javascript preferred but not required) and name it challenge-3.Array of number [11232, 1712, 2311] common digits = [1, 1, 2] (if a digit occurs x times in all numbers, you need to include that digit x times in your answer)  

![alt-text](https://i.imgur.com/sIfrDxS.png)

Helper method To Find Occurences for each unique number
![alt-text](https://i.imgur.com/g9MRlpQ.png)

See file, challenge-3.js for more detailed look.

## Build a simple Mortgage calculator using Lightning components 

![alt-text](https://i.imgur.com/QzuC3ms.png)

[Please Click Here To Visit The Live Link](https://playful-fox-66iw24-dev-ed.lightning.force.com/c/MortgageCalculator.app)
(An Email was sent out for the ID and Password to access the page)
Code base is available within this repo at MortgageCalc > force-app > aura 

## Extra Features (Apex)
 ## 1. Performs the calculation in Apex (backend) instead of calculating the result on the client side.

#### First we set up a controller action named callBackEnd. This will call our apex back end controller.
![alt-text](https://i.imgur.com/ZuMep2M.png)

#### Next we created our Apex class where we migrated all of our calculations to our backend instead. We will receive the morgCalc object through the params and access the attributes through the object. 
![alt-text](https://i.imgur.com/rBGxRRn.png)

## 2. Follow up question:
### Imagine you’ll need to build a second calculator, the debt repayment calculator (similar to this), as you can see, is pretty similar with the Mortgage Calculator that you just built. How would you share the code between the two calculators?

Balanced owed and price of home and interest rate are essentially interchangeable and would be an attribute that can be shared for the Debt Calculator. Following the principles of OOP, I would utilize extends. A DebtCalculator class can borrow all attributes from the MortgageCalculator class and additional methods can be added to the DebtCalculator class for repayment period and/or expected monthly payment.

