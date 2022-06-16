const args = process.argv

console.log('args', args)

if (args[2] === 'add') {
    console.log('sum')
}
if (args[3] === 'delete') {
    console.log('delete')
}
if (args[2] === 'prod') {
    console.log('product')
}