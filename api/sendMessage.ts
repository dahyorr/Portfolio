import { MessageRequestBody } from 'typings'

export const sendMessage = async (body: MessageRequestBody) => {
  return fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
}