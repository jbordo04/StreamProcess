// const file = require('./file.csv')
import { readFile, createReadStream} from 'node:fs'
import readline from 'node:readline'

const old = () => {
  console.time()
  readFile('file.csv', 'utf-8', (err, data) => {
    // console.log(data)
    console.timeEnd()
  })
}

// default: 1.691s
const newLine = () => {
  console.time()
  const readable =  createReadStream('file.csv')
  
  const rl = readline.createInterface({
    input: readable,
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    crlfDelay: Infinity,
  })

  rl.on('line', (line) => {
    // console.log(`Line from file: ${line}`);
  })

  rl.on('close', () => {
    console.log('finished!')
    console.timeEnd()
  })
}

// default: 3.872s
const newV = () => {
  console.time()
  const readable =  createReadStream('file.csv')
  
  let newLineI = '' 
  let newLine = ''
   
  readable.on('data', chunk => {
    // console.log({data: chunk.toString()})

    const chunky =  chunk.toString()
    // console.log(chunky)

    //solucion para un salto de linea por chunk \n    
    // const index = chunky.findIndex( letter => letter == '\n')
    // console.log('index:',index)
    
    // if(index == -1){
    //   const chunkon = chunk.toString()
    //   newLineI += chunkon
    //   // console.log('-1:',chunkon)
    // } else {
    //   newLineI += (chunky.slice(0,index).join(''))

    //   // console.log('liniea:', newLine)
    //   newLineI = ''
    //   newLineI += (chunky.slice(index).join(''))
    // }    


    //solucion dinámica para cualquier longitud.
    
    // let indexSlice = 0
    for(let i = 0; i < chunky.length; i++){
      if(chunky[i] === '\n'){
        // newLine += chunky.slice(indexSlice, i)
        newLine += chunky[i]
        console.log(newLine)
        newLine = ''
        // indexSlice = i
      } else {
        newLine += chunky[i]
      }
    }
  })

  readable.on('end', () => {
    console.log('finished!')
    console.timeEnd()
  })
}

// old()
newV()
// newLine()