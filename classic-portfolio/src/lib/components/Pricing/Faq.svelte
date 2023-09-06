<script>
  export let data;
</script>

<!-- FAQ -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid md:grid-cols-6 gap-6">
    <div class="md:col-span-2">
      <div class="max-w-xs">
        <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">{data?.title}</h2>
        <p class="mt-1 hidden md:block text-gray-600 dark:text-gray-400">{data?.description}</p>
      </div>
    </div>
    <!-- End Col -->

    <div class="md:col-span-4">
      <!-- Accordion -->
      <div class="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
        {#each data?.question_answer as qa, index}
          <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-{index}">
            <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
              {qa.question}
              <svg class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-{index}" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
              <div class="pr-8">
                <p class="text-gray-600 dark:text-gray-400">
                  {qa.answer}
                </p>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <!-- End Accordion -->
    </div>
    
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End FAQ -->