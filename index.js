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
  const readable =  createReadStream('file-small.csv', { highWaterMark: 20 })
  // var comas = 0 //sumar 4
  let newLine = ''
 
  // console.log('asdf',readable)
  readable.on('data', chunk => {
    const chunky =  chunk.toString().split('')
    // console.log(chunky)
    const index = chunky.findIndex( letter => letter == '\n')
    console.log('index:',index)
    console.log({data: chunk.toString()})
    if(index == -1){
      const chunkon = chunk.toString()
      newLine += chunkon
      console.log('-1:',chunkon)
    } else {
      newLine += (chunky.slice(0,index).join(''))

      console.log('liniea:', newLine)

      newLine = ''
      newLine += (chunky.slice(index).join(''))
    }
  })


  readable.on('end', () => {
    console.log('finished!')
    console.timeEnd()
  })
}

// old()

newV()