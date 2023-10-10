<script>
  import ComparisionTable from "$lib/components/Pricing/ComparisionTable.svelte";
  import Faq from "$lib/components/Pricing/Faq.svelte";
  import Hero from "$lib/components/Pricing/Hero.svelte";
  import { createGraphQLClient } from "$lib/utilities/GraphqlClient";
  import { pricingPage_query } from "$lib/utilities/queries";
  import { createQuery } from "@tanstack/svelte-query";

  let pricingPage;
  const client = createGraphQLClient(fetch);
  const rawData = createQuery(['pricing'], async () => await client.request(pricingPage_query))
  $: pricingPage = $rawData.data?.data.pricingPages.data[0].attributes
  $: console.log("pricing page: ", pricingPage)
</script>

<div class="overflow-hidden">
  <Hero data={pricingPage} />
</div>
<hr />

<ComparisionTable />
<hr />

{#if pricingPage}
  {#each pricingPage?.sections as section}
    {#if "component_type_Faq" in section && section["component_type_Faq"] === "Faq"}
      <Faq data={section}/>
      <hr />
    {/if}
  {/each}
{/if}


