<script lang="ts">
  import { page } from "$app/stores";
  import { createGraphQLClient } from "$lib/utilities/GraphqlClient";
  import { createQuery } from '@tanstack/svelte-query'
  import { navbar_query } from "$lib/utilities/queries";
  import { onMount } from "svelte";

  let navigation;
  const client = createGraphQLClient(fetch);
  const navigationRawData = createQuery(['navbar'], async () => await client.request(navbar_query))

  $: navigation = $navigationRawData.data?.data.navbars.data[0].attributes
  $: console.log("navbar: ", $navigationRawData.data?.data.navbars.data[0].attributes)

  type ActiveNav = "home" | typeof navigation.navbar_items[number]["redirect_link"];

  let activeNav: ActiveNav; 
  $: activeNav = removeLeadingSlash($page.url.pathname)

  function removeLeadingSlash(route: any) {
    if (route.startsWith('/')) {
      return route.substring(1);
    }
    
    return route;
  }

</script>

<header class="sticky top-0 border-b flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-800">
  <div class="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
    <div class="relative md:flex md:items-center md:justify-between">

      <div class="flex items-center justify-between">
        <a class="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Brand">
          {navigation?.brand_name ?? ""}
        </a>
        <div class="md:hidden">
          <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      </div>

      <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
        <div class="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
          <div class="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
            {#if navigation}
            {#each navigation.navbar_items as navItem}
              <a class="{activeNav === navItem.redirect_link.toLowerCase() ? "text-violet-700" : "text-gray-800"} font-medium text-base py-3 md:py-6 " href={"/"+navItem.redirect_link}>
                {navItem.placeholder}
              </a>
            {/each}
            {/if}
            
            <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
              <button type="button" class="flex items-center w-full text-base  text-gray-800 hover:text-gray-600 font-medium dark:text-gray-200 dark:hover:text-gray-500">
                {navigation?.navbar_menus_heading ?? ""}
                <svg class="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
              </button>

              <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-80 hidden z-10 bg-white md:shadow-2xl rounded-lg py-2 md:p-2 dark:bg-gray-800 dark:divide-gray-700 before:absolute top-full before:-top-5 before:left-0 before:w-full before:h-5">
                {#if navigation}
                {#each navigation.navbar_menus as item}
                <a class="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-violet-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  <div class="w-8 h-8">
                      {@html JSON.parse(item.icon).component}
                  </div>
                  <div class="grow">
                    <span class="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
                      {item.title}
                    </span>
                    {item.description}
                  </div>
                </a>

                <div class="my-2 border-t border-gray-100 dark:border-gray-800"></div>
                {/each}
                {/if}

              </div>
            </div>

            {#if navigation && navigation.callback_button && navigation.callback_button.placeholder}
            <div class="pt-3 md:pt-0">
              <a class="inline-flex justify-center items-center gap-x-2 text-center bg-gray-800 hover:bg-gray-900 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-5 dark:focus:ring-offset-gray-800" href={navigation?.callback_button.redirect_link ? "/"+navigation?.callback_button.redirect_link : "/"}>
                {navigation.callback_button.placeholder ?? ""}
              </a>
            </div>
            {/if}
            
          </div>
        </div>
      </div>
    </div>
</header>