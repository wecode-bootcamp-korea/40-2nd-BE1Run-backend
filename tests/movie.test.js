const request = require("supertest");

const { createApp }  = require("../app")
const { dataSource } = require("../api/models/dataSource");

describe("movies", () =>{
    let app;

    beforeAll(async ()=> {
        app = createApp();
        await dataSource.initialize();
        await dataSource.query(`
            INSERT INTO movies(
                title,
                title_eng,
                duration_min,
                age_limit,
                opening_date,
                descriptions,
                thumbnail_image_url,
                director,
                price,
                actors,
                trailer_videos_url,
                still_cut_image
                ) VALUES(
                "testing",
                "title",
                120,
                15,
                20230101,
                "descriptions",
                "thumbnail_image_url", 
                "director",
                15000,
                "actors",
                "trailer_videos_url",
                "still_cut_image")`)
    });

     afterAll(async ()=>{
        await dataSource.query(`SET foreign_key_checks =0;`)
        await dataSource.query(`TRUNCATE movies`)
        await dataSource.query(`SET foreign_key_checks =1;`)

        await dataSource.destroy();
    });

    test("SUCCESS : search product", async() => {
        await request(app)
        .get('/movies/search?keyword=testing')
        .expect(200)
        .expect({"data":
            [{"id":1,
            "title":"testing",
            "titleEng":"title",
            "durationMin":120,
            "ageLimit":15,
            "openingDate":"20230101",
            "descriptions":"descriptions",
            "thumbnailImageUrl":"thumbnail_image_url",
            "director":"director",
            "price":"15000.00",
            "actors":"actors",
            "trailerVideoUrl":"trailer_videos_url",
            "stillCutImage":"still_cut_image"}]
        })
    })

    test("FAILED : cannot search product", async()=>{
      
        await request(app)
        .get('/movies/search?keyword=none')
        .expect(404)
        .expect({message:"CANNOT_SEARCH"})
    })
})