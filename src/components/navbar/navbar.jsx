import React from 'react'
import "./navbar.css"
import NavLink from './navlink';

const Navbar = () => {
    const pageLinkList = [
        { title: 'Home', path: '/' },
        { title: 'Product', path: '/products' },
        { title: 'Cart', path: '/cart' }
    ];

  return (
    <div className='navbar-layout'>
      <div>Logo</div>
      <div className='page-link-layout'>
        {pageLinkList.map((pageLink) => (
            <NavLink linkItem={pageLink} key={pageLink.title}/>
        ))}
      </div>
    </div>
  )
}

export default Navbar
