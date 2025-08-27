import ComProposalPageView from "./comProposalPageView";

export default async function ComProposalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const eventId = Number((await params).id);

  return <ComProposalPageView eventId={eventId}></ComProposalPageView>;
}
