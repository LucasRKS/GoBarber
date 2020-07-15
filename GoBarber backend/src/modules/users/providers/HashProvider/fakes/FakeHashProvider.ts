import IHashProvider from '../models/IHashProvider';

export default class FakeHashProvider implements IHashProvider {
    generateHash(payload: string): string {
        return payload;
    }

    compareHash(payload: string, hashed: string): boolean {
        return payload === hashed;
    }
}
