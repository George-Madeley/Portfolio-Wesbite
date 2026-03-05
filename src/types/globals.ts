import { ErrorObject } from "serialize-error";

export interface Repo {
  name: string;
  owner: string;
}

export type PropsWithLoading<T extends object> =
  | { loading: true }
  | (T & { loading?: false });

export type Result<
  Data,
  Success extends object = object,
  Failure extends object = object,
> =
  | ({ success: true; data: Data } & Success)
  | ({ success: false; error: ErrorObject } & Failure);
