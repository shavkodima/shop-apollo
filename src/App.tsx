import './App.css';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import AppController from './AppController/AppController';

const client = new ApolloClient({
  uri: 'http://localhost:3000/',
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
