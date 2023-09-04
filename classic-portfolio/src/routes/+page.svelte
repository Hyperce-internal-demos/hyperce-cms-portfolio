<script>
  import Clients from "$lib/components/Clients.svelte";
  import FeatureCard from "$lib/components/Home/FeatureCard.svelte";
  import Hero from "$lib/components/Home/Hero.svelte";
  import Testimonials from "$lib/components/Home/Testimonials.svelte";
  import Blogs from "$lib/components/Home/Blogs.svelte";
  import FeaturesGeneral from "$lib/components/Home/FeaturesGeneral.svelte";
  import ClientCallback from "$lib/components/Home/ClientCallback.svelte";
  import { createGraphQLClient } from "$lib/utilities/GraphqlClient";
  import { createQuery } from "@tanstack/svelte-query";
  import { landingPage_query } from "$lib/utilities/queries";

  let landingPage;
  const client = createGraphQLClient(fetch);
  const landingPageRawData = createQuery(['landingPage'], async () => await client.request(landingPage_query))

  $: landingPage = $landingPageRawData?.data?.data.landingPages.data[0].attributes
  $: console.log("landing me: ", landingPage)

</script>

{#if landingPage}
  {#each landingPage.sections as section}
    {#if section.component_type || section.componentType}
      {#if section.component_type == "Hero" || section.componentType == 'Hero'}
        <Hero data={section} />
      {:else if section.component_type === 'FeatureCards' || section.componentType === 'FeatureCards'}
        <FeatureCard data={section} />
      {:else if section.component_type || section.componentType === 'FeaturesGeneral'}
        <FeaturesGeneral data={section} />
      {:else if section.component_type || section.componentType === 'Clients'}
        <Clients data={section} />
      {:else if section.component_type || section.componentType === 'testimonial'}
        <Testimonials data={section} />
      {:else}
        <!-- Handle other cases as needed -->
      {/if}
    {/if}
  {/each}
{/if}




<hr />
<Blogs />
<ClientCallback />