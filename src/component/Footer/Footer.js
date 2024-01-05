import React, { Component } from 'react'
import style from'./Footer.module.css';
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className={style.foot}>
          <div className={style.foot}>
            <div className='container'>
            <div className='row text-center w-100 m-auto py-5'>
<div className={style.row} class="col-md-4 py-4">
<h4 className={style.head}>LOCATION</h4>
<p className={style.para}>2215 John Daniel Drive <br/> Clark, MO 65243 </p>
</div>
<div className={style.row} class="col-md-4 py-4">
<h4 className={style.head}>AROUND THE WEB</h4>
<ul className={style.ulist}>
<li className={style.llist}><a href="#"  className={style.list}><i class="fa-brands fa-facebook-f"></i></a></li>
<li className={style.llist}><a href="#" className={style.list}> <i class="fa-brands fa-twitter"></i></a></li>
<li className={style.llist}><a href="#" className={style.list}><i class="fa-brands fa-linkedin-in"></i></a></li>
  <li className={style.llist}> <a href="#" className={style.list}><i class="fa-brands fa-dribbble"></i></a></li>

</ul>
</div>
<div className={style.row} class="col-md-4 py-4">
<h4 className={style.head}>ABOUT FREELANCER</h4>
<p className={style.para}>Freelance is a free to use, MIT licensed <br/> Bootstrap theme created by <a href='#' className={style.link}> Start Bootstrap</a>.</p>
</div>
          </div>
          </div>
          </div>
        </footer>
        <div className='copy'>
          <div className={style.copy}>
           <p className={style.cp}>Copyright  &copy;  Your Website 2022</p>
          </div>
        </div>
      </div>
    )
  }
}
