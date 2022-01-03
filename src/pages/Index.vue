<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-2">Moin!<span class="emoji">👋</span></h1>
        <p class="subtitle">
          Ich bin <span class="highlight">Lukas</span>. Ich begeistere mich für Technik aller Art. <br/> In meiner Freizeit arbeite ich an diversen Projekten. 
          <span class="location"
            ><font-awesome :icon="['fas', 'map-marker-alt']" />
            <strong>Erdling</strong> - Bremen, Deutschland</span
          >
        </p>
        <SafeEmail class="button is-primary is-inline-block">
          Schreib mir!
        </SafeEmail>

        <div class="social-contacts">
          <!--<a
            href="/lukas_strutz_resume.pdf"
            target="_blank"
            aria-label="Curriculum Vitae"
            ><font-awesome :icon="['fas', 'file-pdf']"
          /></a>-->
          <a
            href="https://github.com/AntonMC-Github"
            target="_blank"
            rel="noopener"
            aria-label="Folge mir auf Github"
            ><font-awesome :icon="['fab', 'github']"
          /></a>
          <a
            href="https://twitter.com/_AntonMC_"
            target="_blank"
            rel="noopener"
            aria-label="Folge mir auf Twitter"
            ><font-awesome :icon="['fab', 'twitter']"
          /></a>
          <!--<a
            href="https://www.linkedin.com/in/lukas-strutz/?locale=de_DE"
            target="_blank"
            rel="noopener"
            aria-label="Linkedin"
            ><font-awesome :icon="['fab', 'linkedin-in']"
          /></a>-->
        </div>
      </div>
    </section>
    <script type="application/ld+json">
      {
        "@context": "http://schema.org/",
        "@type": "Person",
        "name": "Lukas Strutz",
        "alternateName": "Lukas Strutz, Bremen",
        "url": "https://lukasstrutz.de",
        "sameAs": [
          "https://twitter.com/_AntonMC_",
          "https://github.com/AntonMC-Github",
          "https://lukasstrutz.de"
        ],
        "jobTitle": "Schüler",
        "worksFor": {
          "@type": "Organization",
          "name": "Gymnasium Vegesack"
        }
      }
    </script>
  </Layout>
</template>

<script>
import SafeEmail from "~/components/SafeEmail";

export default {
  metaInfo: {
    title: "lukasstrutz"
  },
  components: {
    SafeEmail
  },
  mounted: function() {
    console.info(
      "Hey ^^, hier gibts nichts zu sehen aber schau dir gerne die Grundlage dieser Website an: https://github.com/bastienwirtz/b4bz.io"
    );
  }
};
</script>

<style lang="scss" scoped>
.subtitle {
  padding-top: 0.5rem;
}
.location {
  display: block;
  margin: 0.8rem 0 1.5rem 0;
  font-size: 0.8rem;
  color: #878b8f;
  svg {
    margin-right: 3px;
  }
}

.emoji {
  margin-left: 3px;
  font-size: 2.2rem;
}

.social-contacts {
  display: inline-block;
  a {
    font-size: 1.4rem;
    padding: 1rem 0.5rem;

    &:first-child {
      padding-left: 1.3rem;
    }
  }
}
</style>
