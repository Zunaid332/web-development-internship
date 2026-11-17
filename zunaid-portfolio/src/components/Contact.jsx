import './Contact.css'
import { useState } from 'react'
import { FiSend } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { profile } from '../data'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('https://formspree.io/f/mnpdjoyp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setStatus('Message sent, thank you!')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Something went wrong, please try again.')
      }
    } catch (error) {
      setStatus('Something went wrong, please try again.')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionHeader
          title="Contact"
          subtitle="I'm currently looking for internship opportunities"
        />

        <div className="contact-wrap">
          <h3 className="send-title">Send Me A Message</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <label>
                Your name *
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Your email *
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label>
              Your message *
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <button type="submit" className="btn-fill">
              Send Message <FiSend />
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
