import { Request, Response } from "express";
import statusCode from "../statusCode";
import BookService from "../services/books.service";

class BooksController {
  constructor(
    private bookService = new BookService()
  ) { }

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(statusCode.OK).json(books);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const book = await this.bookService.getById(id);

    if (!book) {
      return res.status(statusCode.NOT_FOUND)
        .json({ message: 'Book not found! '});
    }

    res.status(statusCode.OK).json(book);
  }

  public create = async (req: Request, res: Response) => {
    const book = req.body;

    const bookCreated = await this.bookService.create(book);
    res.status(statusCode.CREATED).json(bookCreated);
  };

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const book = req.body;
    await this.bookService.update(id, book);

    res.status(statusCode.NO_CONTENT).end();
  }

  public remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.bookService.remove(id);

    res.status(statusCode.NO_CONTENT).end();
  }

};

export default BooksController;
