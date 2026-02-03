import type { TypesPocketBase } from "./pocketbase-types";

declare namespace App {
  interface Locals {
    pb: TypesPocketBase;
  }
}
