<script>
  import Icon from "$lib/Icon.svelte";
  import { goto } from "$app/navigation";
  import Card from "$lib/components/Card.svelte";
  import Loading from "$lib/components/Loading.svelte";

  let loading = false;
  let nik = "";
  $: count = nik ? nik.toString().length : 0;

  const handleSubmit = (e) => {
    e.target.nik.blur();
    loading = true;
    goto(`/nik/${nik}`);
  };
</script>

<main>
  <Card>
    <svelte:fragment slot="header">Form Cari Data Pensiunan</svelte:fragment>

    <form on:submit|preventDefault={handleSubmit}>
      <div class="control" class:valid={count == 16}>
        <input
          bind:value={nik}
          type="number"
          id="nik"
          placeholder="NIK KTP Pensiunan..."
          required
        />
        <small class="count">
          {#if count == 16}
            <Icon name="checkCircle" />
          {:else}
            {16 - count}
          {/if}
        </small>
      </div>
      <button type="submit" disabled={count != 16 || loading}>
        <Icon name="search" />
        <span>Cari</span>
      </button>
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
    outline: 2px solid var(--color-bg-dark);
    border-radius: 4rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
  }

  form .control:focus-within {
    outline-color: var(--color-bg-primary);
  }

  form .control.valid {
    outline-color: var(--color-bg-success);
  }

  form .control .count {
    opacity: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form .control.valid .count {
    color: var(--color-text-success);
    opacity: 1;
  }

  form button {
    width: min(100%, 200px);
    margin: 0 auto;
    padding: 0.5rem 4rem 0.5rem 1rem;
    border-radius: 4rem;
    border: none;
    background: var(--color-bg-primary);
    color: var(--color-text-white);
  }

  form button span {
    width: 100%;
  }
</style>
