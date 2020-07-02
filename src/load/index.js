import { sleep } from 'k6'

import findCompanies from './findCompanies.js'
import getAllUsers from './getAllUsers.js'

export let options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '30s', target: 0 },
  ],
  tags: {
    name: '10 users',
  },
}

// export let options = {
//   stages: [
//     { duration: '30s', target: 1 },
//     { duration: '30s', target: 0 },
//   ],
//   tags: {
//     name: '1 user',
//   },
// }

export default () => {
  findCompanies()
  sleep(2)
}
