export interface CounterProps {
  onHit: () => void;
  onChangeAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddAmount: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value: number;
  incrementAmount: number;
}
