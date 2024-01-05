import React, { Component } from 'react'
import style from'./About.module.css';

export default class About extends Component {
  render() {
    return (
      <div>
      <section className={style.abo}>
        <div  className={style.abo} class="">
<div className='container'>
  <h2 className={style.word} >ABOUT</h2>
  <div className={style.lineicon}>
<div className={style.line}></div>
<div className={style.icon}><i class="fa-solid fa-star"></i></div>
<div className={style.line}></div>
</div>
  <div className='row'>
  <div className='col-md-4 ms-auto ms-0 p-0'>
    <h3 className= {style.par}>
    Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
    </h3>
    </div>
    <div className='col-md-4 me-auto p-0 m-0'>
    <h3 className= {style.pa}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</h3>
    </div>
  </div>
  
  <div className='text-center my-5   w-100'>
    <a className="btn btn-xl btn-outline-light mb-5 px-5 py-4 w-40 fs-4" ><i class="fa-solid fa-download"></i> Free Download!</a>
    </div>
  
</div>
</div>
      </section>
      </div>
    )
  }
}
