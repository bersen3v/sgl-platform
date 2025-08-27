import GetUserPage from "./getUserPage";

export default async function EditUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const userId = (await params).id;
  return <GetUserPage userId={userId}></GetUserPage>;
}
