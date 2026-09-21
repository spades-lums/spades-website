# src/hooks

Custom React hooks shared by more than one island, e.g. `useMediaQuery`, `useReducedMotion`.

Only for React code. A hook used by exactly one island can just live in that island's file
until a second island needs it. Plain (non-React) helpers go in `../lib/`.

Example: `useReducedMotion.ts`
