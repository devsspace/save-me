export default function useLineClamp(text, n = 12) {
  return text.length > n ? `${text.slice(0, n)}...` : text
}
