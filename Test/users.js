import supertest from "supertest";
import { expect } from "chai";
import dotenv from 'dotenv';
import { createRandomUser } from "../helpers/user_helper";



dotenv.config();

describe('/users route', () => {
  
  const request = supertest(process.env.SUPERTEST_BASE_URL);
  const token = process.env.SUPERTEST_USER_TOKEN;
  const debug = process.env.SUPERTEST_DEBUG == 1? true : false;
  
  let userID = null;

   
   it('POST /users', async () => {
    const data = createRandomUser();
    
    const res = await request
        .post('users')
        .set('Authorization', `Bearer ${token}`)
        .send(data);
    
    
    expect(res.body).to.include(data);
    expect(res.body).to.have.property('id');
    expect(res.body).to.have.property('gender');

    expect(res.status).to.eq(201);
    
    
    userID = res.body.id;
});
  });


