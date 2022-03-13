export interface IPaginationResponse<T> {
  totalCount: number;
  values: T[];
}
