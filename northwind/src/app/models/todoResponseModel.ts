import { Todo } from './todo';
import { ResponseModel } from './responseModel';
export interface TodoResponseModel extends ResponseModel{
    data:Todo[]
}