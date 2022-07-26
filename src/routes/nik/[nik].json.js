const URL_API = import.meta.env.VITE_URL_API_PENSIUN;

export const GET = async ({ params }) => {
  const query = { param: "nik", value: params.nik };
  const url = `${URL_API}?action=search&query=${JSON.stringify(query)}`;
  const res = await fetch(url);
  const data = await res.json();

  if (res.ok) {
    return {
      body: data,
    };
  }
  return {
    status: 400,
    error: "gagal fect",
  };
};
