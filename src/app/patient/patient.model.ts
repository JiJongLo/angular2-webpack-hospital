export interface Patient {
  readonly id: number | string;
  readonly name: string;
  readonly logo: string;
  readonly fullAddress?: string;
  readonly birthDay?: string;
}
