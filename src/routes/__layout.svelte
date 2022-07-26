<script>
  import { page } from "$app/stores";
  import "$lib/styles/global.css";
  import Transition from "../lib/components/Transition.svelte";
</script>

<Transition url={$page.url}>
  <main>
    <slot />
  </main>
</Transition>

<style>
  main {
    position: relative;
  }

  main::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 20rem;
    background-color: var(--color-bg-primary);
  }
</style>
