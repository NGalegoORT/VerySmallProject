import { getTestResp } from "../lib/strapi";
import { getLayout } from "../lib/strapi";

export default async function TestPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const res = await getTestResp()
  const test = await getLayout();
  
  console.log(test);
  return (
    <div>
      <h1>{res}</h1>
      <p>Slug: {res}</p>
    </div>
  );
}
