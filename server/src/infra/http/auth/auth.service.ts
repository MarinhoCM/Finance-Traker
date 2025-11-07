import { serverConfig } from "@config/settings.config";
import { EncryptService } from "@infra/services/encrypt/encrypt.service";
import { UsersService } from "@infra/services/users/users.service";
import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly user: UsersService,
        private readonly jwt: JwtService,
        private readonly encrypt: EncryptService
    ) { }

    async register(username: string, passwd: string): Promise<{ access_token: string }> {
        const registeredUser = await this.user.getUserByName(username)

        if (!registeredUser) {
            const hashedPass = await this.encrypt.hash(passwd)
            const created = await this.user.create({ name: username, passwd: hashedPass })

            const payload = {
                sub: created.id,
                username: created.name
            }

            return { access_token: await this.jwt.signAsync(payload, { secret: serverConfig.key }) }
        }

        throw new ConflictException(`There is already a user named ${username}.`)
    }

    async login(username: string, passwd: string): Promise<{ access_token: string }> {
        const registeredUser = await this.user.getUserByName(username)

        if (registeredUser) {
            const hasAccess = await this.encrypt.compare(passwd, registeredUser.passwd)

            if (!hasAccess) throw new UnauthorizedException(`The user's password does not match.`)

            const payload = {
                sub: registeredUser.id,
                username: registeredUser.name
            }

            return { access_token: await this.jwt.signAsync(payload, { secret: serverConfig.key }) }
        }

        throw new NotFoundException(`We were unable to identify a user with the name ${username}.`)
    }
}