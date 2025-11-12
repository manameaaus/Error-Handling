import express from 'express'
import fs from 'fs'
import productRoutes from '../routes/productRoutes.js'
import errorHandler from '../middleware/errorHandler.js'

const app = express();
app.use(express.json());

app.use('/products', productRoutes);

// [To-Do 6] 👉 Handle unknown routes here (404)

app.use((req,res) => {
    res.status(404).json({error:"Route not found"});
})

app.use(errorHandler);

const PORT = 4545;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
