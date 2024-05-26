import request from 'supertest'
import { baseUrl } from '../../env.js'
baseUrl

describe('POST Request Example',function (){
    it('add pet',async()=> {
        const response = request(baseUrl)
        .post('/pet')
        .send({
            "name": "cat",
            "photoUrls": [
              "photoUrls1"
            ]
          })
        console.log((await response).status)
    })
})