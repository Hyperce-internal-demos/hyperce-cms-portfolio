<script>
    import Hero from "$lib/components/About/Hero.svelte";
    import Image from "$lib/components/Image.svelte";
    import Blockquote from "$lib/components/Blockquote.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import Markdown from "svelte-markdown";
    import List from "$lib/components/List.svelte";
    import { createQuery } from "@tanstack/svelte-query";
    import { createGraphQLClient } from "$lib/utilities/GraphqlClient.js";
    import { about_query } from "$lib/utilities/queries";

    let about;
    const client = createGraphQLClient(fetch);
    const rawData = createQuery(['about'], async () => await client.request(about_query))
    $: about = $rawData.data?.data.aboutPage.data.attributes
    $: console.log("about: ", about)
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
                    <h2 class="text-xl font-bold md:text-3xl  uppercase  dark:text-white">{about?.heading}</h2>
            
                    <article id="article" class="prose mx-auto mt-8 max-w-3xl">
                        <Markdown 
                        source={about?.content} 
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