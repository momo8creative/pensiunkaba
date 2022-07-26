<script>
  import Card from "$lib/components/Card.svelte";
  export let data;

  const convertDate = (dd) => {
    const d = new Date(dd);
    const d1 = new Intl.DateTimeFormat("id").format(d);
    return d1;
  };

  const fields = [
    { label: "Nama Penerima", name: "nama_penerima_mp" },
    { label: "No Peserta", name: "no_peserta" },
    { label: "NIK", name: "nik_penerima_mp" },
    { label: "Tanggal lahir", name: "tanggal_lahir", type: "date" },
    { label: "Alamat", name: "alamat" },
  ];
</script>

<Card>
  <svelte:fragment slot="header">Data Peserta Pensiunan</svelte:fragment>
  <article class="main-grid">
    {#each fields as field}
      <div class="grid">
        <label for="">{field.label}</label>
        {#if field.type == "date"}
          <div class="value">{convertDate(data[field.name])}</div>
        {:else}
          <div class="value">{data[field.name]}</div>
        {/if}
      </div>
    {/each}
  </article>
</Card>

<style>
  .main-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .grid label {
    font-size: var(--font-18);
    opacity: 0.6;
  }
  .grid .value {
    border-bottom: 2px solid rgb(189, 189, 189);
    padding: 0 1rem;
    background-color: rgba(135, 135, 135, 0.1);
  }
</style>
