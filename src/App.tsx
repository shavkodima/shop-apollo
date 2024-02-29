import './App.css';
import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  gql,
} from '@apollo/client';
import AppController from './AppController/AppController';

const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AppController />
    </ApolloProvider>
  );
}

export default App;
