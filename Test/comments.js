const supertest = require('supertest');
const { expect } = require('chai');
const dotenv = require('dotenv');
const { createRandomComment } = require('../helpers/comment_helper');

dotenv.config();

describe('/comments route', function() {
  const request = supertest(process.env.SUPERTEST_BASE_URL);
  const token = process.env.SUPERTEST_USER_TOKEN;
  const debug = process.env.SUPERTEST_DEBUG === '1';
  let postId = null;
  let commentId = null;

  it('should partially update comment with PATCH /comments/:id', async function() {
    const data = {
      body: 'Body changed -again'
    };
    const res = await request
      .put(`comments/${commentId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(data);

    expect(res.status).to.equal(200);
    expect(res.body.body).to.equal('Body changed -again');
  });
});




