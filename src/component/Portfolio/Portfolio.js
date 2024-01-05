import React, { Component } from 'react'
import style from'./portfolio.module.css';
import imgOne from '../../image/cabin.png'
import imgCake from '../../image/cake.png'
import imgCir from '../../image/circus.png'
import imgGame from '../../image/game.png'
import imgSub from '../../image/submarine.png'
import imgSafe from '../../image/safe.png'
export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <section className='my-5'>
            <div className='container'>
            <h2 className={style.head} >PORTFOLIO</h2>
            <div className={style.port}>
               
                <div className={style.line}></div>
<div className={style.icon} ><i class="fa-solid fa-star"></i></div>
<div className={style.line}></div>
                </div>
                <div className='row'>
                  <div  className='col-md-4 mb-5 '>
                <img src={imgOne} className={style.imgs}></img>
                </div>
                <div className='col-md-4 mb-5 '>
                <img src={imgCake} className={style.imgs}></img>
                </div>
                <div className='col-md-4 mb-5 '>
                <img src={imgCir} className={style.imgs}></img>
                </div>
                <div className='col-md-4 mb-5 '>
                <img src={imgGame} className={style.imgs}></img>
                </div>
                <div className='col-md-4 mb-5 '>
                <img src={imgSub} className={style.imgs}></img>
                </div>
                <div className='col-md-4 mb-5 '>
                <img src={imgSafe} className={style.imgs}></img>
                </div>
                </div>
            
            </div>
        </section>
      </div>
    )
  }
}
