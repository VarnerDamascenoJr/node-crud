
import {db} from "../config/database.js";

export const home=(req, res)=>{
	res.send("<h1>Backend alive!!!</h1>");
};

export const getAllBooks =async function(req,res){
	const q = "SELECT * FROM books";

	await db.query(q,(err, data)=>{
		if(err) return res.json(err);
		return res.json(data);
	});
};

export const addBook =async (req, res)=>{
	const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)";

	const values =[
		req.body.title,
		req.body.desc,
		req.body.price,
		req.body.cover,
	];

	await db.query(q, [values],(err,data)=>{
		if(err) return res.json(err);
		return res.json(data);
	});
};

export const deleteBook = async (req, res)=>{

	const bookId = req.params.id;

	const q = "DELETE FROM books WHERE id = ?";

	await db.query(q,[bookId],(err)=>{
		if(err) return res.json(err);
		return res.json("Deleted succesfully");
	});
};

export const putBook = async (req, res)=>{
	const bookId = req.params.id;

	const q = "UPDATE books SET `title`=?,`desc`=?,`price`=?,`cover`=? WHERE id=?";
	const values =[
		req.body.title,
		req.body.desc,
		req.body.price,
		req.body.cover,
	];

	db.query(q, [...values,bookId], (err)=>{
		if(err)return res.json(err);
		return res.json("Table updated succesfully!!!");
	});
};




