export default function isPhoneNumber(text) {
	return /^\d{7,15}$/.test(text);
}