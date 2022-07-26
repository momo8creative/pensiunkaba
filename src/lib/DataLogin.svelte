<script>
  import { fade } from "svelte/transition";
  import Card from "$lib/components/Card.svelte";

  export let data;
  let terCopy = {
    nomor_peserta: false,
    pin: false,
  };

  const fields = [
    { label: "Nomor Peserta", name: "nomor_peserta" },
    { label: "PIN", name: "pin" },
  ];

  const handleCopy = (name, value) => {
    navigator.clipboard.writeText(value);
    terCopy[name] = true;
    setTimeout(() => {
      terCopy[name] = false;
    }, 2000);
  };
</script>

{#key terCopy}
  <div
    transition:fade
    class="alert-copy"
    class:show={terCopy.nomor_peserta || terCopy.pin}
  >
    <h4>Ter-copy</h4>
  </div>
{/key}

<Card>
  <svelte:fragment slot="header">Data Login Aplikasi Dapenbun</svelte:fragment>

  {#each fields as { label, name }}
    <article class="grid">
      <label for="">{label}</label>
      <div class="control">
        <input type="text" value={data[name]} readonly />
        <button
          on:click|self={() => {
            handleCopy(name, data[name]);
          }}
        >
          {#if terCopy[name]}
            ...
          {:else}
            Copy
          {/if}
        </button>
      </div>
    </article>
  {/each}

  <div>
    <small>Jika ada kendala, silakan..</small>
    <button><a href="/lapor">Laporkan!</a></button>
  </div>
</Card>

<style>
  .alert-copy {
    display: none;
    position: absolute;
    padding: 2rem;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
  }

  .alert-copy.show {
    display: block;
  }

  .grid label {
    opacity: 0.6;
  }

  .grid .control {
    display: flex;
    background-color: rgb(242, 238, 238);
  }

  .control input {
    padding: 0.5rem;
  }

  .control button {
    padding: 0 0.25rem;
  }
</style>
