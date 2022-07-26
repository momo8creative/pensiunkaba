<script>
  import Search from "$lib/Search.svelte";
  import Header from "../lib/components/Header.svelte";

  const text = {
    id: 1,
    nomor_peserta: 120152091001,
    pin: "200952",
    no_peserta: "1201-5209-1001",
    nama_peserta: "-",
    no_pensiun: "01.1201-5209-1001",
    kode_unit_kerja: 1,
    nama_unit_kerja: "KANTOR DIREKSI",
    jenis_kelamin: "Male",
    tempat_lahir: "SURABAYA",
    tanggal_lahir: "1952-09-19T17:00:00.000Z",
    usia: 69,
    no_telp: "081259280327",
    golongan_kerja: "IVD/4",
    golongan_pensiun: "S",
    no_pegawai: 20120315,
    tanggal_pensiun: "2008-09-30T17:00:00.000Z",
    nama_penerima_mp: "Bambang Eko Widodo, Ir.",
    alamat:
      "JL. BLIMBING II/54 RT.006/RW.004 KEC.WADUNGASRI KAB.WARU SIDOARJO ",
    no_telp_lainnya: "-",
    no_hp: "081259280327",
    no_hp_do: "-",
    no_peserta_lama: "5209007",
    nama_jenis_pensiun: "Pensiun Normal",
    nama_bank: "BANK MANDIRI",
    atas_nama: "Bambang Eko Widodo, Ir.",
    alamat_lainnya: "-",
    no_pegawai_lama: "020120315",
    nik_peseta_pensiun: "3515182009520003",
    nik_penerima_mp: "3515182009520003",
  };
</script>

<svelte:head>
  <title>Cari Data Peserta</title>
</svelte:head>

<Header>Cari Data Peserta Pensiunan</Header>

<Search />

<a href="/lapor">Lapor!</a>
