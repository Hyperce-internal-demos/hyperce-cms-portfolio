import { client } from "$lib/utilities/GraphqlClient";

export async function load() {
  try {
    const query = `query{
        aboutPage(id: 1) {
          data{
            attributes{
              hero {
                id
                title
                description
                button{
                  placeholder
                  redirect_link
                  phrase
                }
                media{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
              heading
              content
            }
          }
        }
      }`;

    const data = await client.request(query);

    return data.data
  } catch (error) {
    console.log("error: ", error)
    return {
      status: 500,
      error: 'Internal Server Error',
    };
  }
}
