<script>
  import { onMount } from "svelte";

  let image_url = "";
  let color = "yellow";
  let consistency = "smooth";
  let brightness = "bright";
  let embedded_objects = "yes";

  let error = "Please validate your image url!";
  // $: imageData = {
  //   url: image_url,
  //   colour: color,
  //   consistency: consistency,
  //   brightness: brightness,
  //   embedded_obj: embedded_objects,
  // };
  onMount(() => {
    document.querySelector("#upload").addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var imageData = {
        url: image_url,
        colour: color,
        consistency: consistency,
        brightness: brightness,
        embedded_obj: embedded_objects,
      };

      if (error !== "") {
        alert("Please validate your image url first!");
      } else {
        console.log(imageData);
        db.collection("images")
          .doc()
          .set(imageData)
          .then(function () {
            window.alert("success");
          });
      }
    });

    function onSubmit(data) {
      if (error !== "") {
        alert("Please validate your image url first!");
      } else {
        db.collection("images")
          .doc()
          .set(imageData)
          .then(function () {
            window.alert("success");
          });
      }
    }
  });

  function validate() {
    let url = image_url;
    let timeout = 5000;
    var timedOut = false,
      timer;
    var img = new Image();
    img.onerror = img.onabort = function () {
      if (!timedOut) {
        clearTimeout(timer);
        error = "Invalid image url!";
      }
    };
    img.onload = function () {
      if (!timedOut) {
        clearTimeout(timer);
        error = "";
      }
    };
    img.src = url;
    timer = setTimeout(function () {
      timedOut = true;
      error = "Timed out! Please try again!";
      // reset .src to invalid URL so it stops previous
      // loading, but doesn't trigger new load
      img.src = "//!!!!/test.jpg";
    }, timeout);
  }
</script>

<div
  class=" min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
>
  <div class="max-w-md w-full space-y-8">
    {#if error !== ""}
      <label class="text-red-600" for="img_url">{error}</label>
    {:else}
      <label class="text-green-600 mx-4" for="img_url"
        >"Valid image. Plase tag the image."</label
      >
    {/if}
    <div class="col-span-6 sm:col-span-4">
      <label
        for="email_address"
        class="block text-sm font-medium text-gray-700 -mt-2"
        >Poop image URL</label
      >
      <input
        id="img_url"
        on:change={validate}
        type="url"
        bind:value={image_url}
        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2 -mb-1.5"
      />
    </div>
    <button
      class="my-1 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-800 hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
      type="submit"
      on:click={validate}
      value="Validate image!">Validate image!</button
    >
    <div>
      <legend class="text-base font-medium text-gray-900">Color</legend>
      <p class="text-sm text-gray-500">How did it look?</p>
    </div>
    <div class="flex flex-row justify-around border-black">
      <label class="">
        <input type="radio" bind:group={color} value="yellow" />
        Yellow
      </label>
      <label class="">
        <input type="radio" bind:group={color} value="green" />
        Green
      </label>
      <label class="">
        <input type="radio" bind:group={color} value="brown" />
        Brown
      </label>
      <label>
        <input type="radio" bind:group={color} value="black" />
        Black
      </label>
    </div>
    <div>
      <legend class="text-base font-medium text-gray-900">Consistency</legend>
      <p class="text-sm text-gray-500">
        If it were ice cream, what would be its texture?
      </p>
    </div>
    <div class="flex flex-row justify-around">
      <label class="">
        <input type="radio" bind:group={consistency} value="smooth" />
        Smooth
      </label>
      <label class="">
        <input type="radio" bind:group={consistency} value="rough" />
        Rough
      </label>
    </div>
    <div>
      <legend class="text-base font-medium text-gray-900">Brightness</legend>
      <p class="text-sm text-gray-500">
        If your bathroom had no light, could you still see it in the toilet?
      </p>
    </div>
    <div class="flex flex-row justify-around">
      <label class="">
        <input type="radio" bind:group={brightness} value="bright" />
        Bright
      </label>
      <label class="">
        <input type="radio" bind:group={brightness} value="dark" />
        Dark
      </label>
    </div>
    <!-- <div class="mt-4 pb-4 mx-4 border-gray-300 border-2"> -->
    <div>
      <legend class="text-base font-medium text-gray-900"
        >Embedded Objects</legend
      >
      <p class="text-sm text-gray-500">
        Could you see any chunks? Perhaps chocolate chip?
      </p>
    </div>
    <div class="flex flex-row justify-around">
      <label class="mx-4">
        <input type="radio" bind:group={embedded_objects} value="yes" />
        Yes
      </label>
      <label class="mx-4">
        <input type="radio" bind:group={embedded_objects} value="no" />
        No
      </label>
    </div>
    <!-- </div> -->

    <button
      id="upload"
      class="my-1 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-800 hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
      type="submit"
      value="Upload image">Upload image</button
    ><script
      src="https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js"></script><script
      src="https://www.gstatic.com/firebasejs/8.2.3/firebase-auth.js"></script><script
      src="https://www.gstatic.com/firebasejs/8.2.3/firebase-firestore.js"></script><script>
      var firebaseConfig = {
        apiKey: " AIzaSyCPBQOoHU38VXcW7LFSoGT-IrrHwxiil48 ",
        projectId: "sbhacks2021-301902",
        authDomain: "sbhacks2021-301902.firebaseapp.com",
        databaseURL: "https://sbhacks2021-301902.firebaseio.com",
        storageBucket: "sbhacks2021-301902.appspot.com",
      };
      firebase.initializeApp(firebaseConfig);
      var db = firebase.firestore();
    </script>
  </div>
</div>
