import dayjs from "dayjs"

export const timeFormated = (time) => {
  const actualTime = dayjs(time * 1000)
  return(actualTime.$d + '')
}


