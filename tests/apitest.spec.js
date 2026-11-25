import {test,expect} from '@playwright/test';
var userid;
test.skip('Fetch_data',async({request})=>{
const Response=await request.get("https://reqres.in/api/users?page=2")

console.log(await Response.json())
expect(await Response.status()).toBe(200)
})

 test('create_data',async({request})=>{
    const Response=await request.post('https://reqres.in/api/users',
        {
            data:{
                "name":"Rajesh",
                  "job":"Nothing"
                 },
            Headers:{
                     "Accept":"application/json"
                   }

        });
        console.log(await Response.json())
        expect(Response.status()).toBe(201)
        var res= await Response.json()
         userid=res.id;

    })
 test('upadate_data',async({request})=>{
       const Response= await request.put('https://reqres.in/api/users/'+userid,{
        data:{"name":"Hari",
               "job":"PVT"
             },
        Header: {
             "Accept":"application/json"

              }
                })
            console.log(await Response.json())
            expect( await Response.status()).toBe(200)
            var res=await Response.json()
            userid=res.id
         })

test('Delete-data',async({request})=>{
     const Response=await request.delete('https://reqres.in/api/users/'+userid)
     console.log(await Response.json())
    expect(await Response.status()).toBe(204)
})