export default function PostalCode(text) {
	return /^\d{2}-\d{3}$/.test(text);
}