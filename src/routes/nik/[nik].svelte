<script context="module">
  export const load = async ({ fetch, params }) => {
    const res = await fetch(`${params.nik}.json`);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  };
</script>

<script>
  import Header from "$lib/components/Header.svelte";
  import DataLogin from "$lib/DataLogin.svelte";
  import DataPeserta from "$lib/DataPeserta.svelte";
  import NikNotFound from "../../lib/NikNotFound.svelte";

  export let data;
</script>

<svelte:head>
  <title>Hasil Pencarian</title>
</svelte:head>

<a href="/">Kembali</a>
<Header>Hasil Pencarian</Header>

<section>
  {#if data.error}
    <NikNotFound />
  {:else}
    <DataLogin {data} />
    <DataPeserta {data} />
  {/if}
</section>

<style>
  section {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
