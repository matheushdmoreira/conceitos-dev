import { Request, Response } from 'express';
import CreateUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
  const user = CreateUser({
    email: 'matheus.moreira@imarkts.com', 
    password: '123456',
    techs: [
      'ReactJS', 
      'React Native',
      { title: 'NodeJS', experience: 100 }
    ]
  });

  return res.json({message: 'Hello World'});
}