"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/** Reads a value that only exists on the client (e.g. WebGL support, "has mounted"). */
export function useClientValue<T>(getValue: () => T, serverValue: T): T {
  return useSyncExternalStore(noopSubscribe, getValue, () => serverValue);
}
