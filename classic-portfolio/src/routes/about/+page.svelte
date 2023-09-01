<script>
    import Hero from "$lib/components/About/Hero.svelte";
    import Image from "$lib/components/Image.svelte";
    import Blockquote from "$lib/components/Blockquote.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import List from "$lib/components/List.svelte";

    let about;
    export let data;
    $: console.log(data)
    $: about = data.aboutPage.data.attributes

</script>
<div class="w-full relative h-full md:pb-44">
    <Hero />

    <div class="h-full content md:-my-36">
        <!-- Blog Article -->
        <div class="bg-white max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
            <div class="max-w-2xl">

            <!-- Content -->
            <div class="space-y-5 md:space-y-8">
                <div class="space-y-3">
                    <h2 class="text-xl font-bold md:text-3xl  uppercase  dark:text-white">{about.heading}</h2>
            
                    <article id="article" class="prose mx-auto mt-8 max-w-3xl">
                        <SvelteMarkdown 
                        source={about.content} 
                        renderers={{ image: Image, blockquote: Blockquote, list: List }}/>
                    </article>
                </div>
            </div>
            <!-- End Content -->
            
            </div>
        </div>
         <!-- End Blog Article -->
  </div>
</div>
<hr />