const request = require("supertest");
const axios = require('axios')
const { createApp } = require('../app')
const { dataSource } = require('../api/models/dataSource')


describe("signin", ()=> {
    let app;

    beforeAll(async ()=> {
        app= createApp();
        await dataSource.initialize();
    });

    afterAll(async () => {
        await dataSource.query(`SET foreign_key_checks =0;`)
        await dataSource.query(`TRUNCATE users`)
        await dataSource.query(`SET foreign_key_checks =1;`)

        await dataSource.destroy();
    });

    test("SUCCESS : kakao login", async ()=>{
        axios.get = jest.fn().mockReturnValue({
            data: {
                id:1010101010,
                connected_at :"2022-08-30T14:00:00Z",
                properties :{
                    nickname: "김코드",
                },
                kakao_account: {
                    profile_nickname_needs_agreement: false,
                    profile: {
                        nickname: "김코드",
                    },
                    has_email : true,
                    email_needs_agreement : false,
                    is_email_vaild : true,
                    is_email_verfied : true,
                    email: "test@testing.com",
                },
            },
        });
        await request(app)
        .post("/auth/kakao/signin")
        .set({authorization: "Bearer ${kakaoToken}"})
        .expect(200)
    });

    test("FAILED: NEED ACCESSTOKEN", async () =>{ 
        await request(app)
        .post("/auth/kakao/signin")
        .expect(400)
        .expect({ message:"tokenErr"})
    })

    test("FAILED : CANNOT CREATE USER", async ()=>{
        jest.mock('axios')
        axios.get = jest.fn().mockReturnValue({
            data: {
                id: '1012134121',
                connected_at :"2022-08-30T14:00:00Z",
                properties :{
                    nickname: "김코드",
                },
                kakao_account: {
                    profile_nickname_needs_agreement: false,
                    profile: {
                        nickname: "김코드",
                    },
                },
            },
        });

        await request(app)
        .post("/auth/kakao/signin")
        .set({authorization: "a"})
        .expect(400)
        .expect({message:"CANNOT_CREATE_USER"})
    })
})