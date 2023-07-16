export default function EmailValidator(text) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
}