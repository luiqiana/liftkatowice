export default function CountrycodeValidator(text) {
	return /^\+\d{0,4}$/.test(text);
}