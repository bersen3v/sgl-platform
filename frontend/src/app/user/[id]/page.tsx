import { userApiManager } from "@/entities/user/api/userApiManager";
import useRequest from "@/shared/network/hooks/useRequest";
import UserPageView from "./userPageView";

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const userId = (await params).id;

  return <UserPageView userId={userId}></UserPageView>;
}
