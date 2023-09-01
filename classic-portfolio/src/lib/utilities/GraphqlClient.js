import { PUBLIC_STRAPI_BASE_URL } from "$env/static/public";

class GraphQLClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async request(query) {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Accept-Encoding': 'gzip, deflate, br',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Connection': 'keep-alive',
          'DNT': '1',
          'Origin': this.endpoint,
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Fetch error:', error);
    }
  }
}

// Example usage
const graphqlEndpoint = PUBLIC_STRAPI_BASE_URL + "/graphql";
export const client = new GraphQLClient(graphqlEndpoint);
