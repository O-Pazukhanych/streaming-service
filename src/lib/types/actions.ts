export type ActionResponseStatus = 'success' | 'warning' | 'error' | 'info'

export interface ResponseMessage {
	status: number
	message: string
	description?: string
}
