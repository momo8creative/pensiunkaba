<script>
  import { goto } from "$app/navigation";
  import Card from "$lib/components/Card.svelte";
  import Loading from "$lib/components/Loading.svelte";

  let loading = false;
  let nik = "";
  $: count = nik ? nik.toString().length : 0;

  const handleSubmit = (e) => {
    loading = true;
    goto(`/nik/${nik}`);
  };
</script>

<main>
  <Card>
    <svelte:fragment slot="header">Form Cari Data Pensiunan</svelte:fragment>

    <form on:submit|preventDefault={handleSubmit}>
      <div class="control">
        <input
          bind:value={nik}
          type="number"
          id="nik"
          placeholder="NIK KTP Pensiunan..."
          required
        />
        <small class="count">{16 - count}</small>
      </div>
      <button type="submit" disabled={count != 16}>Cari</button>
    </form>
  </Card>
</main>

{#if loading}
  <Loading>
    <svelte:fragment slot="title">Sedang mencari...</svelte:fragment>
  </Loading>
{/if}

<style>
  main {
    width: min(600px, 100%);
    margin: 0 auto;
    padding: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  form .control {
    position: relative;
    outline: 1px solid gray;
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
  }

  form .control .count {
    opacity: 0.6;
  }

  form button {
    padding: 0.5rem;
  }

  form button:disabled {
    opacity: 0.8;
  }
</style>
