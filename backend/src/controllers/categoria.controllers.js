import getConnection from "../db/database.js";

const getCategorias = async (req, res) => {
    try {
        const connection = await getConnection();

        const [result] = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");

        res.json(result);

    } catch (error) {
        console.error("ERROR 500:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};

const postCategorias = async (req, res) => {
    try {
        const { CategoriaNombre, Descripcion, Imagen } = req.body;
        const category = { CategoriaNombre, Descripcion, Imagen };
        const connection = await getConnection();

        const [result] = await connection.query("INSERT INTO categorias SET ?", [category]);

        res.json(result);

    } catch (error) {
        console.error("ERROR 500:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};

const getCategory = async (req, res) => {
    try {
        const { id } = req.params; // ← este era el error principal
        const connection = await getConnection();

        const [result] = await connection.query(
            "SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?",
            [id]
        );

        res.json(result);

    } catch (error) {
        console.error("ERROR 500:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};

const deleteCategory = async (req, res) => {
    try {

        console.log("id de categoria a borrar", req.params);
        const { id } = req.params; 
        const connection = await getConnection();

        const [result] = await connection.query(
            "DELETE FROM categorias WHERE CategoriaID = ?",
            [id]
        );

        res.json(result);

    } catch (error) {
        console.error("ERROR 500:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};

export const methodHTTP = {
    getCategorias,
    postCategorias,
    getCategory,
    deleteCategory
};

