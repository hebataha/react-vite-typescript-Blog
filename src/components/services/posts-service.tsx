import { endpoint } from "../../config/endpoints";

export function getPosts(params:any = {}) {
  return endpoint.get("/posts");
}
