import React, { Component } from 'react'
import style from'./Header.module.css';
import img from '../../image/avataaars.svg'
export default class Header extends Component {
  render() {
    return (
      <div>
        <header className={style.header} class="text-white text-center w-100 ">
            <container>
<img src={img}  className={style.imgs}></img>
<h1 className={`${style.name} divider-success` } >START BOOTSTRAP </h1>
<div className={`${style.lineicon}`}>
<div className={style.line}></div>
<div className={style.icon}><i class="fa-solid fa-star"></i></div>
<div className={style.line}></div>
</div>
<h3 className="my-5">Graphic Artist - Web Designer - Illustrator</h3>
            </container>
        </header>
      </div>
    )
  }
}
