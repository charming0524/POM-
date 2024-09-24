import { test, expect, request } from '@playwright/test';


test('Api testing', async({request})=>{
    const Url = "https://reqres.in/api/users/2";

    const response = await request.get(Url);

    expect(response.status()).toBe(200);

    const responseData = await response.json();

    console.log(responseData);

    const data = Object.keys(responseData.data)

    const dataTotal = data.length

    console.log(dataTotal);

    expect(data).toContain('email')

});