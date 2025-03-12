export const fetcher = (url) => fetch(url).then((r) => r.json());

export const fetcherText = (url) => fetch(url).then((r) => r.text());
