  export const cupToTbsp = (measurementInput) =>{
      return measurementInput * 8
  }

  export const cupToTsp = (measurementInput) => {
    return measurementInput * 48
  }

  export const tbspToCup = (measurementInput) => {
    return measurementInput / 8
  }

  export const tbspToTsp = (measurementInput) => {
    return measurementInput * 3
  }

  export const tspToCup = (measurementInput) => {
    return measurementInput / 48
  }

export const tspToTbsp = (measurementInput) => {
  return measurementInput / 3
}