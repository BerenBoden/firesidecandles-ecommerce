import http from "@framework/utils/http";
import { NEW_API_ENDPOINTS } from "@framework/utils/api-endpoints";

export async function getHomePageContent() {
    // const [_key, _params] = queryKey;
    const data = await http.get(NEW_API_ENDPOINTS.GET_HOME_PAGE_CONTENT);
    return data;
}
