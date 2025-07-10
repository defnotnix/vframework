import { moduleApiCall } from "@nyx/core";

async function getAll() {
  return await moduleApiCall.getRecords({
    endpoint: "/products",
  });
}

export const apiModule = {
  getAll,
};
