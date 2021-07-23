const { User } = require('../../src/app/models');

describe('Authentication', () => {
    it('Should create User when given right parameters', async() => {
        const user = await User.create({
            name: 'Nome para teste',
            email: 'nometeste@outlook.com',
            password_hash: '123456'
        });

        expect(user.email).toBe('nometeste@outlook.com');
    });
})