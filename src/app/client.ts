import { ApolloClient } from 'apollo-client';

import InBrowserNetworkInterface from './in-browser-network-interface';
import schema from './schema';

const networkInterface = new InBrowserNetworkInterface({ schema });

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: r => r['id'],
});

export function provideClient(): ApolloClient {
  return client;
}
