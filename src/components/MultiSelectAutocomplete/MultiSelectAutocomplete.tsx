import { useEffect, useMemo, useRef, useState } from "react"
import { HighlightedMatch } from "./components/HighlightedMatch"

type Option = {
  label: string
  value: any
}

interface AutocompleteProps {
  name: string
  label: string
  placeholder?: string
  disabled?: boolean
  value: any[]
  options: Option[]
  onChange: (value: any[]) => void
}

export const MultiSelectAutocomplete = (props: AutocompleteProps) => {
  const [search, setSearch] = useState<string>("")
  const [open, setOpen] = useState<boolean>(false)

  const listRef = useRef<number>(0)
  const inputRef = useRef<HTMLDivElement>(null)

  const handleSelect = (val: any) => {
    if (props.value.includes(val)) {
      props.onChange(props.value.filter((item) => item !== val) || [])
    } else {
      props.onChange([...props.value, val])
    }
  }

  const filtered = useMemo(() => {
    if (!search) return props.options

    return (
      props.options.filter(
        (option) =>
          option.label.toLowerCase().indexOf(search.toLowerCase()) !== -1
      ) || []
    )
  }, [props.options, search])

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside)

    return () => {
      document.removeEventListener("mouseup", handleClickOutside)
    }
  }, [inputRef])

  return (
    <div ref={inputRef}>
      <label htmlFor={props.name}>{props.label}</label>
      <div>
        <input
          id={props.name}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setOpen(true)}
          autoComplete="off"
        />
        {open && (
          <ul>
            {filtered.map((item) => (
              <li key={item.value} onClick={() => handleSelect(item.value)}>
                <HighlightedMatch content={item.label} filter={search} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {props.value?.map((val) => (
          <button type="button" key={val} onClick={() => handleSelect(val)}>
            {props.options.find((option) => option.value === val)?.label}
          </button>
        ))}
      </div>
    </div>
  )
}
