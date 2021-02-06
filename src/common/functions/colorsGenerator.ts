import ColorFilter from '../interfaces/ColorFilter'
import ColorObject from '../interfaces/ColorObject'

function colorsGenerator(colorFilter:ColorFilter):string[] {
  /*
    generate array of colors in format 'hsl(hue, saturation, lightness)`
  */
  let valuesArray:number[][] = generateUniqueCombinationOfNumbersArray(3,40)
  let colors: ColorObject[] = []
  let darkerCompensation = (colorFilter.saturation !== 'darker' ? 50 : 0)

  switch(colorFilter.category){
    case 'gray':
      colors = valuesArray.map(value => {
        return {
          hue:0,
          saturation:0,
          lightness: value[2] * 50 + darkerCompensation
        }
      })
      break
    case 'red':
      colors = valuesArray.map(value => {
        return {
          hue: value[0] * 60 - 30,
          saturation: value[1] * 50 + darkerCompensation,
          lightness: value[2] * 50 + darkerCompensation
        }
      })
      break
    case 'yellow':
      colors = valuesArray.map(value => {
        return {
          hue: value[0] * 60 + 30,
          saturation: value[1] * 50 + darkerCompensation,
          lightness: value[2] * 50 + darkerCompensation
        }
      })
      break
    case 'green':
      colors = valuesArray.map(value => {
        return {
          hue: value[0] * 60 + 90,
          saturation: value[1] * 50 + darkerCompensation,
          lightness: value[2] * 50 + darkerCompensation
        }
      })
      break
    case 'cyan':
      colors = valuesArray.map(value => {
        return {
          hue: value[0] * 60 + 150,
          saturation: value[1] * 50 + darkerCompensation,
          lightness: value[2] * 50 + darkerCompensation
        }
      })
      break
    case 'blue':
      colors = valuesArray.map(value => {
        return {
          hue: value[0] * 60 + 210,
          saturation: value[1] * 50 + darkerCompensation,
          lightness: value[2] * 50 + darkerCompensation
        }
      })
      break
    case 'magenta':
      colors = valuesArray.map(value => {
        return {
          hue: value[0] * 60 + 270,
          saturation: value[1] * 50 + darkerCompensation,
          lightness: value[2] * 50 + darkerCompensation
        }
      })
      break
    
  }
  return colors.map(color => {
    return `hsl(${color.hue},${color.saturation}%,${color.lightness}%)`
  })
}

function generateUniqueCombinationOfNumbersArray(combinationLength: number, arrayLength:number):Array<Array<number>>{
  /*
    generate array of combination number between 0 and 1 with each length according to argument
  */
  let res:Array<Array<number>> = []
  let numbers:Array<number> = []
  while(res.length<arrayLength) {
    numbers = [Math.random(), Math.random(), Math.random()]
    if(!res.includes(numbers)) {
      res.push(numbers)
    }
  }
  return res
}

export default colorsGenerator