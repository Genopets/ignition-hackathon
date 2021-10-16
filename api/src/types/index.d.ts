export interface ApplicationError extends Error {
  status?: number;
  syscall?: string;
  code?: string;
}
