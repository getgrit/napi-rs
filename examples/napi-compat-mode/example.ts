import { AsyncLocalStorage } from 'node:async_hooks'

const bindings = require('./index.node')

// Activating this breaks the example:
// const storage = new AsyncLocalStorage()
// storage.enterWith(42)

const promise = new Promise<void>((resolve, reject) => {
  bindings.testThreadsafeFunction((err: any, args: any) => {
    console.log('args', args)
    resolve(args[0])
  })
})

promise.then(() => {
  console.log('called')
  process.exit(0)
})
