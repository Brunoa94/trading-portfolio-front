import { useRef } from "react";
import { toast } from "sonner";

export default function useErrorHandling({ error }: { error: Error | null }) {
  const errorTriggered = useRef<boolean>(false);

  const triggerError = () => {
    if (error && !errorTriggered.current) {
      errorTriggered.current = true;

      toast.error("Something went wrong", {
        description: error.message,
        duration: 3000,
      });
    }
  };

  return triggerError;
}
