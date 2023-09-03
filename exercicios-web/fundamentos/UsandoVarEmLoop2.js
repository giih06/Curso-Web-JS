const funcs = []

// .push adiciona um novo elemento na função
for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)//adiciona o i na função a cada loop
    })
}

funcs[2]()
funcs[8]()