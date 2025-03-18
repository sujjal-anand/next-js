export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  // ✅ Fetch data on the server
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  return (
    <div>
      <h1>ID: {id}</h1>
      <h2>Title: {data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
