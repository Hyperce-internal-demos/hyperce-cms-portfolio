<script>
  import { PUBLIC_STRAPI_BASE_URL } from "$env/static/public";
  import { createGraphQLClient } from "$lib/utilities/GraphqlClient";
  import { contactPage_query } from "$lib/utilities/queries";
  import { createQuery } from "@tanstack/svelte-query";

  let contactPage;
  const client = createGraphQLClient(fetch);
  const rawData = createQuery(['contactPage'], async () => await client.request(contactPage_query))
  $: contactPage = $rawData.data?.data.contactPages.data[0].attributes
  $: console.log("contact page: ", contactPage)
</script>

<div class="relative w-full">
  <!-- Gradients -->
  <div aria-hidden="true" class="flex w-full h-full absolute -top-60 left-0 -z-[1]">
    <div class="bg-purple-200 opacity-20 blur-3xl w-full h-full dark:bg-purple-900 dark:opacity-20"></div>
    <div class="bg-gray-100 opacity-70 blur-3xl w-full h-full transform translate-y-32 dark:bg-slate-800/60"></div>
  </div>
  <!-- End Gradients -->

  <!-- Hire Us -->
  <div class="max-w-[80rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative">
    {#if contactPage}
    <!-- Grid -->
    <div class="grid md:grid-cols-2 items-top gap-12">
      
      <div>
        {#if contactPage.heading}
          <h2 class="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-700 text-transparent">
            {contactPage.heading}
          </h2>
        {/if}

        {#if contactPage.description}
        <p class="mt-1 md:text-lg text-gray-800 dark:text-gray-200">
          {contactPage.description}
        </p>
        {/if}

        <div class="mt-8">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {contactPage?.features.heading ?? ""}
          </h2>

          <ul class="mt-2 space-y-2">
            {#if contactPage?.features.features_list}
              {#each contactPage?.features.features_list as feature}
                <li class="flex space-x-3">
                  <svg class="flex-shrink-0 h-6 w-6 text-gray-600 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
                  </svg>
                  <span class="text-gray-600 dark:text-gray-400">
                    {feature}
                  </span>
                </li>
              {/each}
            {/if}
          </ul>
        </div>

        <!-- Brands -->
        {#if contactPage.clients}
        <div class="mt-8">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {contactPage.clients.heading}
          </h2>

          <div class="mt-4 flex justify-start gap-x-2 sm:gap-x-6 lg:gap-x-12 items-center">
            {#each contactPage.clients.clients_logo.data as item}
              <img src={PUBLIC_STRAPI_BASE_URL + item.attributes.url} alt={item.attributes.alternativeText ?? "image"} class="w-20 h-full saturate-[0] transition hover:saturate-100 hover:scale-105 ease-in-out backdrop-grayscale bg-white/0" />
            {/each}
          </div>
        </div>
        {/if}
        <!-- End Brands -->

        <div class="mt-10 flex items-center gap-x-5">
          <!-- Avatar Group -->
          <div class="flex -space-x-2">
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Image Description">
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">
            <span class="inline-flex justify-center items-center h-8 w-8 rounded-full bg-violet-600 text-white ring-2 ring-white">
              <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </span>
          </div>
          <!-- End Avatar Group -->
          <span class="text-sm text-gray-500">
            Trusted by over 37k customer
          </span>
        </div>
      </div>
      <!-- End Col -->

      <div class="relative flex justify-center md:-mt-16 w-full">
        <!-- Card -->
        <div class="flex bg-white md:w-[90%]  flex-col border md:rounded-none rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
          <form method="POST" action="mailto: {contactPage.receiver_mail}" enctype="multipart/form-data">
            <div class="grid gap-4 lg:gap-6">
              <!-- Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label for="hs-firstname-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">First Name</label>
                  <input type="text" name="hs-firstname-hire-us-1" id="hs-firstname-hire-us-1" class="py-3 px-4 mt-2 border block w-full border-gray-200 rounded-md text-sm focus:border-violet-500 focus:ring-violet-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                </div>

                <div>
                  <label for="hs-lastname-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Last Name</label>
                  <input type="text" name="hs-lastname-hire-us-1" id="hs-lastname-hire-us-1" class="py-3 mt-2 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-violet-500 focus:ring-violet-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                </div>
              </div>
              <!-- End Grid -->

              <div>
                <label for="hs-work-email-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Work Email</label>
                <input type="email" name="hs-work-email-hire-us-1" id="hs-work-email-hire-us-1" autocomplete="email" class="py-3 px-4 mt-2 border block w-full border-gray-200 rounded-md text-sm focus:border-violet-500 focus:ring-violet-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              </div>

              <!-- Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label for="hs-company-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Company</label>
                  <input type="text" name="hs-company-hire-us-1" id="hs-company-hire-us-1" class="py-3 px-4 block w-full mt-2 border border-gray-200 rounded-md text-sm focus:border-violet-500 focus:ring-violet-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                </div>

                <div>
                  <label for="hs-company-website-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Company Website</label>
                  <input type="text" name="hs-company-website-hire-us-1" id="hs-company-website-hire-us-1" class="py-3 px-4 mt-2 border block w-full border-gray-200 rounded-md text-sm focus:border-violet-500 focus:ring-violet-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                </div>
              </div>
              <!-- End Grid -->

              <div>
                <label for="hs-about-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Details</label>
                <textarea id="hs-about-hire-us-1" name="hs-about-hire-us-1" rows="4" class="py-3 px-4 block w-full mt-2 border border-gray-200 rounded-md text-sm focus:border-violet-500 focus:ring-violet-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></textarea>
              </div>
            </div>
            <!-- End Grid -->

            <!-- Checkbox -->
            {#if contactPage.terms_and_conditions}
            <div class="mt-3 flex">
              <div class="flex">
                <input id="remember-me" name="remember-me" type="checkbox" class="shrink-0 mt-1.5 border-gray-200 rounded text-violet-600 pointer-events-none focus:ring-violet-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-violet-500 dark:checked:border-violet-500 dark:focus:ring-offset-gray-800">
              </div>
              <div class="ml-3">
                <label for="remember-me" class="text-sm text-gray-600 dark:text-gray-400">{contactPage.terms_and_conditions.phrase ?? "By submitting this form I acknowledged the"} <a class="text-violet-600 decoration-2 hover:underline font-medium" href={contactPage.terms_and_conditions.redirect_link? "/" + contactPage.terms_and_conditions.redirect_link : "/"}>{contactPage.terms_and_conditions.placeholder}</a></label>
              </div>
            </div>
            {/if}
            <!-- End Checkbox -->

            <div class="mt-6 grid">
              <button type="submit" class=" bg-violet-900 hover:bg-violet-700  border-transparent mt-5 inline-flex justify-center items-center gap-2 rounded-lg border-2 border-violet-900 font-semibold text-violet-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-white text-base py-3 px-4 dark:text-violet-500 dark:border-violet-900 dark:hover:border-violet-700" href="#">
                Send inquiry
              </button>
            </div>
          </form>

        </div>
        <!-- End Card -->
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
    {/if}
  </div>
  <!-- End Hire Us -->
</div>
<hr />