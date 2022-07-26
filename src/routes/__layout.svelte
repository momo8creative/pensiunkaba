<script>
  import { fly, fade } from "svelte/transition";
  import "$lib/styles/global.css";
</script>

<main in:fly={{ y: 20, duration: 300 }} out:fade>
  <slot />
</main>

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
