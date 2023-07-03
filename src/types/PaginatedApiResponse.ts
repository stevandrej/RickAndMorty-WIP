import { Pagination } from "./Pagination";

export interface PaginatedApiResponse<T> {
  info: Pagination;
  results: T[];
}
