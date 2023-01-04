const input10_2 = `noop
addx 5
addx -2
noop
noop
addx 7
addx 15
addx -14
addx 2
addx 7
noop
addx -2
noop
addx 3
addx 4
noop
noop
addx 5
noop
noop
addx 1
addx 2
addx 5
addx -40
noop
addx 5
addx 2
addx 15
noop
addx -10
addx 3
noop
addx 2
addx -15
addx 20
addx -2
addx 2
addx 5
addx 3
addx -2
noop
noop
noop
addx 5
addx 2
addx 5
addx -38
addx 3
noop
addx 2
addx 5
noop
noop
addx -2
addx 5
addx 2
addx -2
noop
addx 7
noop
addx 10
addx -5
noop
noop
noop
addx -15
addx 22
addx 3
noop
noop
addx 2
addx -37
noop
noop
addx 13
addx -10
noop
addx -5
addx 10
addx 5
addx 2
addx -6
addx 11
addx -2
addx 2
addx 5
addx 3
noop
addx 3
addx -2
noop
addx 6
addx -22
addx 23
addx -38
noop
addx 7
noop
addx 5
noop
noop
noop
addx 9
addx -8
addx 2
addx 7
noop
noop
addx 2
addx -4
addx 5
addx 5
addx 2
addx -26
addx 31
noop
addx 3
noop
addx -40
addx 7
noop
noop
noop
noop
addx 2
addx 4
noop
addx -1
addx 5
noop
addx 1
noop
addx 2
addx 5
addx 2
noop
noop
noop
addx 5
addx 1
noop
addx 4
addx 3
noop
addx -24
noop`
type memory = {
    cycle: number,
    register: number
}
let registerMemory = new Map<number, number>()
let x:number = 1
let cycle: number = 1
let register = new Array<number>()
const program: number[] = input10_2.split('\n').map((line) => {
    if (line === 'noop') return 0
    return parseInt(line.slice(line.indexOf(' ') + 1))
})
// console.log(program)
const procedure = (element: number) => {
    console.log(`Begin cycle: ${cycle}  X=${x}`)
    if (element === 0) 
        {register.push(0)} 
        else {
            register.push(0, element)
            
        } 
    
    console.log(`during cycle: ${cycle}  X=${x}`)
    registerMemory.set(cycle,x)

   // console.log(register)
    
    cycle = cycle + 1
    x = x + register.shift()
    
    console.log(`After cycle: ${cycle - 1}  X=${x}`)


}
program.forEach(element => procedure(element));
register.forEach(element => procedure(element))
console.log(registerMemory)
let crt: string[] =[]
registerMemory.forEach((value, key) => {
    if (key % 40 - 1 === value || key % 40 - 1 === value + 1 || key % 40 - 1 === value -1) {
        crt.push('#')
    } else {
        crt.push('.')
    }
})
console.log(crt.join('').slice(0,40))
console.log(crt.join('').slice(40,80))
console.log(crt.join('').slice(80,120))
console.log(crt.join('').slice(120,160))
console.log(crt.join('').slice(160,200))
console.log(crt.join('').slice(200,240))