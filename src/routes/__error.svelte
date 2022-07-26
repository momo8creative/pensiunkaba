<script context="module">
  export function load({ error, status }) {
    return {
      props: { error, status },
    };
  }
</script>

<script>
  export let status;

  export let error;
</script>

<main>
  <h1>{status}</h1>
  <pre>{error.message}</pre>
  <a href="/">Kembali ke Beranda</a>
</main>

<style>
  main {
    padding: 2rem;
    color: var(--color-text-white);
  }

  a {
    display: block;
    padding: 1rem 2rem;
    background-color: var(--color-bg-white);
  }
</style>
