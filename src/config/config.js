import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const conectionDB = await mongoose.connect(process.env.MONGO_URI);

        const url = `CONECTADO A MONGO DB SERVER: ${conectionDB.connection.host} EN PUERTO: ${conectionDB.connection.port}`;
        console.log(url); 
    }
    catch (error) {
        console.log(`${error.message}`);
        process.exit(1); 
    }
}

export default conectarDB;
