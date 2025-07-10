import { moduleApiCall } from "@vkit/core";

async function getAll() {
  return await moduleApiCall.getRecords({
    endpoint: "/products",
  });
}

export const apiModule = {
  getAll,
};
