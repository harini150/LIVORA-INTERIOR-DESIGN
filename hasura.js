const HASURA_URL = "https://livora.hasura.app/v1/graphql";

async function hasuraQuery(query, variables = {}) {
    const response = await fetch(HASURA_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    });

    const result = await response.json();

    if (result.errors) {
        console.error(result.errors);
        throw new Error(result.errors[0].message);
    }

    return result.data;
}