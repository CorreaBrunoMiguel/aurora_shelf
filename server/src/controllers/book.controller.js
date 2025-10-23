import Book from '../models/Book.js';

// Criar Livro
export async function createBook(req, res) {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Listar Livros
export async function getAllBooks(req, res) {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Buscar Livro por Id
export async function getBookById(req, res) {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Atualizar Livro
export async function updateBook(req, res) {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Remover Livro
export async function deleteBook(req, res) {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Livro removido com sucesso ' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
