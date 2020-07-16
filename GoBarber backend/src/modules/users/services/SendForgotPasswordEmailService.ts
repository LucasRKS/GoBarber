import { inject } from 'tsyringe';
import AppErrror from '@shared/errors/AppError';

// import User from '../infra/typeorm/entities/User';

import IMailProvider from '@shared/container/providers/MailProvider/IMailProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUserTokensRepository';

interface IRequest {
    email: string;
}

class SendForgotPasswordEmailService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('MailProvider')
        private mailProvider: IMailProvider,

        @inject('UserTokensRepository')
        private userTokensRepository: IUserTokensRepository,
    ) {}

    public async execute({ email }: IRequest): Promise<void> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppErrror('User does not exists.');
        }

        await this.userTokensRepository.generate(user.id);

        this.mailProvider.sendMail(email, 'Olá');
    }
}

export default SendForgotPasswordEmailService;
