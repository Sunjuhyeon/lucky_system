import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <header id='header' className={scrollPosition < 10 ? '' : 'scroll'}>
      <div className='w_set'>
        <div className='hd_wrap'>
          <h1 className='logo'>
            <a href="#">
              <img src={require('../assets/images/img/logo.png')} alt="럭키시스템(주) 로고"/>
            </a>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/intro">회사 소개</Link>
              </li>
              <li>
                <a href="#">서비스 소개</a>
              </li>
              <li>
                <a href="#">견적 문의</a>
              </li>
            </ul>
            <a href="#" className='btn color_1'>빠른 전화상담</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
