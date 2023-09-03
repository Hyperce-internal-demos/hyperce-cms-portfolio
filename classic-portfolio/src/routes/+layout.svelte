<script lang="ts">
  import "../styles/global.css";
  import Meta from "$lib/components/Meta.svelte";
  import { SITE } from "$lib/utilities/config";
  import Navigation from "$lib/components/Navigation.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { QueryClientProvider } from '@tanstack/svelte-query'

  export let data;

</script>

<Meta
  title="Hyperce"
  openGraph={{
    title: SITE.name,
    url: SITE.website,
    description: SITE.description,
    images: [
      {
        alt: `${SITE.name} logo`,
        url: `${SITE.website}/logo.svg`
      }
    ],
    site_name: SITE.name
  }}
  twitter={{
    handle: "@handle",
    title: SITE.name,
    cardType: "summary",
    site: SITE.website,
    description: SITE.description,
    image: `${SITE.website}/logo.svg`,
    imageAlt: `${SITE.name} logo`
  }}
  facebook={{}}
  additionalMetaTags={{}} 
/>

<QueryClientProvider client={data.queryClient}>
  <Navigation />
  <slot />
  <Footer />
</QueryClientProvider>
