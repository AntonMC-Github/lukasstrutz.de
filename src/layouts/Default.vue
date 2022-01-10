<template>
  <div
    :class="{
      'is-dark': overrideDark === true,
      'is-light': overrideDark === false
    }"
  >
    <header>
      <strong>
        <g-link to="/"
          ><font-awesome :icon="['fas', 'code']" />
          {{ $static.metadata.siteName }}</g-link
        >
      </strong>

      <a
        href="#"
        @click.prevent="toggleTheme()"
        aria-label="Dark-Mode"
        ><font-awesome :icon="['fas', 'adjust']"
      /></a>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      meta: [
        {
          name: "theme-color",
          content: this.isDark ? "#1b1b1b" : "#f5f5f5"
        }
      ]
    };
  },
  data: function() {
    return {
      overrideDark: null,
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
    };
  },
  computed: {
    isDark: function() {
      if (process.isServer) {
        // matchMedia will not work server side
        // default is light mode
        return false;
      }

      return this.overrideDark !== null
        ? this.overrideDark
        : matchMedia("(prefers-color-scheme: dark)").matches;
    }
  },
  methods: {
    toggleTheme: function() {
      this.overrideDark = !this.isDark;
    }
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}

body {
  font-family: $family-sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  height: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: $family-monospace;
  }

  header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
