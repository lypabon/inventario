import mysql from "promise-mysql";
import config from "./../config.js";

const connection = mysql.createPoolCluster({
    host : config.host,
    database : config.database,
    user : config.user,
    password : config.password,
});


const getConnection = () => {
    return connection 
}

 export default getConnection;  // Exportamos la conexión para usarla en otros archivos

 