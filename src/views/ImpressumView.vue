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
          <strong>
            Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB
            <br />‍<br />
            Webseitenbetreiber:</strong>Lukas Karer<br />
          ‍<strong>Anschrift:</strong> Blümelhuberstraße 9, 4493 Wolfern<br />‍<br />
          <strong>Gewerbeaufsichtbehörde:</strong>
          Bezirkshauptmannschaft Steyr-Land <br />‍<br /><strong>Kontaktdaten:</strong>
          <br />&nbsp;&nbsp;&nbsp;&nbsp;Telefon: +4368118409967 <br />&nbsp;&nbsp;&nbsp;&nbsp;Email:
          lukas@karer.tech <br />‍<br />‍<strong>Anwendbare Rechtsvorschrift:</strong>
          www.ris.bka.gv.at <br /><strong>Berufsbezeichnung:</strong> Informatiker<strong
            ><br /><br />Online Streitbeilegung:</strong
          >
          Verbraucher, welche in Österreich oder in einem sonstigen Vertragsstaat der ODR-VO
          niedergelassen sind, haben die Möglichkeit Probleme bezüglich dem entgeltlichen Kauf von
          Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu
          lösen. Die Europäische Kommission stellt eine Plattform hierfür bereit:
          https://ec.europa.eu/consumers/odr<strong><br /><br />Urheberrecht:</strong> Die Inhalte
          dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten
          (z.B dem Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material,
          welche urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des
          Webseitenbetreibers.<strong><br /><br />Haftungsausschluss:</strong> Trotz sorgfältiger
          inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für
          die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren
          Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden,
          welche auf eine Webseite mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir
          um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.<br />Die
          Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet.
          Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um
          einen entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen werden wir
          den betroffenen Inhalt umgehend entfernen.<br /><br />Quelle:
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
.impressum-content {
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
</style>
