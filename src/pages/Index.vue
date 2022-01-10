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
            aria-label="Lebenslauf"
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
          <a
            href="linkedin.com/in/lukas-strutz-986a36185"
            target="_blank"
            rel="noopener"
            aria-label="Linkedin"
            ><font-awesome :icon="['fab', 'linkedin-in']"
          /></a>
        </div>
      </div>
    </section>
    
    <div v-html="message" data-pagespeed-no-transform></div>
    <!--<script type="application/ld+json">
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
    </script>-->
  </Layout>
</template>

<script>
import SafeEmail from "~/components/SafeEmail";

export default {
  metaInfo: {
    title: "Lukas Strutz - Bremen",
    meta: [
      {name: "description", content: "Moin! Ich bin Lukas. Ich begeistere mich für Technik aller Art. In meiner Freizeit arbeite ich an diversen Projekten. Hier findest du meine Social Media Accounts und kannst mich kontaktieren." },
      // twitter-card: https://cards-dev.twitter.com/validator
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:description", content: "Moin! Ich bin Lukas. Ich begeistere mich für Technik aller Art. In meiner Freizeit arbeite ich an diversen Projekten. Hier findest du meine Social Media Accounts und kannst mich kontaktieren." },
      { name: "twitter:title", content: "Lukas Strutz - Bremen" },
      { name: "twitter:site", content: "@_AntonMC_" },
      { name: "twitter:image", content: "" }, //TODO: Image
      { name: "twitter:creator", content: "@_AntonMC_" },
      //og
      { name: "og:type", content: "profile" },
      { name: "og:title", content: "Lukas Strutz" },
      { name: "og:url", content: "https://lukasstrutz.de" },
      { name: "og:image", content: "" }, //TODO: Image
      { name: "profile:first_name", content: "Lukas" },
      { name: "profile:last_name", content: "Strutz" },
      { name: "og:site_name", content: "Lukas Strutz - Bremen" },
      { name: "og:description", content: "Moin! Ich bin Lukas. Ich begeistere mich für Technik aller Art. In meiner Freizeit arbeite ich an diversen Projekten. Hier findest du meine Social Media Accounts und kannst mich kontaktieren." }
    ],
    script: [
      { src: "https://www.googletagmanager.com/gtag/js?id=G-G79BPZ49EE", async:true},
      { vmid: 'tag-manager', innerHTML: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-G79BPZ49EE');"}
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'schema': ['innerHTML']
    }
  },
  components: {
    SafeEmail
  },
  data() {
    return {
      message: '<script type=\"application/ld+json\"> \
      { \
        \"@context\": \"http://schema.org/\", \
        \"@type\": \"Person\", \
        \"name\": \"Lukas Strutz\", \
        \"alternateName\": \"Lukas Strutz, Bremen\", \
        \"url\": \"https://lukasstrutz.de\", \
        \"sameAs\": [ \
          \"https://twitter.com/_AntonMC_\", \
          \"https://github.com/AntonMC-Github\", \
          \"https://lukasstrutz.de\" \
        ], \
        \"jobTitle\": \"Schüler\", \
        \"worksFor\": { \
          \"@type\": \"Organization\", \
          \"name\": \"Gymnasium Vegesack\" \
        } \
      } \
    <\/script>'
    }
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
