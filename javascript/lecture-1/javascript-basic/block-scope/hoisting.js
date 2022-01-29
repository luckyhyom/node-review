if (true) {
    let a = 10
    if (true) {
        // TDZ
        console.log(a)
        const a = 20
    }
    console.log(a)
}
console.log(a)
// Temperal Dead Zone..