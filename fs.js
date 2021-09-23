
let fs = require('fs');


let parametros = process.argv.splice(2);

/*console.log('estos son los parametros que extraje');
console.log(parametros[0]); 
 console.log(parametros); */

const dir = './files';

const contar = function(){ 
   return dir.length
}

const tamaño = function() { 
    fs.writeFile("summary.txt","txt\n", (err,elemento)=>{
    if(err) throw err
    fs.readdir(dir, (err, files) => {
        files.map(x => {
            let peso= fs.statSync(dir + "/"+ x).size
            fs.appendFile("summary.txt", x+" "+ peso + " kb" +"\n",err => {if(err) throw err} )
        })
    });
})
}

const caracteres = function(){
    fs.writeFile("summary.txt","txt\n", (err,elemento)=>{
        if(err) throw err
        
        fs.readdir(dir, (err, files) => {
            files.map(x => {
                let elemento = fs.readFileSync(dir + "/"+ x,'utf8');
                let cantCarateres = elemento.length
                fs.appendFile("summary.txt", x +" "+cantCarateres + " chars" +"\n", err => {if(err) throw err} )
            })
        });
    })
}
 

let procesarParametro = function(){
    let resultado 
    if (parametros[0] == 'count'){
        resultado = contar()
    }else if(parametros[0] == 'size'){
        tamaño()
    }else if (parametros[0] == 'length'){
        caracteres()
    }else{
        console.log(`El comando ${parametros[0]} no se reconoce. Los comandos validos son: count, size, length, search ` )
    }
    return (resultado)
}



console.log(procesarParametro());

