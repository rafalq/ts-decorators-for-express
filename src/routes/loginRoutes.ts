import { Router, Request, Response, NextFunction } from 'express'
import { createTemplate, formTemplate } from '../templates/index.js'

enum AUTH {
  EMAIL = 'email@gm.com',
  PASSWORD = 'password',
}
interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined
  }
}

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session?.loggedIn) {
    next()
    return
  } else {
    res.redirect('/login')
  }

  res.status(403)
  res.send(createTemplate('Not Permitted', 'error'))
}

const router = Router()

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body

  if (email && password && email === AUTH.EMAIL && password === AUTH.PASSWORD) {
    req.session = { loggedIn: true }
    res.redirect('/')
  } else {
    res.send(
      createTemplate('Invalid email or password!', 'goBack', '', 'error')
    )
  }
})

router.get('/', (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(createTemplate('You are logged in!', 'protected'))
  } else {
    res.send(createTemplate('You are logged out!', 'loggedOut'))
  }
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined
  res.redirect('/')
})

router.get('/protected', requireAuth, (req: Request, res: Response): void => {
  res.send(createTemplate('Welcome to protected route!', 'loggedIn'))
})

export { router }
