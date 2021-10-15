import {ApolloClient,InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
	uri:"https://concise-bug-28.hasura.app/v1/graphql",
	cache: new InMemoryCache(),
	headers:{
		"x-hasura-admin-secret":
		"zc0N77JxuGIOjIhZ7axFXMQHm8DC2U2jCLE1i5ADp4Jbpa7Hdt1yza9kFG7F5EYh"
	}
})

export default client