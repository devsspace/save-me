# how-to-setup-graphql-nextjs-tailwindcss-app

1. Install Tailwind template `npx create-next-app -e with-tailwindcss my-project`
2. `npm install graphql express-graphql`
    It works like this 
```js
// /pages/api/graphql.js
// Browse : /api/graphql
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const schema = buildSchema(`
    type Todo {
        id: ID!
        title: String
        isCompleted: Boolean 
    }
    type RootQuery {
        todos: [Todo!]!
    }
    type RootMutation {
        createTodo(title: String , isCompleted: Boolean ): Todo
    }
    schema {
        query: RootQuery,
        mutation : RootMutation
    }
`);

const todos = [{id: 1,title: "GraphQL Next.js" , isCompleted: false}]

const rootValue = {
    todos: (args , req) => {
        return todos;
    },
    createTodo: (args , req) => {
        let todo = {
            id : Math.floor(Math.random() * 1000),
            title: args.title,
            isCompleted: args.isCompleted
        }
        todos.unshift(todo);
        return todo;
    },
}
const GraphQL = graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
});

export default GraphQL;
```
3. Wrap GraphQL with middleware 
  Create middleware function like this
    
```js
  // use on /graphql/middleware/isAuth.js
    const authenticateToken = handler => (req, res) => {
        req.user = {
            id: 5,
            name: "tested middleware",
            email: "Samu@gmail.com"
        }
        return handler(req, res)
    }
    // use like this 
    const GraphQL = graphqlHTTP({  })
    export default authenticateToken(GraphQL);

```


1. Works :smile: