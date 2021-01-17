<script>
  import { onMount } from "svelte";
  let image_url = "";
  onMount(() => {
    image_url = document.querySelector("#img_url").value;
    document.querySelector("#upload").addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      let color = "yellow";
      var ele = document.getElementsByName("color");
      for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
          color = ele[i].value;
          console.log(color);
        }
      }

      let consistency = "smooth";
      let brightness = "bright";
      let embedded_objects = true;

      let error = "Please validate your image url!";

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
        db.collection("images")
          .doc()
          .set(imageData)
          .then(function () {
            window.alert("success");
          });
      }
    });
  });

  let error = "Please validate your image url!";

  //   var imageData = {
  //     url: image_url,
  //     colour: color,
  //     consistency: consistency,
  //     brightness: brightness,
  //     embedded_obj: embedded_objects,
  //   };

  //   function onSubmit(data) {
  //     if (error !== "") {
  //       alert("Please validate your image url first!");
  //     } else {
  //       db.collection("images")
  //         .doc()
  //         .set(imageData)
  //         .then(function () {
  //           window.alert("success");
  //         });
  //     }
  //   }

  function validate() {
    let url = image_url;
    let timeout = 5000;
    var timedOut = false,
      timer;
    var img = new Image();
    console.log("line 75");
    img.onerror = img.onabort = function () {
      console.log("line 77");
      if (!timedOut) {
        clearTimeout(timer);
        error = "Invalid image url!";
      }
    };
    img.onload = function () {
      console.log("line 84");
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

<div class="h-screen flex flex-col justify-end">
  {#if error !== ""}
    <label class="text-red-600 mx-4" for="img_url">{error}</label>
  {:else}
    <label class="text-green-600 mx-4" for="img_url"
      >"Valid image. Plase tag the image."</label
    >
  {/if}
  <input
    class="m-4 border-black border-2 mb-2"
    id="img_url"
    on:change={validate}
    type="url"
    placeholder="Poop image url here"
    bind:value={image_url}
  />
  <input
    class="h-8 rounded m-4 mt-2"
    type="submit"
    on:click={validate}
    value="Validate image!"
  />
  <div class="mt-4 pb-4 mx-4 border-gray-300 border-2">
    <h2 class="mb-2">Color</h2>
    <div class="flex flex-row justify-around border-black">
      <label class="mx-4">
        <input name="color" type="radio" value="yellow" />
        Yellow
      </label>
      <label class="mx-4">
        <input name="color" type="radio" value="green" />
        Green
      </label>
      <label class="mx-4">
        <input name="color" type="radio" value="brown" />
        Brown
      </label>
      <label>
        <input name="color" type="radio" value="black" />
        Black
      </label>
    </div>
  </div>
  <div class="mt-4 pb-4 mx-4 border-gray-300 border-2">
    <h2 class="mb-2">Consistency</h2>
    <div class="flex flex-row justify-around">
      <label class="mx-4">
        <input type="radio" value="smooth" />
        Smooth
      </label>
      <label class="mx-4">
        <input type="radio" value="rough" />
        Rough
      </label>
    </div>
  </div>
  <div class="mt-4 pb-4 mx-4 border-gray-300 border-2">
    <h2 class="mb-2">Brightness</h2>
    <div class="flex flex-row justify-around">
      <label class="mx-4">
        <input type="radio" value="bright" />
        Bright
      </label>
      <label class="mx-4">
        <input type="radio" value="dark" />
        Dark
      </label>
    </div>
  </div>
  <div class="mt-4 pb-4 mx-4 border-gray-300 border-2">
    <h2 class="mb-2">Embedded Objects</h2>
    <div class="flex flex-row justify-around">
      <label class="mx-4">
        <input type="radio" value="yes" />
        Yes
      </label>
      <label class="mx-4">
        <input type="radio" value="no" />
        No
      </label>
    </div>
  </div>

  <input
    id="upload"
    class="h-12 rounded m-4"
    type="submit"
    value="Submit"
  /><script
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
