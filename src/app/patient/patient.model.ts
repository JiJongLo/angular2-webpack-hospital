export interface Patient {
  readonly id: number | string;
  readonly name: string;
  readonly fullAddress?: string;
  readonly birthDay?: string;
}
