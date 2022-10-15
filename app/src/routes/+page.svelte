<script>

import { request, gql } from 'graphql-request'
    const query = gql`
      query all_catalog {
        catalog {
            id
            value
            is_active
            created_at
            updated_at
            parent: parentable {
                ... on Menu {
                    id
                    value
                }
            }
        }
    }
`
const pay = async () => {
      const response = await request('http://127.0.0.1:8001/graphql/', query);
      console.log(response);
  }
  pay();
</script>



<h1>Welcome to SvelteKit</h1>
<p class="text-red-800">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- {data.contentTest.content.myTest2} -->