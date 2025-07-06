<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <main class="impressum-content">
      <div class="container">
        <h1>Impressum</h1>
        <section>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>WebKarer</strong><br />
            [Ihre Adresse]<br />
            [PLZ und Ort]
          </p>

          <h3>Vertreten durch:</h3>
          <p>[Name des Vertretungsberechtigten]</p>

          <h3>Kontakt:</h3>
          <p>
            Telefon: [Ihre Telefonnummer]<br />
            E-Mail: [Ihre E-Mail-Adresse]
          </p>

          <h3>Registereintrag:</h3>
          <p>
            Eintragung im Handelsregister<br />
            Registergericht: [Registergericht]<br />
            Registernummer: [Registernummer]
          </p>

          <h3>Umsatzsteuer-ID:</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            [Ihre USt-IdNr.]
          </p>

          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
          <p>
            [Name des Verantwortlichen]<br />
            [Adresse des Verantwortlichen]
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.impressum-content {
  min-height: 60vh;
  padding: 2rem 1rem;
  background-color: $bg;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: $bg-secondary;
  border-radius: 1rem;
  color: $text-primary;
  font-family: $font-family;
}

h1 {
  color: $text-primary;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

h2 {
  color: $color-secondary;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

h3 {
  color: $text-primary;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

strong {
  color: $color-secondary;
}
</style>
