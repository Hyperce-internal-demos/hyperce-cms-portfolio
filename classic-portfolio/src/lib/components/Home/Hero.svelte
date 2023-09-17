<script>
  import { PUBLIC_STRAPI_BASE_URL } from "$env/static/public";

  export let data;

  const words = data?.HeroTitle.split(" ");
  const lastWord = words.pop();
  const remainingString = words.join(" ");
</script>

<div class="py-20 md:py-24 relative" id="intro-section">

  <div class="-z-10 video-docker brightness-[0.30] absolute top-0 left-0 w-full h-full overflow-hidden">
    <video class="min-w-full min-h-full absolute object-cover" src={PUBLIC_STRAPI_BASE_URL + data?.media.data.attributes.url} type="video/mp4" autoplay muted loop></video>
  </div>

  {#if data?.media.data.attributes.mime.startsWith("image")}
    <div class="w-full h-full absolute -z-10 top-0 bg-image-darken bg-no-repeat brightness-[0.30] w-full h-full bg-cover bg-no-repeat" style="background: url({PUBLIC_STRAPI_BASE_URL + data.media.data.attributes.url})"></div>
  {/if}
  
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">

    <!-- Title -->
    <div class="max-w-3xl text-center mx-auto">
      <h1 class="block font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        {remainingString}  <a class="text-violet-500" href="#">{lastWord}</a>
      </h1>
    </div>
    <!-- End Title -->

    <div class="max-w-3xl text-center mx-auto">
      <p class="text-xl text-gray-300">{data?.HeroDescription}</p>
    </div>

    <!-- Buttons -->
    <div class="text-center">
      <a 
      href="/pricing"
      class="transition ease-in-out inline-flex justify-center items-center gap-x-3 text-center bg-white shadow-lg shadow-transparent hover:shadow-lg border border-transparent text-black text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800">
        {data?.button.placeholder}
        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </a>
    </div>
    <!-- End Buttons -->

     
  </div>
</div>