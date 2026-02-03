import type { TypesPocketBase } from "./pocketbase-types";

declare global {
  namespace App {
    interface Locals {
      pb: TypesPocketBase;
    }
  }
}
