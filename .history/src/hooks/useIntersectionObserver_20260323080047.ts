import { useEffect, useState } from "react"

const useIntersectionObserver = ({observar}:{observar:string}) => {

  const [mounted, setMounted] = useState(false)
  const [apper, setApper] = useState(false)

  const trigger: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        setApper(true)
      }
    })
  }
  const optiones: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: 0.5
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      let observer = new IntersectionObserver(trigger, optiones)
      observer.observe(document.getElementById(observar) as Element)
    }
  })

  return { mounted, apper }
}

export default useIntersectionObserver