import { getTestResp } from "../lib/strapi";

export default async function TestPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const res = await getTestResp()

  return (
    <div>
      <h1>{res}</h1>
      <p>Slug: {res}</p>
    </div>
  );
}
