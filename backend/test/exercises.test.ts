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

describe('GET /api/exercises', () => {
    beforeEach( async () => { await prisma.exercise.deleteMany() })
    test('should return an empty array when there are no exercises', async () => {
        const response = await request.get('/api/exercises');
        assert.strictEqual(response.status, 200);
        assert(Array.isArray(response.body), 'Response should be an array');
        });
    test("should return all the exercises in the database", async ()=> {
        await prisma.exercise.create({data: {name: "Pull Up", muscleGroup: "Back", category: "Calisthenics"}})   
        const response = await request.get('/api/exercises');
        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.body.length, 1);
        assert.strictEqual(response.body[0].name, "Pull Up");
    })
})

describe('POST /api/exercises', () => {
    beforeEach( async () => { await prisma.exercise.deleteMany() })
    test('should create a new exercise', async () => {
        const response = await request.post('/api/exercises').send({
            name: "Push Up",
            muscleGroup: "Chest",
            category: "Calisthenics"
        });
        assert.strictEqual(response.status, 201);
        assert.strictEqual(response.body.name, "Push Up");
    });
    test("should return 400 if required fields are missing", async () => {
        const response = await request.post('/api/exercises').send({
            name: "Squat"
        });
        assert.strictEqual(response.status, 400);
    });
    test("should check if the exercise already exists", async () => {
        await prisma.exercise.create({data: {name: "Bulgarian Split Squat", muscleGroup: "Legs", category: "Calisthenics"}})
        const response = await request.post('/api/exercises').send({
            name: "Bulgarian Split Squat",
            muscleGroup: "Legs",
            category: "Calisthenics"
        });
        assert.strictEqual(response.status, 400);   
    })
});
