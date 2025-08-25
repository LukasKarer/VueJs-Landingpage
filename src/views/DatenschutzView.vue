<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { AnalyticsClient } from 'tslib-analytics-client';

new AnalyticsClient({
  endpoint: 'http://localhost:3000/api', // Your backend URL
  projectId: '687074760036a83a7cb6'
}).sendAnalytics({clientEndpoint: '/impressum'});

useHead({
  title: 'WebKarer | Datenschutz',
  meta: [
    {
      name: 'description',
      content: 'Datenschutzerklärung und Hinweise zum Datenschutz bei WebKarer.'
    },
    { property: 'og:title', content: 'WebKarer | Datenschutz' },
    {
      property: 'og:description',
      content: 'Datenschutzerklärung und Hinweise zum Datenschutz bei WebKarer.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.karer.tech/datenschutz' },
    { property: 'og:locale', content: 'de_DE' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<template>
  <div>
    <Navbar />
    <main class="datenschutz-content">
      <div class="container">
        <h1>Datenschutzerklärung</h1>
        <section>
          In folgender Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der
          Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten personenbezogene
          Daten nur auf Grundlage der gesetzlichen Bestimmungen (Datenschutzgrundverordnung,
          Telekommunikationsgesetz 2003).<br />Sobald Sie als Benutzer auf unsere Webseite zugreifen
          oder diese besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der Sitzung
          erfasst. Dies ist technisch bedingt und stellt somit ein berechtigtes Interesse iSv Art 6
          Abs 1 lit f DSGVO.<br /><br /><strong>Kontakt mit uns<br />‍</strong>Wenn Sie uns,
          entweder über unser Kontaktformular auf unserer Webseite, oder per Email
          kontaktieren,&nbsp;dann werden die von Ihnen an uns übermittelten Daten zwecks Bearbeitung
          Ihrer Anfrage oder für den Fall von weiteren Anschlussfragen für sechs Monate bei uns
          gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe Ihrer übermittelten
          Daten.<br />‍<br /><strong>Cookies</strong><br />Unsere Website verwendet so genannte
          Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem
          Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser
          Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät
          gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten
          Besuch wiederzuerkennen. Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so
          einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im
          Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität unserer
          Website eingeschränkt sein.<br />‍<br /><strong>Google Fonts</strong><br />Unsere Website
          verwendet Schriftarten von „Google Fonts“. <br />Der Dienstanbieter dieser Funktion ist:
          <br />
          &nbsp;&nbsp;&nbsp;Google Ireland Limited Gordon House, Barrow Street Dublin 4. Ireland
          <br />
          &nbsp;&nbsp;&nbsp;Tel: +353 1 543 1000<br />Beim Aufrufen dieser Webseite lädt Ihr Browser
          Schriftarten und speichert&nbsp;diese in den Cache. Da Sie, als Besucher der Webseite,
          Daten des Dienstanbieters empfangen kann Google unter Umständen Cookies auf Ihrem Rechner
          setzen oder analysieren.<br />‍<br />Die Nutzung von „Google-Fonts“ dient der Optimierung
          unserer Dienstleistung&nbsp;und der einheitlichen Darstellung von Inhalten. Dies stellt
          ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.<br />‍<br />Weitere
          Informationen zu Google Fonts erhalten Sie unter folgendem Link:
          <a href="https://developers.google.com/fonts/faq"
            ><br />https://developers.google.com/fonts/faq<br />‍</a
          >Weitere Informationen über den Umgang mit Nutzerdaten von Google können Sie der
          Datenschutzerklärung entnehmen:
          <a href="https://policies.google.com/privacy?hl=de"
            >https://policies.google.com/privacy?hl=de<br />‍</a
          >Google verarbeitet die Daten auch in den USA, hat sich jedoch dem EU-US Privacy-Shield
          unterworfen.<br />‍<a href="https://www.privacyshield.gov/EU-US-Framework"
            >https://www.privacyshield.gov/EU-US-Framework<br /><br />‍</a
          ><strong>Server-Log Files</strong><br />Diese Webseite und der damit verbundene Provider
          erhebt im Zuge der Webseitennutzung automatisch Informationen im Rahmen sogenannter
          „Server-Log Files“. <br />Dies betrifft insbesondere:<br />&nbsp;&nbsp;&nbsp;&nbsp;IP-Adresse
          oder Hostname<br />&nbsp;&nbsp;&nbsp;&nbsp;den verwendeten Browser<br />&nbsp;&nbsp;&nbsp;&nbsp;Aufenthaltsdauer
          auf der Webseite sowie Datum und Uhrzeit<br />&nbsp;&nbsp;&nbsp;&nbsp;aufgerufene Seiten
          der Webseite<br />&nbsp;&nbsp;&nbsp;&nbsp;Spracheinstellungen und Betriebssystem<br />&nbsp;&nbsp;&nbsp;&nbsp;„Leaving-Page“
          (auf welcher URL hat der Benutzer die Webseite verlassen)<br />&nbsp;&nbsp;&nbsp;&nbsp;ISP
          (Internet Service Provider)<br />Diese erhobenen Informationen werden nicht
          personenbezogen verarbeitet oder mit personenbezogenen Daten in Verbindung gebracht.
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />Der Webseitenbetreiber behält es sich vor,
          im Falle von Bekanntwerden rechtswidriger Tätigkeiten, diese Daten auszuwerten oder zu
          überprüfen. &nbsp; <br /><br /><strong>Ihre Rechte als Betroffener</strong><br />Sie als
          Betroffener haben bezüglich Ihrer Daten, welche bei uns gespeichert sind grundsätzlich ein
          Recht auf:<br />&nbsp;&nbsp;&nbsp;&nbsp;Auskunft<br />&nbsp;&nbsp;&nbsp;&nbsp;Löschung der
          Daten<br />&nbsp;&nbsp;&nbsp;&nbsp;Berichtigung der Daten<br />&nbsp;&nbsp;&nbsp;&nbsp;Übertragbarkeit
          der Daten<br />&nbsp;&nbsp;&nbsp;&nbsp;Wiederruf und Widerspruch zur Datenverarbeitung<br />&nbsp;&nbsp;&nbsp;&nbsp;Einschränkung<br /><br />Wenn
          sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das
          Datenschutzrecht passiert sind, so haben Sie die Möglichkeit sich bei uns
          (lukas@karer.tech) oder der Datenschutzbehörde zu beschweren.<br /><br />Sie erreichen uns
          unter folgenden Kontaktdaten:<strong><br /><br />Webseitenbetreiber:</strong> Lukas
          Karer<br /><strong>Telefonnummer:</strong> +4368118409967<br /><strong>Email:</strong>
          lukas@karer.tech<br />‍<br />Quelle:
          <a href="https://www.rechtstexte-generator.at/dsgvo-generator-oesterreich/"
            ><strong>Datenschutz DSGVO Generator</strong></a
          >
          in Kooperation mit
          <a href="https://www.ortner-rechtsanwalt.at/"><strong>Rechtsanwalt Wien</strong></a>
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
  margin: 5rem auto 0 auto;
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

strong {
  color: $text-primary;
  line-height: 1.5rem;
  font-weight: bold;
}

section {
  margin-bottom: 2rem;
}
</style>
