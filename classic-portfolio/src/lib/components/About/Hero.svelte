<script>
  import { PUBLIC_STRAPI_BASE_URL } from "$env/static/public";

  export let data;
</script>

<div class="hero-section h-[70vh] relative flex flex-col justify-center align-center">
    <div class="-z-10 h-[70vh] brightness-[0.25] absolute top-0 left-0 w-full h-full overflow-hidden">
        <img class="bg-fixed min-w-full min-h-full bg-cover" src={PUBLIC_STRAPI_BASE_URL + data} alt="image">
    </div>
    
    <div class="md:-mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        <!-- Title -->
        <div class="max-w-3xl text-center mx-auto">
          <h1 class="block font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Our <a class="text-violet-500" href="/about">company</a>
          </h1>
        </div>
        <!-- End Title -->
    
        <div class="max-w-3xl text-center mx-auto">
          <p class="text-xl text-gray-300">Build your business here. Take it anywhere.</p>
        </div>
     </div>
</div>