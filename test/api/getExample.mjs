import request from 'supertest'
const uri ='https://petstore.swagger.io/v2'
describe('Get Request Example',function (){
    it('find pet by status',async()=> {
        const response = request(uri)
        .get('/pet/1')
        console.log((await response).status)
        console.log((await response).body)
    })
})