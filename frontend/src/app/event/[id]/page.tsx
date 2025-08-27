import EventPageView from "./eventPageView";

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const eventId = Number((await params).id);

  return <EventPageView eventId={eventId}></EventPageView>;
}
