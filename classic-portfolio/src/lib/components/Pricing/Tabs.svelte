<script>
  export let data;

  // Generate pricing_options dynamically based on the cards titles
  let active_pricing = '';
  const pricing_options = {};

  $: if (data && data.card) {
    data.card.forEach(card => {
      pricing_options[card.title.toLowerCase()] = card.title.toLowerCase();
    });

    // Initialize active_pricing with the first card's pricing option
    if (data.card.length > 0) {
      active_pricing = pricing_options[data.card[0].title.toLowerCase()];
    }
  }
</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<!-- Grid -->
<div class="px-2 mt-6 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 md:gap-8 lg:gap-3 xl:gap-8 lg:items-center">
  {#if data}
  {#each data?.card as card}
    <div
      on:click={() => (active_pricing = pricing_options[card.title.toLowerCase()])}
      class="{active_pricing === pricing_options[card.title.toLowerCase()] ? 'border-violet-900 scale-105' : 'border-gray-200'} transition ease-out border-2 flex flex-col bg-white text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
      <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">
        {card.title}
        {#if card.phrase}
          <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-semibold bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-white">{card.phrase}</span>
        {/if}
      </h4>
      
      <span class="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">{card.pricing}</span>
      <p class="mt-2 text-sm text-gray-500">{card.description}</p>
      <ul class="mt-7 space-y-2.5 text-sm">
        {#each card.features_list as feature (feature)}
          <li class="flex space-x-2">
            <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
            </svg>
            <span class="text-gray-800 dark:text-gray-400">{feature}</span>
          </li>
        {/each}
      </ul>

      <a class="{active_pricing === pricing_options[card.title.toLowerCase()] ? 'bg-violet-900 hover:bg-violet-700 text-white' : ''} mt-5 inline-flex justify-center items-center gap-2 rounded-lg border-2 border-violet-900 font-semibold text-violet-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-violet-500 dark:border-violet-900 dark:hover:border-violet-700" href="#">
        {card.button.placeholder}
      </a>
  </div>
  {/each}
  {/if}
</div>