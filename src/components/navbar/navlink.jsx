"use client";
import React from 'react'
import style from "./navlink.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({linkItem}) => {
    const pathName = usePathname();

  return (
    <Link href={linkItem.path} className={`${style.container} ${pathName === linkItem.path && style.active}`}>
        {linkItem.title}
    </Link>
  )
}

export default NavLink
