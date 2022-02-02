const { Book } = require('../models');

const getAll = async(req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200);
    res.json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async(req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    res.status(200);
    res.json(book);
  } catch(error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
};

const createNew = async(req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;

    const book = await Book.create({
      title,
      author,
      pageQuantity,
    });

    res.status(201);
    res.json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updateById = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } = req.params;

    const result = await Book.update(
      {
        title,
        author,
        pageQuantity,
      },
      {
        where: { id }
      }
    );

    res.status(200);
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookToDelete = await Book.findByPk(id);
    await bookToDelete.destroy();

    res.status(200);
    res.json(bookToDelete);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' })
  }
}

module.exports = {
  deleteById,
  getAll,
  getById,
  updateById,
  createNew,  
}