import { ReactNode } from "react"

interface ComponentProps {
  filter: string
  content: string
}

type Reduce = ReactNode | ReactNode[] | string

export const HighlightedMatch = (props: ComponentProps) => {
  if (!props.filter) return <span>{props.content}</span>

  const regex = new RegExp(props.filter, "gi")

  return (
    <span>
      {props.content.split(regex).reduce<Reduce>((prev, current, i) => {
        if (!i) {
          return current
        }

        return (
          <>
            {prev}
            <mark>{props.filter}</mark>
            {current}
          </>
        )
      }, "")}
    </span>
  )
}
