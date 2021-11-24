## File Structure
File structure for this application inspired by these posts:
[https://stackoverflow.com/questions/41788679/domain-driven-design-for-node-js](https://stackoverflow.com/questions/41788679/domain-driven-design-for-node-js)
[https://laracasts.com/discuss/channels/general-discussion/folder-and-namespace-structure-with-ddd](https://laracasts.com/discuss/channels/general-discussion/folder-and-namespace-structure-with-ddd)

Specifically note the following:

### App Namespace
Validator classes, service providers base models, etc

This is what I would consider the primary point of integration between my business logic, infrastructure logic, and application ports (web, REST API, CLI). This is where I configure all of my dependency injection and store classes that are extended by the domain code without having any domain logic themselves. As a general rule, most of these classes will be abstract.

- Creating a BaseModel class that provides shared functionality to my entities
- Creating specific application-level services (not domain services)
- Creating abstract classes used by the various ports, for example an ApiController that has helper methods to transform responses, return API-specific error codes, embed meta information, etc

### Domain Namespace
All of my business logic, such as entities, repository interfaces, and domain services

### Infrastructure Namespace
All of the persistence logic. That includes repository implementations, cache decorators, etc

### Ports
And in addition to those, I have at least one "port" namespace. For a typical web app it would be Http, for a REST API it would be Api, for artisan commands it would be Cli.
