import { request } from "./request";

export function getCategory() {
  return request({
    url: "/api/w6/category",
  });
}

export function getCategoryInfo(maitKey) {
  return request({
    url: "/api/w6/subcategory",
    params: {
      maitKey,
    },
  });
}
