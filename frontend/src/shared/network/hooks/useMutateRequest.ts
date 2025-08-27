import { useCallback, useMemo, useReducer } from "react";
import { requestReducer } from "./components/requestReducer";
import { InitialState } from "./components/requestStates";

export function useMutateRequest<T, TPayload>(
  request: (payload: TPayload) => Promise<T>,
  handlers?: {
    onSuccess?: (response: T) => void;
    onFail?: (error: string) => void;
  }
) {
  const [state, dispatch] = useReducer(requestReducer, InitialState);
  const memoizedHandlers = useMemo(() => handlers, [handlers]);

  const mutate = useCallback(
    (payload: TPayload) => {
      dispatch({
        type: "Loading",
      });

      let isDestructed = false;

      request(payload)
        .then((response) => {
          if (!isDestructed) {
            dispatch({
              type: "Loaded",
              data: response,
            });
            if (memoizedHandlers?.onSuccess) {
              memoizedHandlers?.onSuccess(response);
            }
          }
        })
        .catch((reason: string) => {
          if (!isDestructed) {
            dispatch({
              type: "Loaded",
              data: undefined,
            });
            if (memoizedHandlers?.onFail) {
              memoizedHandlers?.onFail(reason);
            }
          }
        });
      return () => {
        isDestructed = true;
      };
    },
    [memoizedHandlers]
  );
  return [state, mutate] as const;
}
