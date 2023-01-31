import { useState } from "react"
import { MultiSelectAutocomplete } from "./components"

const COUNTRIES = [
  { label: "Argentina", value: "ARG" },
  { label: "Australia", value: "AUS" },
  { label: "Belgium", value: "BEL" },
  { label: "Brazil", value: "BRA" },
  { label: "Cameroon", value: "CAM" },
  { label: "Canada", value: "CAN" },
  { label: "Costa Rica", value: "CRC" },
  { label: "Croatia", value: "CRO" },
  { label: "Denmark", value: "DEN" },
  { label: "Ecuador", value: "ECU" },
  { label: "England", value: "ENG" },
  { label: "France", value: "FRA" },
  { label: "Germany", value: "DEU" },
  { label: "Ghana", value: "GHA" },
  { label: "Iran", value: "IRA" },
  { label: "Japan", value: "JAP" },
  { label: "Korea Republic", value: "KOR" },
  { label: "Mexico", value: "MEX" },
  { label: "Morocco", value: "MOR" },
  { label: "Netherlands", value: "NED" },
  { label: "Poland", value: "POL" },
  { label: "Portugal", value: "POR" },
  { label: "Qatar", value: "QAT" },
  { label: "Saudi Arabia", value: "SAU" },
  { label: "Senegal", value: "SEN" },
  { label: "Serbia", value: "SER" },
  { label: "Spain", value: "SPA" },
  { label: "Switzerland", value: "SWZ" },
  { label: "Tunisia", value: "TUN" },
  { label: "United States", value: "USA" },
  { label: "Uruguay", value: "URU" },
  { label: "Wales", value: "WAL" }
]

function App() {
  const [value, setValue] = useState<string[]>(["BRA", "ARG"])

  return (
    <div>
      <MultiSelectAutocomplete
        name="autocomplete-example1"
        label="Countries"
        options={COUNTRIES}
        value={value}
        onChange={(val) => setValue(val)}
      />
    </div>
  )
}

export default App
