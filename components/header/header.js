"use client";

import Link from 'next/link'
import styles from './header.module.css'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

export default()=>{

  let route = useRouter();

  let searchRef = useRef();

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <h1 className={styles.hello}>FSD</h1>
      </Link>

    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/login">
            login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/signup">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/users">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/cart">
            Cart
          </Link>
        </li>
      </ul>      
        <input
        ref={searchRef}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={()=>{

        route.push('/search?q='+searchRef.current.value)

        }} className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>      
    </div>
  </nav>
  

}