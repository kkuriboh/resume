import * as prismic from '@prismicio/client'

export function getPrismicClient() {
	const endpoint = prismic.getEndpoint(process.env.PRISMIC_API_ENDPOINT!)
	const client = prismic.createClient(endpoint, {
		accessToken: process.env.PRISMIC_ACCESS_TOKEN,
		fetch,
	})

	return client
}
