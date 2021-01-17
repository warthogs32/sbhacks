<script>
  let missing_src =
    "https://upload.wikimedia.org/wikipedia/commons/b/bf/Sad_face.gif";
  let images = [];
  function get_images() {
    // Fetch images
    images = [];
  }
</script>

<div class="h-screen">
  <nav class="bg-white shadow-lg">
    <div class="items-center justify-between py-2 px-8 md:px-12">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-gray-800 md:text-3xl">
          <a href="/">Brand</a>
        </div>
        <div>
          <button
            type="button"
            class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                class="hidden"
                d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
              />
              <path
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <div class="flex flex-col justify-space">
    <div id="swiper" class="flex-auto py-6 flex items-center">
      <div>
        {#if images.length > 0}
          <img src={images[0].src} alt="Poo" />
        {:else}
          <img class="object-scaled-down" src={missing_src} alt="Missing" />
        {/if}
      </div>
    </div>
    <div
      class="w-screen px-12 pt-6 flex-none flex flex-row justify-around md:justify-center self-end mb-6"
    >
      <button
        class="uppercase p-3 mx-6 flex items-center bg-red-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 sm:self-start">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          style="transform: rotate(360deg);"
          ><path
            d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"
            fill="currentColor"
          /></svg
        >
      </button>

      <button
        class="uppercase p-3 mx-6 flex items-center bg-yellow-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg w-12 h-12 self-center">
        <svg
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
          style="transform: rotate(360deg);"
          ><path
            d="M26 18A10 10 0 1 1 16 8h6.182l-3.584 3.585L20 13l6-6l-6-6l-1.402 1.414L22.185 6H16a12 12 0 1 0 12 12z"
            fill="currentColor"
          /></svg
        >
      </button>

      <button
        class="uppercase p-3 mx-6 flex items-center bg-green-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 sm:self-end">
        <svg
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 320.069 320.069"
          style="transform: rotate(360deg);"
          ><path
            d="M 177.935 142.137 V 0 h -35.801 v 142.137 H 0.003 v 35.801 h 142.131 v 142.131 h 35.801 V 177.938 h 142.131 v -35.801 C 320.066 142.137 177.935 142.137 177.935 142.137 Z M 308.132 166.004 H 166.001 v 142.131 h -11.934 V 166.004 H 11.937 v -11.934 h 142.131 V 11.934 h 11.934 v 142.137 h 142.131 V 166.004 Z"
            fill="currentColor"
          /></svg
        >
      </button>
    </div>
  </div>
</div>
