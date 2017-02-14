export interface Diagnosis {
  readonly code: number | string;
  readonly info: string;
  readonly removed?: string;
  readonly addedDate?: string;
  readonly removedDate?: string;
  readonly patientId:  number;
}
