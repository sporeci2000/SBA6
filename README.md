In this project, I used TypeScript and Object-Oriented Programming to build a small e-commerce system.  I built a Product class that included all the essential details like id, title, description, category, price, and discount percentage and added methods to get the price after discount and display the product details. I also made separate files for calculating discount, tax, and fetching data from a fake API. This helped keep my code clean and organized.
The biggest challenge I faced was dealing with asynchronous operations. I had to wrap my head around using async/await properly to ensure product data was fully loaded before I tried to work with it. Initially, I struggled with TypeScript's error handling because errors come back as "unknown" types, which was pretty confusing at first. I solved this by checking whether errors were instances of the Error class, and I even created my own custom error types like NetworkError and DataError to make debugging easier.
This project taught me how to organize code using TypeScript and how useful it is to break things into small parts. I also got better at using try/catch to handle problems without crashing the app.
Overall, I feel more confident using TypeScript, working with APIs, and handling errors in a better way.


Resources: 
https://learnersbucket.com/examples/javascript/percentage-to-decimal-in-javascript/