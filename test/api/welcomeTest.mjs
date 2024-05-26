import {assert} from 'chai'
import app from '../../assert.js';

//asserting 
//cara meggunakan chai 

describe('Welcome Test',function (){
    it('app should return welcome message',function(){
        assert.equal(app(),'welcome to app')
    })
})