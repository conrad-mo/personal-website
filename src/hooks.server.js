export const handle = async ({ event, resolve }) => {
	return resolve(event, {
		preload: ({ type, path }) => {
			return type === 'font' && path.endsWith('.woff2');
		}
	});
};
