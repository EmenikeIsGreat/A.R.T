import { ChatGPTAPIBrowser } from 'chatgpt'

const api = new ChatGPTAPIBrowser({
  email: "emenikeani3@gmail.com",
  password: "Ninjaboy12345$",
  isGoogleLogin: true
})
await api.initSession()

const result = await api.sendMessage('Hello World!')
console.log(result.response)