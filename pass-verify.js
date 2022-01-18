const bcrypt = require('bcrypt');

async function hashPasword() {
  const myPassword = 'hola';
  const hashUser =
    '$2b$10$TPsDHjes2zz5YtCGeGdtTePNWUm4/E467ugV3TeV7z67ZwyQ4NLEe';
  const isMatch = await bcrypt.compare(myPassword, hashUser);
  console.log(isMatch);
}

hashPasword();
