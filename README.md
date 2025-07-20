In this project, I used TypeScript and Object-Oriented Programming to build a small e-commerce system. I built a Product class that included all the essential details like id, title, description, category, price, and discount percentage and added methods to get the price after discount and display the product details. I also made separate files for calculating discount, tax, and fetching data from a fake API. I implemented an additional method as well in the Product class called getFinalPrice (currently commented out). This method calculates the final price of a product by first applying the discount and then adding the tax based on the product’s category.This helped keep my code clean and organized.
The main file that starts the app. It gets product data from the API using an async function. For each product, it shows the details and calculates the price after discount using the Product class. It also handles errors well, showing different messages if there is a network problem, bad data, or something else. This helps keep the app running smoothly and easy to debug. At the end, it runs the main function to fetch and display the products.
The biggest challenge I faced was dealing with asynchronous operations. I had to wrap my head around using async/await properly to ensure product data was fully loaded before I tried to work with it. Initially, I struggled with TypeScript's error handling because errors come back as "unknown" types, which was pretty confusing at first. I solved this by checking whether errors were instances of the Error class, and I even created my own custom error types like NetworkError and DataError to make debugging easier.
This project taught me how to organize code using TypeScript and how useful it is to break things into small parts. I also got better at using try/catch to handle problems without crashing the app.
Overall, I feel more confident using TypeScript, working with APIs, and handling errors in a better way.


Resources: 
https://learnersbucket.com/examples/javascript/percentage-to-decimal-in-javascript/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch 
