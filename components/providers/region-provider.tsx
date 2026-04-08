"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState
} from "react";

import { RegionKey, regionalProfile } from "@/data/regionalProfile";

type RegionContextValue = {
  region: RegionKey;
  setRegion: (region: RegionKey) => void;
  profile: (typeof regionalProfile)[RegionKey];
};

const RegionContext = createContext<RegionContextValue | undefined>(undefined);

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegion] = useState<RegionKey>("uk");

  const value = useMemo(
    () => ({
      region,
      setRegion,
      profile: regionalProfile[region]
    }),
    [region]
  );

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>;
}

export function useRegion() {
  const context = useContext(RegionContext);

  if (!context) {
    throw new Error("useRegion must be used within a RegionProvider.");
  }

  return context;
}
