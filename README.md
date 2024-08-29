# Full Stack Exam
## Pre-Exam Theory Questions

### 1. In design Heuristics, what does the term “advantages of Matching between system and the real world” mean? What are the advantages? (10 marks)
This term means that when designing an application, a designer should utilise languages, actions and concepts that their end user is likely to be familiar with from the real world. It is important that UX designers do not merely rely on their own interpretations of the world around them which may not match those of the end user. The presentation of infomation should follow logic that feels natural and relatable. The main advantage of implementing this principle is that if done sufficiently, users will stay on your platform. Alientating them with technical jargon is likely to make them use external resources to understand your app, splitting your traffic, or even lead them to use another source entirely. Using familar terms is emphathetic to the user's existing knowledge leading to a more comfortable experience for them which requires less training. It is also better for SEO as they may already be searching these terms.

A notable factor of this heuristic is also skeumorphic design which relates to digital experiences being designed in line with physical experiences from the real world - such as a kindle mimicing the page turning of a book.

By implementing universal conventions such as the well-known homepage symbol and sticking to intuitive mappings (such as 'up' being associated with 'more' and therefore 'volume increase' and vise versa for decrease), the user base of your applicaiton will be more inclusive, rather than limited to those of one specific spoken language.


### 2. What do you understand by “Single source of truth”? and how does it relate to redux? What are the advantages ? (10 marks)
Single source of truth is one of the fundamental principles of Redux. It means that the global state of an application is contained in one centralised store. This is usually an object that can be visualised as a tree. All components in the application can dispatch and fetch data from here and hierachy of these components has no relavance over accessing or updating the state. A key advantage of this is that components can be simplified and focus on rendering rather than managing state and this makes them more reusable. This also allows for a clearer, more modular architecture which in turn allows for more scalability.

Another advantage of single source of truth is that the same code can run on both server and client side using serlialisation and hydration to create universal applications. Centralising state also makes debugging easier as you can pin point where to inspect your code and you can also isolate testing without involving the UI.

Simple functions such as Undo and Redo also become easier to implement as this requires cycling through state history. If this was scattered across a mutlitude of locations in the application, implementing these fucntions could be very complex. Therefore, this approach is beneficial for including these features.

### 3. What is the difference between a stateless component and a stateful component in React? (10  marks)
A stateless component is usually a functional component that does not manage its own state. It recieves data and behaviours through props (properties) inherited from a parent component and passed through parameters. The responsibility of stateless components is that of presentational features and they render UI decleratively, based on the props passed to them. Stateless components should not harbour complex logic and are less likely to re-render unecessarily.

A stateful component tends to be a class component that extends the 'React.Component' class from React's library and manages its own state. It can also pass state to child components. Using the React hook 'useState' on a functional component can also create a stateful component. Stateful components are used for interactive user interfaces and circumstances in which data needs to be managed and tracked over time, such as user input values for example. They can utilise lifecycle methods to perform necessary actions at different stages. Stateful components offer dynamic and responsive behaviour for your application. For this reason it is best practice to streamline state and not include unecessary variables to reduce complexity.

### 4. List out the advantages and disadvantages of exploratory testing (used in Agile) and scripted testing? (10 marks)
Exploratory testing is an agile approach that focuses on discovery, creativity and centers the learning and experience of the tester. It does not follow any pre-defined plan or test cases and allows the tester to interact intuitively with the application. It can be done at any point in the development cycle and the approach can be adaptive, shifting focus as they go along depending on what is discovered. 

It has advantages such as rapid feedback and varied insights. More relevant UI issues and bugs may be found if the app is tested when live and high-risk areas are easier to identify with this approach. It fosters creativity and flexibility. However, there are disadvantages such as the assessment of the application only encompassing the scope of the tester's understanding and skill which can leave gaps in coverage and make verification difficult to manage. If the tester lacks experience, important bugs could be missed. With no structured documentation or requirements to refer to, there is more room for bias and inconsistency. It is difficult to repeat and automation is not possible.

Scripted testing is a more systematic approach in which steps, test cases and expected outcomes are outlined in advance. This approach is focused around ensuring the functionalities of the software behave as expected. The scripting is drawn up based on the requirements and specifications of the software and results of the tests are tracked and documented. 

Advantages of this approach include consistency, repitition and the ablity to automate. This can be maintained across more than one tester and various sessions. Having reference documentation allows for thorough coverage and monitoring and is also useful for regression testing so that if something breaks after changes it is easier to pin point. Traceability is also important if the software has compliance standards to meet.

There are however disadvantages as the scripts may have limitations that miss unexpected behaviours or edge cases in the software. It is a less flexible and reactive appraoch and test scripts require frequent updating to combat this. If the instructions are too specific, it may deviate in relevance to the product as it evolves. There are features that may not be considered in the script writing phase and hidden issues may be missed that exploratory testing could unearth. This method also requires lengthy preparation and the feedback process is also slower. 


## Theory Questions during exam

### 1. Definition and explanation of SQL Injection (6 marks)
An SQL Injectuon is a common cyber attack method in which the attacker injects malicious SQL statements into a webpage in a field that takes input such as username. A hacker may use a SELECT statement for example to retrieve usernames and passwords from a database

### 2. Types of SQL Injection Attacks (4 marks)
One type of SQL Injection attacks are Error-based SQLi. This technique obtains structural information about the database by assessing the error messages that the database throws. This allows them to rectify their injection.

Another type is Union-based SQLi which uses the UNION SQL operator to combine results of two or more SELECT statements into one - this is likely a harmless SQL statement and a malicious one but both will be structured with the same columns and data types. It will return this new result as an HTTP response.

### 3. Impact of SQL Injection (5 marks)
There are many potential impacts of SQL injection such as the viewing and modification of sensistive data and attackers being able to use a users identity. They may access personal details like finacial records. They may also be able to take over adminstrative rights of the database and increase their access privaledges. This can have huge knock on effects to businesses if they lose customer trust due to data leaks and they could face legal implications too as breaches will affect them meeting regulations.

### 4. Mitigation strategies (5 marks)
Mitigation stategies inlcude input validation and sanitisation - making sure that users input conforms to expected format.
Make sure queries are parameterised and limit input length.
Disable errors after the app is no longer in development.
Firewall
Conduct regular security audits and penetration testing