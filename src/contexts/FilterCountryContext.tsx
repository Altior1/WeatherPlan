import { createContext } from 'react';

export const FilterCountryContext = createContext<{ filterCountry: string | null; dispatch: React.Dispatch<any> }>(null as any);