<script>
  import { PUBLIC_STRAPI_BASE_URL } from "$env/static/public";

  export let data;
</script>

<!-- Clients -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-10" id="clients-section">
    <!-- Title -->
    <div class="w-2/3 sm:w-1/2 lg:1/3  mx-auto text-center mb-6">
      <h2 class="text-gray-600 font-medium text-xl dark:text-gray-400">
        {data?.ClientsHeading}
      </h2>
    </div>
    <!-- End Title -->
  
    <div class="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24 items-center">
      {#each data?.clients_logo.data as item}
      <img src={PUBLIC_STRAPI_BASE_URL + item.attributes.url} alt={item.attributes.alternativeText ?? "image"} class="w-24 h-full saturate-[0] transition hover:saturate-100 hover:scale-105 ease-in-out backdrop-grayscale bg-white/0" />
      {/each}
    </div>
  </div>
  <!-- End Clients -->