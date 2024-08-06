import type { ActionResponseStatus, ResponseMessage } from '$lib/types/actions'
import { toasts } from 'svelte-toasts'

const actionType: Map<number[], ActionResponseStatus> = new Map([
	[[200, 299], 'success'],
	[[300, 399], 'warning'],
	[[400, 599], 'error'],
	[[], 'info']
])

const getMessageStatus = (statusCode: number): ActionResponseStatus => {
	for (const entry of actionType) {
		const [key, status] = entry
		const [groupMinAge, groupMaxAge] = key
		if (groupMinAge <= statusCode && groupMaxAge >= statusCode) {
			return status
		}
	}
	return 'info'
}

export const validateResponse = (message: ResponseMessage) => {
	const messageType = getMessageStatus(message.status)

	return toasts[messageType](message.message, message?.description ? message?.description : '')
}
