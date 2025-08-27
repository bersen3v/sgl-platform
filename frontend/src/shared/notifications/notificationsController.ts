import { toast } from "sonner";

export function showErrorNotification({ message }: { message: string }) {
  toast.error(message);
}

export function showSuccessNotification({ message }: { message: string }) {
  toast.success(message);
}
