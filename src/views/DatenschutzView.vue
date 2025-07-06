<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <main class="datenschutz-content">
      <div class="container">
        <h1>Datenschutzerklärung</h1>
        <section>
          <h2>1. Datenschutz auf einen Blick</h2>

          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten können Sie dem Abschnitt "Hinweis zur Verantwortlichen Stelle" in dieser
            Datenschutzerklärung entnehmen.
          </p>

          <h3>Wie erfassen wir Ihre Daten?</h3>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
            es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
            durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>

          <h3>Wofür nutzen wir Ihre Daten?</h3>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
            gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>

          <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
            Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
            die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
            Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
            widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung
            der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </p>
        </section>

        <section>
          <h2>2. Hosting</h2>
          <p>Wir hosten unsere Website bei [Name des Hosting-Providers].</p>
        </section>

        <section>
          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3>SSL- bzw. TLS-Verschlüsselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
            Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
            daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an
            dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.datenschutz-content {
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

section {
  margin-bottom: 2rem;
}
</style>
