import { useEffect } from "react"

export const Title = (title) => {

    useEffect(() => {
        document.title = `${title}/CodeBook`
    }, [title]) 

  return null
}
 