import prismaClient from '../lib/prisma.js'

async function insertUser(user) {
    prismaClient.users.create({
        data: {
            name: user.email,
            email: user.email,
            password: user.password,
        }
    }).then().catch((e) => { throw e });
}

async function insertFile(file) {
    prismaClient.files.create({
        data: {
            name: file.name,
            link: file.link,
            size: file.size,
            type: file.type,
            parent_id: file.parent_id,
            extension: file.extension,
        }
    }).catch(err)
    {
        throw "err while creating file";
    }
}

async function getUserFiles(user) {
    let result = await prismaClient.files.findMany({
        where: { id: user.id }
    }).catch(err)
    {
        throw "err while creating file";
    }
    return result;
}

async function checkIfUserExist(email) {
    const res = await prismaClient.users.findFirst({
        where: {
            email: email
        }
    })
    if (res) return true;
    return false;
}

async function getUserByEmail(email) {
    const res = await prismaClient.users.findFirst({
        where: {
            email: email
        }
    })
    return res;
}

async function getUserByid(id) {
    const res = await prismaClient.users.findFirst({
        where: {
            id: id
        }
    })
    return res;
}


export default { insertUser, checkIfUserExist, insertFile, getUserFiles, getUserByEmail, getUserByid }