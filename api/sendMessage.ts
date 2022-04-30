import axios from 'axios'
import {MessageRequestBody} from 'typings'

export const sendMessage = async (body: MessageRequestBody) => {
  return axios.post(process.env.NEXT_PUBLIC_FORMSPREE_URL || '', body)
}