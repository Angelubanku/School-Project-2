import supertest from "supertest";
import { expect } from "chai";
import dotenv from 'dotenv';
import { createRandomUser } from "../helpers/user_helper";
import { createRandomTodo } from "../helpers/todo_helper";



dotenv.config();


describe('/todos route', () => {
    
    const request = supertest(process.env.SUPERTEST_BASE_URL);
    const token = process.env.SUPERTEST_USER_TOKEN;
    const debug = process.env.SUPERTEST_DEBUG == 1 ? true : false;

    let userId = null;
    let todoId = null;

    before(async () => {
        const res = await request.post('users').set("Authorization", `Bearer ${token}`).send(createRandomUser());
        userId = res.body.id;
    });

    
    it('GET /todos', async () => {
        const res = await request.get('todos');

        expect(res.body).to.not.be.empty;
        expect(res.status).to.eql(200);
    });
});

    




