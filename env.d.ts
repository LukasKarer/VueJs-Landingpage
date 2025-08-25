/// <reference types="vite/client" />

declare module 'tslib-analytics-client' {
  export interface AnalyticsPayload {
    clientEndpoint?: string
    [key: string]: any
  }

  export interface AnalyticsResponse {
    success: boolean
    message?: string
  }

  export class AnalyticsClient {
    constructor(options: { endpoint: string; projectId: string })

    sendAnalytics(payload?: Partial<AnalyticsPayload>): Promise<AnalyticsResponse>
    autoTrack(): void
  }

  export default AnalyticsClient
}
