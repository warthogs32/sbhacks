<script>
  let src =
    "https://i.pinimg.com/originals/55/ce/4e/55ce4e0d4dd70d983526b76c26cab1eb.jpg";

  function handleRegister() {
    alert("regiter clicked");
  }
  function handleLogin() {
    alert("login");
  }
</script>

<img {src} alt="inclusive poo logo" />
<h1>Tinder for poop💩</h1>
<br />
<button on:click={handleRegister}>Register</button>
<br />
<button on:click={handleLogin}>Login</button>
