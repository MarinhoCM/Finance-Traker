import bcrypt from 'bcrypt'

(async () => {
    const hashed = await bcrypt.hash('minha primeira senha', 10)
    console.log(hashed)
})()