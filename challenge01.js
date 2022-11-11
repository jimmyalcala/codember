async function getUsers() {
  let response =  await fetch('https://codember.dev/users.txt')
  let data =  await response.text()
  return data.split('\n\n')
}

function userIsValid(user){
  let keys = ['usr:', 'eme:', 'psw:','loc:','age:','fll:']
  return keys.every(key => user.includes(key));
}

let users = await getUsers()
let valids = users.filter(userIsValid)
let lastValid = valids.slice(-1)[0].replaceAll('\n',' ').replaceAll(' ',',')
let username = lastValid.slice(lastValid.indexOf('usr:')+4,lastValid.indexOf(','))

console.log(`${valids.length}${username}`) 

