import {app} from  "./config/server.js";


app.listen(process.env.PORT, () => {
	return console.log("Backend Online!!!");
});
