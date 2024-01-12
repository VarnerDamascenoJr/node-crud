

import request from "supertest";
import {app} from "../config/server.js";





describe("Fetching all the books", ()=>{
	
	it("Fetching the books",async()=>{
		const response = await request(app).get("/books");
		expect(response.status).toBe(200);
	});
});