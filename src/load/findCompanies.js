import http from 'k6/http'
import { check, group, sleep } from 'k6'

let query = `
 query FindCompany {
  companiesByUser(userId: "5ec69e3858a05609422b1a25"){
   name
  } 
 }`

const BASE_URL = 'https://api2.smartcfo.cl'
const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWM2OWUzODU4YTA1NjA5NDIyYjFhMjUiLCJ1c2VyIjp7InJvbGVzIjpbIkFETUlOIl0sImVtYWlscyI6W3siYWRkcmVzcyI6InJvYmVydEBvcmlvbnNvZnQuaW8iLCJ2ZXJpZmllZCI6ZmFsc2V9XSwic2VydmljZXMiOnsib2xkUGFzc3dvcmRzIjpbXSwicGFzc3dvcmQiOnsiYmNyeXB0IjoiJDJhJDEyJGdjUnovWmlKZ1VXM0JUMzJ4eHFsOU9jSElWd2ZncTAuN2xOSkhIR3BGUVF3QjNTNHUzeXRHIiwiY3JlYXRlZEF0IjoiMjAxOS0wNC0xMFQxNTo0MDo0NS4yMDhaIn0sImVtYWlsVmVyaWZ5Ijp7ImRhdGUiOiIyMDE5LTA0LTEwVDE1OjQwOjQ1LjIyNloiLCJlbWFpbCI6InJvYmVydEBvcmlvbnNvZnQuaW8iLCJ0b2tlbiI6IjZRdWliN25TR3l2UzRqMjNuIn19LCJwcm9maWxlIjp7ImZpcnN0TmFtZSI6IlJvYmVydCIsImxhc3ROYW1lIjoiWmliZXJ0In0sImNyZWF0ZWRBdCI6IjIwMjAtMDUtMjFUMTU6Mjg6NTguMzk0WiIsInVwZGF0ZWRBdCI6IjIwMjAtMDYtMDVUMTY6MjU6MzEuNTgzWiIsImlkIjoiNWVjNjllMzg1OGEwNTYwOTQyMmIxYTI1In0sImlhdCI6MTU5MzcxOTI3MiwiZXhwIjoxNTkzNzMwMDcyfQ.B9OROOlmczwaC26SFvtQVK1RT32shiKpEzT9VreCAeQ`

export default () => {
  group('findCompanies', function () {
    const headers = {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    }

    const res = http.post(`${BASE_URL}/graphql`, JSON.stringify({ query }), {
      headers,
      tags: {
        reqTag: 'getCompanies',
      },
    })

    check(res, {
      'status is 200': r => r.status === 200,
    })

    sleep(1)
  })
}
