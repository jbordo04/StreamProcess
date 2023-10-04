// const file = require('./file.csv')
import { readFile, createReadStream} from 'node:fs'

const old = () => {
  console.time()
  readFile('file-small.csv', 'utf-8', (err, data) => {
    console.log(data)
    console.timeEnd()
  })
}

const newV = () => {
  console.time()
  const readable =  createReadStream('file.csv', { highWaterMark: 40 })
  
  let newLineI = '' 
  let newLine = ''
   
  readable.on('data', chunk => {
    // console.log({data: chunk.toString()})

    const chunky =  chunk.toString().split('')
    // console.log(chunky)

    //solucion para un salto de linea por chunk \n    
    const index = chunky.findIndex( letter => letter == '\n')
    // console.log('index:',index)
    
    if(index == -1){
      const chunkon = chunk.toString()
      newLineI += chunkon
      // console.log('-1:',chunkon)
    } else {
      newLineI += (chunky.slice(0,index).join(''))

      // console.log('liniea:', newLine)
      newLineI = ''
      newLineI += (chunky.slice(index).join(''))
    }    

    
    //solucion dinámica para cualquier longitud.
    
    // let indexSlice = 0
    for(let i = 0; i < chunky.length; i++){
      if(chunky[i] === '\n'){
        // newLine += chunky.slice(indexSlice, i)
        newLine += chunky[i]
        console.log('linea entera:', newLine)
        newLine = ''
        continue
        // indexSlice = i
      }
      newLine += chunky[i]
    }
  })

  readable.on('end', () => {
    console.log('finished!')
    console.timeEnd()
  })
}

// old()

newV()