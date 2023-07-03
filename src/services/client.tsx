interface RequestOptions extends RequestInit {
	params?: Record<number | string, number | string>;
}

export function client<T>(
	url: string,
	options: RequestOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}
): Promise<T> {
	const baseUrl = "https://rickandmortyapi.com/api";
	const requestUrl = new URL(baseUrl + url);

	// Add URL parameters
	if (options.params) {
		Object.entries(options.params).forEach(([key, value]) => {
			requestUrl.searchParams.append(key, value.toString());
		});
		delete options.params; // Remove the params property from options
	}

	return fetch(requestUrl.href, options)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Request failed");
			}
			return response.json();
		})
		.catch((error) => {
			console.error("Error:", error);
			return Promise.reject(error);
		});
}
