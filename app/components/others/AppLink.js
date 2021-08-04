import Link from "next/link"

export default function AppLink({ href, children, ...otherProps }) {
  return (
    <Link href={href} {...otherProps}>
      <a>{children}</a>
    </Link>
  )
}
