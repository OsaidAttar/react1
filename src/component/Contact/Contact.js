import React, { Component } from 'react'
import style from'./Contact.module.css';
export default class Contact extends Component {
  render() {
    return (
      <div>
         <section className='my-5'>
            <div className='container'>
            <h2 className={style.head} >CONTACT ME</h2>
            <div className={style.port}>
               
                <div className={style.line}></div>
<div className={style.icon} ><i class="fa-solid fa-star"></i></div>
<div className={style.line}></div>
                </div>
                <div className='col-md-6 m-auto'>
                <form>
                  <label for='fullName'></label>
                  <input type="text" id='fullName' placeholder="Full name" className={style.formControl} />
                  <label for='Email'></label>
                  <input type="text" id='Email' placeholder="Email address" className={style.formControl} />
                  <label for='Phone'></label>
                  <input type="text" id='Phone' placeholder="Phone number" className={style.formControl} />
                  <label for='Message'></label>
                  <textarea id='Message' placeholder="Message" className={style.message} />
                  <button className="btn btn-primary btn-xl px-4 py-3 fs-5 my-3 disabled">Send</button>
                </form>
                </div>
      </div>
      </section>
      </div>
    )
  }
}
