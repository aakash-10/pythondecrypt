const MD5 = require('md5')
const SECRET = 'Files will never end';

const ALOGORITHM = 'AES-256-CBC';

const SECRET_IV = 'What can you do about it';

const Crypto = require('crypto');

// const {resolve} = require('path')

const {resolve} = require('path');
const {error} = require('console');
const { rejects } = require('assert/strict');
const KEY = Crypto.scryptSync(SECRET, 'salt', 32);
const IV = MD5(SECRET_IV).slice(0,16)

const decryptDataFunction = (hash) => new Promise(
    (resolve,reject)=>{
    try{
        console.log("xxx");
        const DECIPHER = Crypto.createDecipheriv(ALOGORITHM, KEY, IV);

        let decrypted = DECIPHER.update(hash, 'hex', 'utf8')
        decrypted += DECIPHER.final('utf8');
        console.log(decrypted);
        resolve(decrypted);
    } catch(error){
        resolve(error)
    }
    }).then((r)=>
    {
        console.log(r)
    }
    )

decryptDataFunction('1901f7f187b15f1e137ace6cea804311749182fb6da2fe8624b68433d4baf47f5b2a2c72c52f4367e19fd4a8f21700029986d26f87335c4341f1fae63882e18b')
