<script>
  import Clients from "$lib/components/Clients.svelte";
  import Tabs from "$lib/components/Pricing/Tabs.svelte";

  export let data;

</script>
<!-- Hero -->
<div class="relative">
    <!-- Gradients -->
    <div aria-hidden="true" class="flex absolute -top-48 left-0 -z-[1]">
      <div class="bg-purple-200 opacity-30 blur-3xl w-[1036px] h-[600px] dark:bg-purple-900 dark:opacity-20"></div>
      <div class="bg-slate-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-slate-800/60"></div>
    </div>
    <!-- End Gradients -->

    <div class="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
      {#if data}
        <!-- Title -->
        <div class="max-w-2xl mx-auto text-center mb-10">
          {#if data.title}
            <h2 class="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-700 text-transparent">{data.title}</h2>
          {/if}
          {#if data.description}
            <p class="mt-2 lg:text-lg text-gray-800 dark:text-gray-200">{data.description}</p>
          {/if}
          
        </div>
        <!-- End Title -->
      {/if}
      

      {#if data && data.card}
        <!-- Switch -->
        <div class="flex justify-center items-center">
          <label for="pricing-switch" class="min-w-[3.5rem] text-sm text-gray-600 mr-3 dark:text-gray-400">
            Monthly
          </label>

          <input type="checkbox" id="pricing-switch" class="relative shrink-0 w-[3.25rem] h-7 bg-gray-300 text-violet-900 checked:bg-none checked:bg-violet-900 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-violet-900 focus:ring-violet-900 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-violet-900 dark:focus:ring-offset-gray-800

          before:inline-block before:w-6 before:h-6 before:bg-white before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400" checked>

          <label for="pricing-switch" class="min-w-[3.5rem] text-sm text-gray-600 ml-3 dark:text-gray-400">
            Annually
          </label>
        </div>
        <!-- End Switch -->
      {/if}
      

      <Tabs data={data}/>
      
      <Clients />
    </div>

    
  </div>
  <!-- End Hero -->