<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <span>
      <p class="strong">{{ $t('contact.title') }}</p>
      <p>
        {{ $t('contact.subtitle') }}
      </p>
    </span>
    <form class="contact-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">{{ $t('contact.form.name') }}</label>
          <input
            type="text"
            id="name"
            name="name"
            :placeholder="$t('contact.form.namePlaceholder')"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">{{ $t('contact.form.email') }}</label>
          <input type="email" id="email" name="email" placeholder="email@example.com" required />
        </div>
        <div class="form-group">
          <label for="phone">{{ $t('contact.form.phone') }}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            :placeholder="$t('contact.form.phonePlaceholder')"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="service">{{ $t('contact.form.service') }}</label>
          <select id="service" name="service" required>
            <option value="">{{ $t('contact.form.servicePlaceholder') }}</option>
            <option value="Website">{{ $t('contact.form.services.website') }}</option>
            <option value="Branding">{{ $t('contact.form.services.branding') }}</option>
            <option value="Hosting">{{ $t('contact.form.services.hosting') }}</option>
            <option value="AI Agents">{{ $t('contact.form.services.aiAgents') }}</option>
            <option value="Consultation">{{ $t('contact.form.services.consultation') }}</option>
            <option value="Other">{{ $t('contact.form.services.other') }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="budget">{{ $t('contact.form.budget') }}</label>
          <select id="budget" name="budget">
            <option value="">{{ $t('contact.form.budgetPlaceholder') }}</option>
            <option value="under-1000">{{ $t("contact.form.budgets['under1000']") }}</option>
            <option value="1000-3000">{{ $t("contact.form.budgets['1000-3000']") }}</option>
            <option value="3000-5000">{{ $t("contact.form.budgets['3000-5000']") }}</option>
            <option value="5000-10000">{{ $t("contact.form.budgets['5000-10000']") }}</option>
            <option value="over-10000">{{ $t("contact.form.budgets['over10000']") }}</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="message">{{ $t('contact.form.message') }}</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            :placeholder="$t('contact.form.messagePlaceholder')"
            required
          ></textarea>
        </div>
      </div>
      <button type="button" class="button-primary" @click="sendEmail">
        {{ $t('contact.form.sendMessage') }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
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
        alert(this.$t('contact.validation.requiredFields'))
        return
      }

      // Create email template
      const subject = this.$t('contact.email.subject', { service })
      const body =
        `${this.$t('contact.email.greeting')}<br />` +
        `${this.$t('contact.email.interest')}<br /><br />` +
        `${this.$t('contact.email.contactInfo')}<br />` +
        `- ${this.$t('contact.form.name')}: ${name}<br />` +
        `- ${this.$t('contact.form.email')}: ${email}<br />` +
        `- ${this.$t('contact.form.phone')}: ${phone || this.$t('contact.email.notProvided')}<br /><br />` +
        `${this.$t('contact.email.projectDetails')}<br />` +
        `- ${this.$t('contact.email.serviceInterest')}: ${service}<br />` +
        `- ${this.$t('contact.email.budgetRange')}: ${budget ? budget + '€' : this.$t('contact.email.notSpecified')}<br />` +
        `- ${this.$t('contact.email.projectDescription')}: ${message}<br /><br />` +
        `${this.$t('contact.email.bestRegards')}<br />${name}`

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
