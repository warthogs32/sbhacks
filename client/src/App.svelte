<script>
  import { Router, Link, Route } from "svelte-routing";
  import Welcome from "./routes/welcome.svelte";
  import Register from "./Register.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Welcome /></Route>
    <Route path="register" component={Register} />
  </div>
</Router>
