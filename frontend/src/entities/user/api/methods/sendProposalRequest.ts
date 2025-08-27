export type SendProposalRequestProps = {
  name: string;
  phoneNumber: string;
  comment: string;
  eventId: number;
};

export type SendProposalRequestAnswer = boolean;

export default async function sendProposalRequest({
  name,
  phoneNumber,
  comment,
  eventId,
}: SendProposalRequestProps): Promise<SendProposalRequestAnswer> {
  return true;
}
