export function getQueryString(
  queryParam: string | string[] | undefined
): string {
  if (!queryParam) return "";
  if (typeof queryParam === "string") return queryParam;
  if (Array.isArray(queryParam)) {
    return queryParam.find(v => typeof v === "string") ?? "";
  }
  return "";
}
