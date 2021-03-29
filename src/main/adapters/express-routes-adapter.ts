import { Controller, HttpRequest } from '../../presentations/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return (req: Request, res: Response): void => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    controller.handle(httpRequest)
      .then((httpResponse) => {
        res.status(httpResponse.statusCode).send(httpResponse.body)
      })
  }
}
