import Link from "next/link"
import { useRouter } from "next/router"
import React, { Children } from "react"

export default function NavLink({
  children,
  as,
  href,
  childClassName = "",
  ...rest
}) {
  const router = useRouter()
  return (
    <Link {...rest} href={href} as={as}>
      <a>
        {React.cloneElement(Children.only(children), {
          className:
            router.pathname === href || router.pathname === as
              ? "active"
              : `${childClassName}`,
        })}
      </a>
    </Link>
  )
}
