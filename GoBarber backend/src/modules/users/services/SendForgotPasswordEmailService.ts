import { inject } from 'tsyringe';

// import User from '../infra/typeorm/entities/User';

import IMailProvider from '@shared/container/providers/MailProvider/IMailProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
    email: string;
}

class SendForgotPasswordEmailService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('MailProvider')
        private mailProvider: IMailProvider,
    ) {}

    public async execute({ email }: IRequest): Promise<void> {
        this.mailProvider.sendMail(email, 'Olá');
    }
}

export default SendForgotPasswordEmailService;
