
const me = {
    Oleg: {
        age: 27,
        work:'zavodebaniy',
        helloMe(name) {
            console.log(`Hello ${name}`)
        }
    }
}
me.Oleg.helloMe('Олег')
//=================================================== второе задание
const usersInfo = [
    {
        name:'oleg',
        age: 27,
        work:'zavodebaniy',
        admin:true
    },
    {
        name:'alex',
        age: 45,
        work:'kfc',
        admin:false
    },
    {
        name:'sendwich',
        age: 1,
        work:'pizza',
        admin:false
    },
]

let usersQuantity = 0

for (let i = 0; i < usersInfo.length; i++) {
    if (!usersInfo[i].admin) {
        usersQuantity++
    }
}
console.log(usersQuantity)