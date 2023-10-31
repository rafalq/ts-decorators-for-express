import { Request, Response } from 'express';
import { get, controller } from './decorators/index.js';
import { formTemplate } from '../templates/index.js';

@controller('')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(formTemplate);
  }
}
