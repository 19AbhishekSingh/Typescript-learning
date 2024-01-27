type Rgb = [number,number,number]

function getRandomColor(): Rgb {
const r = Math.floor(Math.random() *255)
const g = Math.floor(Math.random() *255)
const b = Math.floor(Math.random() *255)

return [r, g, b] 
}

const colorOne = getRandomColor()


// object 


type User = {
    name: string,
    score: number
} 

function getUser(user: User) {
    return user.name
}

getUser({name:"Raj", score:120}) 