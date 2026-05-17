import app from '../src/app.js';
import { test, describe, before, beforeEach }  from 'node:test';
import assert from 'node:assert';
import supertest from 'supertest';
const request = supertest(app);
import { prisma } from '../src/config/database.js'
import { execSync } from 'node:child_process';

before( ()=> {
    execSync('npx prisma db push')
})

describe('GET /api/excercises', () => {
    beforeEach( async () => { await prisma.exercise.deleteMany() })
    test('should return an empty array when there are no exercises', async () => {
        const response = await request.get('/api/excercises');
        assert.strictEqual(response.status, 200);
        assert(Array.isArray(response.body), 'Response should be an array');
        });
    test("should return all the exercises in the database", async ()=> {
        await prisma.exercise.create({data: {name: "Pull Up", muscleGroup: "Back", category: "Calistenics", image:"https://example.com/pullup.jpg"}})   
        const response = await request.get('/api/excercises');
        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.body.length, 1);
        assert.strictEqual(response.body[0].name, "Pull Up");
    })
})

