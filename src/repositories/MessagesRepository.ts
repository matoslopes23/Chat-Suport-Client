import { Entity, EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";

@EntityRepository(Message)
class MessagesReposytory  extends Repository<Message>{

}

export { MessagesReposytory }