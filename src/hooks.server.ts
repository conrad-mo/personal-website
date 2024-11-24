export async function handle({ event, resolve }) {
	return resolve(event, {
		preload: ({ type, path }) => {
			return type === 'font' && path.endsWith('.woff2');
		}
	});
}
