/**
 * WordVel site specific setup.
 *
 * Thin wrapper that provides a pre-configured client using this site's
 * WordVel API base URL. All actual functionality comes from @wordvel/react.
 *
 * Follows the same pattern as the bruno_cortina site.
 */

import { createWordVelClient, fetchSite as sdkFetchSite, fetchPage as sdkFetchPage } from "@wordvel/react";

const API_BASE = "http://wordvel-api.test/api/v1";

export const wordvelClient = createWordVelClient({
  baseUrl: API_BASE,
});

/**
 * Convenience re-exports for this site (matching the previous custom API surface).
 * These delegate to the official SDK implementations.
 */
export const fetchSite = () => sdkFetchSite({ baseUrl: API_BASE });
export const fetchPage = (slug) => sdkFetchPage({ baseUrl: API_BASE }, slug);