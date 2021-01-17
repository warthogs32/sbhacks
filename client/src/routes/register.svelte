<script>
  import { onMount } from "svelte";

  function goLogin() {
    window.location.href = "/";
  }

  onMount(() => {
    document.querySelector("#register").addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var email = document.querySelector("#email").value;
      var password = document.querySelector("#password").value;
      var firstname = document.querySelector("#fname").value;
      var lastname = document.querySelector("#lname").value;
      var currentUser;
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          currentUser = user.user;
          db.collection("users")
            .doc(currentUser.uid)
            .set({
              email: currentUser.email,
              password: password,
              fname: firstname,
              lname: lastname,
              swipes: {
                Yellow: 0,
                Green: 0,
                Brown: 0,
                Black: 0,
                Smooth: 0,
                Rough: 0,
                Bright: 0,
                Dark: 0,
                "Embedded Objects": 0,
              },
            })
            .then(function () {
              window.alert("You are registered! Happy poop matching!");
              window.location.href = "swipe";
            });
        })
        .catch((error) => {
          console.log("register error");
          window.alert(error.message);
        });
    });

    firebase.auth().onAuthStateChanged(function (user) {
      window.user = user;
      console.log(user);
    });
  });
  let src =
    "https://www.emoji.com/wp-content/uploads/filebase/thumbnails/icons/emoji-icon-glossy-00-05-faces-face-fantasy-smiling-poo-with-heart-eyes-72dpi-forPersonalUseOnly.png";
</script>

<div
  class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
>
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-35 w-auto" {src} alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in or register
      </h2>
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">First name</label>
          <input
            id="fname"
            name="fname"
            type="text"
            autocomplete=""
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-700 focus:z-10 sm:text-sm"
            placeholder="First name"
          />
        </div>
        <div>
          <label for="email-address" class="sr-only">Last name</label>
          <input
            id="lname"
            name="lname"
            type="text"
            autocomplete=""
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-700 focus:z-10 sm:text-sm"
            placeholder="Last name"
          />
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-700 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-700 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>

      <div>
        <button
          on:click={goLogin}
          id="sign-in"
          class="my-1 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-800 hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
          Sign in
        </button>
        <button
          id="register"
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-800 hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
          Register
        </button>
      </div>
    </form>
  </div>
</div>
