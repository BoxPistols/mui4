export default function getApi() {
  const apiKey = process.env.theme ? process.env.theme : undefined
  apiKey && console.log(`Using theme: ${apiKey}`)
  if (!apiKey) {
    throw new Error('No theme specified')
  } else if (apiKey === 'default') {
    return require('./api/default')
  } else if (apiKey === 'dark') {
    return require('./api/dark')
  } else if (apiKey === 'light') {
    return require('./api/light')
  } else {
    throw new Error(`Unknown theme: ${apiKey}`)
  }
  // apiKey === 'dark' ? return './api/dark.json' : return './api/light.json'
}
