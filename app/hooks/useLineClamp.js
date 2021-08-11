export default function useLineClamp(text, n = 20) {
  return text.length > n ? `${text.slice(0, n)}...` : text
}
