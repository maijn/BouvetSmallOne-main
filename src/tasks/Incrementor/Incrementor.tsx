import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import React, { useState } from "react"

export interface IncrementorProps {
	limit: number
	children: string
}

export const IncrementorComponent = ({ limit, children }: IncrementorProps) => {
	const [counter, setCounter] = useState(0)
	const isLimitReached = counter >= limit
	const [age, setAge] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
	  setAge(event.target.value);
	};

	const increment = () => {
		setCounter(counter + 1)
	}
	const resetCounter = () => {
		setCounter(0)
	}


	return (
		<>
			<button onClick={increment} disabled={isLimitReached}>
				{counter}
			</button>
			{isLimitReached && (
				<>
					<button onClick={resetCounter}>Reset</button>
					<p>{children}</p>
				</>
			)}
			 <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
		</>
	)
}

export const Incrementor = React.memo(IncrementorComponent)
