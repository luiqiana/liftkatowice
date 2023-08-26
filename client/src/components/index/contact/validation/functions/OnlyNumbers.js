export default function OnlyNumbers(text) {
	return /^\d+$/.test(text);
}