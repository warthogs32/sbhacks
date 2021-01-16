<script>
let images = [];
</script>

<main>
    <div class="w-full h-screen p-0 m-0">
        <nav class="bg-white shadow-lg">
            <div class="items-center justify-between py-2 px-8 md:px-12">
                <div class="flex justify-between items-center">
                <div class="text-2xl font-bold text-gray-800 md:text-3xl">
                        <a href="/">Brand</a>
                </div>
                <div>
                    <button type="button" class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path class="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                </div>
                </div>
            </div>
        </nav>
        <div id="swiper" class="container mx-auto h-2/5 max-h-full">
            {#if images.length > 0}
            <img class="object-fit" src="{images[0].src}" alt="Poo">
            {:else}
            <img class="object-fill" src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Sad_face.gif" alt="Missing"/>
            {/if}
        </div>
    </div>
</main>
