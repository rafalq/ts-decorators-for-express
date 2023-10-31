import { Router, Request, Response, NextFunction } from 'express'
import { formTemplate } from '../templates/index.js'

// @controller('/')
class LoginController {
  // @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(formTemplate)
  }
}
