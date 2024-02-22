import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label>9571107999</label>
            {/* <i className='fa fa-envelope'></i>
            <label> antsharma02@gmail.com</label> */}
            <a href="mailto:antsharma02@gmail.com" className="email-button">
             <i className="fa fa-envelope"></i>
             <span style = {{color: 'white'}}>antsharma02@gmail.com</span>
            </a>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
