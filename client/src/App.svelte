<script>
  import { Router, Link, Route } from "svelte-routing";
  import Welcome from "./Welcome.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <!-- <Route path="about" component="{About}" /> -->
    <Route path="/"><Welcome /></Route>
  </div>
</Router>
