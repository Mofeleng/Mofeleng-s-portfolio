import React from 'react'

function ContactForm() {
  return (
    <form>
        <input type="text" placeholder='Your name'/>
        <input type="text" placeholder='Your email'/>
        <textarea placeholder={`Hey. I'd like us to work together on...`}></textarea>
        <button className="btn btn_black">Send message</button>
    </form>
  )
}

export default ContactForm