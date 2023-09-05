<script>
  import Clients from "$lib/components/Home/Clients.svelte";
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
      {#if "component_type_Hero" in section && section["component_type_Hero"] === "Hero"}
        <Hero data={section} />
      {:else if "component_type_FeatureCards" in section && section["component_type_FeatureCards"] === "FeatureCards"}
        <FeatureCard data={section} />
      {:else if "component_type_FeaturesGeneral" in section && section["component_type_FeaturesGeneral"] === "FeaturesGeneral"}
        <FeaturesGeneral data={section} />
      {:else if "component_type_Clients" in section && section["component_type_Clients"] === "Clients"}
        <Clients data={section} />
      {:else if "component_type_Testimonial" in section && section["component_type_Testimonial"] === "Testimonials"}
        <Testimonials data={section} />
        <hr />
      {:else if "component_type_ClientCallback" in section && section["component_type_ClientCallback"] === "ClientCallback"}
      <Blogs />
        
      <ClientCallback data={section} />
      {:else}
        <!-- Handle other cases as needed -->
    {/if}
  {/each}
{/if}
