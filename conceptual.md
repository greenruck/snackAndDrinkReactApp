### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
allows for single-page apps that navigate without refreshing, handling client and server side routing in React/ Allowing for history of url  

- What is a single page application?
an app that does not require refreshing to navigate through the site

- What are some differences between client side and server side routing?
server sides needs to keep making requests to the server in order for the application to rerender, but client side does not need to keep make request to the server

- What are two ways of handling redirects with React Router? When would you use each?
In previous versions of react router you could use Redirect that would take any unknown url and send the client to a specified url location  You could also useHistory to redirect the client based on history, which is useful after submissions or completions of events. Newer router uses teh ROutes wrapper to navigate routes.

- What are two different ways to handle page-not-found user experiences using React Router? 
You can have a component dedicated to unfound pages that renders via switch or more recently route handles this via the routes wrapper. Could also create a redirect. 

- How do you grab URL parameters from within a component using React Router?
incorporate axios function to reach out to a saved variable url

- What is context in React? When would you use it?
context allows us to access a prop without having to srop it down through all the children required to access desired component  It allows us to call via the context function

- Describe some differences between class-based components and function
  components in React.
  Class is stateless and requires render methods to return React elements. While function components use hooks and are JS functions that return React elements more streamliined

- What are some of the problems that hooks were designed to solve?
excess wrappers, large components, confusing classes