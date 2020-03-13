/The Financial Clinic - Full Stack Developer Challenge

Question Types:
1 - 2:  Subjective
3: Coding
4: Salesforce Lightning Components and Apex

Questions:
What is a RESTful Web Service? Please provide an example below or a line of code from your GitHub account showing the different use cases for HTTP methods. Please explain what each method is doing.

Explain the differences between the keywords implements and extends in Apex.
 
Problem: Take a list of integers and find the common digit? 
Create a file using any language(javascript preferred but not required) and name it challenge-3.
Array of number [11232, 1712, 2311]
common digits = [1, 1, 2] (if a digit occurs x times in all numbers, you need to include that digit x times in your answer)  

Build a simple Mortgage calculator using Lightning components 
Before getting started please create a  trailhead account.
It is recommended that you complete this module to give you a better understanding of Lightning components.
At the very bottom of the first module (Before you start) you will need to create a trailhead playground. This is the playground you will use to build your Mortgage calculator.
All of your work will be done within this playground using the Salesforce developer console.
Salesforce provides helpful components. Make sure you use Aura Components and not Lightning Web Components (you can set the Programming Model filter to Aura Components)
The mortgage calculator should behave similarly to this.

Mortgage Calculator Stories
A user can input the price of a home
A user can input down payment of home
A user can input Length of the loan.
Possible Options: [15,30] year loans
Default: 30 year
A user can input an interest rate
Default: 6%
A user can input Property Tax 
A user can input Homeowners Insurance assume
A user clicks a button and it calculates the following.
Monthly payment of the loan (using the formula below)

Factors:
Number of Periodic Payments (n) = Payments per year times number of years
Periodic Interest Rate (i) = Annual rate divided by number of payments per year
Discount Factor (D) = {[(1 + i) ^n] - 1} / [i(1 + i)^n]

Example: Assume you borrow $100,000 at 6 percent for 30 years, to be repaid monthly. What is the monthly payment (P)? The monthly payment is $599.55.

Formula:
n = 360 (30 years times 12 monthly payments per year)
i = .005 (6 percent annually expressed as .06, divided by 12 monthly payments per year. For more details, see how to convert percentages to decimal format)
D = 166.7916 ({[(1+.005)^360] - 1} / [.005(1+.005)^360])
Loan Payment = Amount / Discount Factor = 100,000 / 166.7916 = 599.55

Extra Features (Apex)
Performs the calculation in Apex (backend) instead of calculating the result on the client side.

Follow up question:
Imagine you’ll need to build a second calculator, the debt repayment calculator (similar to this), as you can see, is pretty similar with the Mortgage Calculator that you just built. How would you share the code between the two calculators?
