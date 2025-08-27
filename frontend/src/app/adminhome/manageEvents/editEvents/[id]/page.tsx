import GetEventView from "./getEventView";

export default async function EditEventsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const eventId = Number((await params).id);

  return <GetEventView eventId={eventId}></GetEventView>;
}
