const request = require("supertest");

const { createApp } = require("../app");
const { dataSource } = require("../api/models/dataSource");

describe("Movie CRUD Test", () => {
  let app;
  beforeAll(async () => {
    app = createApp();
    await dataSource.initialize().then(async () => {
      await dataSource.query(
        `
        INSERT INTO movies (
            id,
            title, 
            title_eng, 
            duration_min, 
            age_limit,  
            descriptions, 
            thumbnail_image_url, 
            director, 
            price, 
            actors,  
            trailer_videos_url,
            still_cut_image,
            opening_date
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);
        `,
        [
          1,
          "명량",
          "Myeongnyang",
          1,
          1,
          "명량",
          "명량",
          "명량",
          1.0,
          "명량",
          JSON.stringify([
            { id: 0, trailer: "명량" },
            { id: 1, trailer: "명량2" },
            { id: 2, trailer: "명량3" },
          ]),
          "명량",
          "2022-12-10",
        ]
      );
    });
  });

  afterAll(async () => {
    await dataSource.query(`SET foreign_key_checks =0;`);
    await dataSource.query(`TRUNCATE movies`);
    await dataSource.query(`SET foreign_key_checks =1;`);
    await dataSource.destroy();
  });

  test("SUCCESS: MOVIE DETAIL", async () => {
    await request(app).get("/movie/1").expect(200).expect({
      title: "명량",
      title_eng: "Myeongnyang",
      duration_min: 1,
      age_limit: 1,
      opening_date: "2022-12-09T15:00:00.000Z",
      director: "명량",
      actors: "명량",
      descriptions: "명량",
      thumbnail_image_url: "명량",
      still_cut_image: "명량",
    });
  });

  test("FAILED: MOVIE DETAIL - REQUESTED DATA IS NOT FOUND", async () => {
    await request(app)
      .get("/movie/2")
      .expect(404)
      .expect({ message: "REQUESTED_DATA_IS_NOT_FOUND" });
  });

  test("FAILED: MOVIE DETAIL - INPUT FOR THE PATH PARAMETER SHOULD BE A NUMBER", async () => {
    await request(app)
      .get("/movie/a")
      .expect(400)
      .expect({ message: "INPUT_FOR_THE_PATH_PARAMETER_SHOULD_BE_A_NUMBER" });
  });

  test("SUCCESS: MOVIE LIST", async () => {
    await request(app)
      .get("/movie")
      .expect(200)
      .expect([
        {
          id: 1,
          title: "명량",
          age_limit: 1,
          opening_date: "2022-12-09T15:00:00.000Z",
          thumbnail_image_url: "명량",
        },
      ]);
  });

  test("SUCCESS: MOVIE TRAILER", async () => {
    await request(app)
      .get("/movie/trailer/1")
      .send({})
      .expect(200)
      .expect(
        JSON.stringify({
          trailer_videos_url: [
            { id: 0, trailer: "명량" },
            { id: 1, trailer: "명량2" },
            { id: 2, trailer: "명량3" },
          ],
        })
      );
  });

  test("FAILED: MOVIE TRAILER - REQUESTED DATA IS NOT FOUND", async () => {
    await request(app)
      .get("/movie/trailer/2")
      .expect(404)
      .expect({ message: "REQUESTED_DATA_IS_NOT_FOUND" });
  });

  test("FAILED: MOVIE TRAILER - INPUT FOR THE PATH PARAMETER SHOULD BE A NUMBER", async () => {
    await request(app)
      .get("/movie/trailer/a")
      .expect(400)
      .expect({ message: "INPUT_FOR_THE_PATH_PARAMETER_SHOULD_BE_A_NUMBER" });
  });
});
