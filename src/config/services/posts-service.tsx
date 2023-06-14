import { endpoint } from "../endpoints";

export function getPosts(params:any = {}) {
  return endpoint.get("/posts");
}
