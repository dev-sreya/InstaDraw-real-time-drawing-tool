import { NextFunction, Request, Response } from "express";
import jwt, {JwtPayload} from "jsonwebtoken";
import { JWT_SECRET } from '@repo/backend-common/config';

export function middleware(req: Request, res:Response, next: NextFunction) {

    const token = req.headers["authorization"] ?? "";

  const decoded = jwt.verify(token, JWT_SECRET);
  if(decoded){
    (req as any).userid = (decoded as JwtPayload).userid; 
    next();

  // Call the next middleware or route handler
}
else{
    res.status(403).json(
       { message: "Unauthorized"}
    )
}
}