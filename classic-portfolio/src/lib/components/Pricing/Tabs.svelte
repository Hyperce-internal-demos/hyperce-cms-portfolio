<script>
    const pricing_options = {
        free: "free",
        startup: "startup",
        team: "team",
        enterprise: "enterprise"
    }
    let active_pricing = pricing_options.startup;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<!-- Grid -->
<div class="px-2 mt-6 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 md:gap-8 lg:gap-3 xl:gap-8 lg:items-center">
    <!-- Card -->
    
    <div 
    on:click={() => active_pricing = pricing_options.free} 
    class="{active_pricing === "free" ? " border-violet-900 scale-105" : "border-gray-200"} transition ease-out border-2 flex flex-col bg-white text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
      <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Free</h4>
      <span class="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">Free</span>
      <p class="mt-2 text-sm text-gray-500">Get started with basic features</p>

      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            1 user
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Plan features
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Product support
          </span>
        </li>
      </ul>

      <!-- svelte-ignore a11y-invalid-attribute -->
      <a class="{active_pricing === "free" ? " bg-violet-900 hover:bg-violet-700 text-white" : ""} mt-5 inline-flex justify-center items-center gap-2 rounded-lg border-2 border-violet-900 font-semibold text-violet-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-violet-500 dark:border-violet-900 dark:hover:border-violet-700" href="#">
        Get started
      </a>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div 
    on:click={() => active_pricing = pricing_options.startup} 
    class="{active_pricing === "startup" ? " border-violet-900 scale-105" : "border-gray-200"} transition ease-out border-2 flex flex-col bg-white text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
        <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">
            Startup 
            <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-semibold bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-white">Most popular</span>
        </h4>

        <span class="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
            $39
        </span>
        <p class="mt-2 text-sm text-gray-500">All the basics for starting a new business</p>

        <ul class="mt-7 space-y-2.5 text-sm">
            <li class="flex space-x-2">
            <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
            </svg>
            <span class="text-gray-800 dark:text-gray-400">
                2 users
            </span>
            </li>

            <li class="flex space-x-2">
            <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
            </svg>
            <span class="text-gray-800 dark:text-gray-400">
                Plan features
            </span>
            </li>

            <li class="flex space-x-2">
            <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
            </svg>
            <span class="text-gray-800 dark:text-gray-400">
                Product support
            </span>
            </li>
        </ul>

        <a class="{active_pricing === "startup" ? " bg-violet-900 hover:bg-violet-700 text-white" : ""} mt-5 inline-flex justify-center items-center gap-2 rounded-lg border-2 border-violet-900 font-semibold text-violet-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-violet-500 dark:border-violet-900 dark:hover:border-violet-700" href="#">
            Get started
        </a>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div 
    on:click={() => active_pricing = pricing_options.team} 
    class="{active_pricing === "team" ? " border-violet-900 scale-105" : "border-gray-200"} transition ease-out border-2 flex flex-col bg-white text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
      <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Team</h4>
      <span class="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
        $89
      </span>
      <p class="mt-2 text-sm text-gray-500">Everything you need for a growing business</p>

      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            5 users
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Plan features
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Product support
          </span>
        </li>
      </ul>

      <a class="{active_pricing === "team" ? " bg-violet-900 hover:bg-violet-700 text-white" : ""} mt-5 inline-flex justify-center items-center gap-2 rounded-lg border-2 border-violet-900 font-semibold text-violet-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-violet-500 dark:border-violet-900 dark:hover:border-violet-700" href="#">
        Get started
      </a>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div 
    on:click={() => active_pricing = pricing_options.enterprise} 
    class="{active_pricing === "enterprise" ? " border-violet-900 scale-105" : "border-gray-200"} transition ease-out border-2 flex flex-col bg-white text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
      <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Enterprise</h4>
      <span class="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
        $149
      </span>
      <p class="mt-2 text-sm text-gray-500">Advanced features for scaling your business</p>

      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            10 users
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Plan features
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Product support
          </span>
        </li>
      </ul>

      <a class="{active_pricing === "enterprise" ? " bg-violet-900 hover:bg-violet-700 text-white" : ""} mt-5 inline-flex justify-center items-center gap-2 rounded-lg border-2 border-violet-900 font-semibold text-violet-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-violet-500 dark:border-violet-900 dark:hover:border-violet-700" href="#">
        Get started
      </a>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Grid -->