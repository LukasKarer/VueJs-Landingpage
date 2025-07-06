<template>
  <div>
    <span>
      <p class="strong">Get In Touch</p>
      <p>
        Ready to transform your online presence? Let's discuss your project and create something
        amazing together. Drop us a message and we'll get back to you within 24 hours!
      </p>
    </span>
    <form class="contact-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">Full Name or Company</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
            required
          />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number (optional)</label>
          <input type="tel" id="phone" name="phone" placeholder="+43 660 1234567" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="service">Service Interest</label>
          <select id="service" name="service" required>
            <option value="">Select a service</option>
            <option value="Website">Website Development</option>
            <option value="Branding">Brand Design</option>
            <option value="Hosting">Web Hosting</option>
            <option value="Consultation">Consultation</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="budget">Budget Range</label>
          <select id="budget" name="budget">
            <option value="">Select budget range</option>
            <option value="under-1000">Under €1000</option>
            <option value="1000-3000">€1000 - €3000</option>
            <option value="3000-5000">€3000 - €5000</option>
            <option value="5000-10000">€5000 - €10000</option>
            <option value="over-10000">Over €10000</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="message">Project Details</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell us briefly about your project and goals, any specific requirements can be discussed afterwards..."
            required
          ></textarea>
        </div>
      </div>
      <button type="button" class="button-primary" @click="sendEmail">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      }
    }
  },
  methods: {
    sendEmail() {
      // Get form data
      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const phone = document.getElementById('phone').value
      const service = document.getElementById('service').value
      const budget = document.getElementById('budget').value
      const message = document.getElementById('message').value

      // Validate required fields
      if (!name || !email || !service || !message) {
        alert(
          'Please fill in all required fields (Name, Email, Service Interest, and Project Details)'
        )
        return
      }

      // Create email template
      const subject = `New Project Inquiry - ${service}`
      const body =
        `Hello WebKarer Team,<br />` +
        `I'm interested in your services and would like to discuss a project.<br /><br />` +
        `Contact Information:<br />` +
        `- Name: ${name}<br />` +
        `- Email: ${email}<br />` +
        `- Phone: ${phone || 'Not provided'}<br /><br />` +
        `Project Details:<br />` +
        `- Service Interest: ${service}<br />` +
        `- Budget Range: ${budget + '€' || 'Not specified'}<br />` +
        `- Project Description: ${message}<br /><br />` +
        `I look forward to hearing from you!<br />` +
        `Best regards,<br />${name}`

      // Create mailto link
      const mailtoLink = `mailto:inquiry@karer.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      console.log(mailtoLink)

      // Open default email client
      window.location.href = mailtoLink
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  place-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: $font-family;
  background-color: $bg-secondary;
  margin: 1rem;
  border-radius: 1rem;
  text-align: center;

  span {
    margin: 2rem auto 1rem auto;

    p {
      font-size: 1.25rem;
      color: $text-secondary;
      width: 60vw;
      margin-bottom: 1rem;
    }
    p.strong {
      font-size: 2rem;
      color: $text-primary;
      margin-bottom: 1rem;
    }
  }
}

.contact-form {
  width: 100%;
  margin: 1rem 0 2rem 0;
  max-width: 50vw;
  text-align: left;

  @media (max-width: 1200px) {
    max-width: 60vw;
  }

  @media (max-width: 1000px) {
    max-width: 70vw;
  }

  @media (max-width: 800px) {
    max-width: 80vw;
  }

  .form-row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 1400px) {
      flex-direction: column;
      gap: 0;
    }

    .form-group {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: $text-primary;
        font-size: 1rem;
      }

      input,
      select,
      textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid $bg-tertiary;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-family: inherit;
        background-color: $bg-tertiary;
        transition: border-color 0.3s ease;

        &:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }

        &::placeholder {
          color: #6c757d;
        }
      }

      textarea {
        resize: vertical;
        min-height: 120px;
      }
    }
  }
  .button-primary {
    margin: 2rem auto 1rem !important;
    display: block;
    width: 100%;
    max-width: 200px;
    padding: 1rem 2rem;
    background-color: $bg-tertiary;
    color: $text-primary;
    font-family: inherit;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
}
</style>
