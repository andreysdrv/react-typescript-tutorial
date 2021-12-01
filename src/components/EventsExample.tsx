import React, {
	MouseEvent,
	ChangeEvent,
	FC,
	useState,
	DragEvent,
	useRef,
} from 'react'

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('')
	const [isDrag, setIsDrag] = useState<boolean>(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const clickhandler = (e: MouseEvent<HTMLButtonElement>) => {
		console.log(inputRef.current?.value)
	}

	const dragHandler = (e: DragEvent<HTMLDivElement>) => {
		console.log('drag')
	}

	const dropHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		console.log('drop')
		setIsDrag(false)
	}

	const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
	}

	const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(true)
	}

	return (
		<div>
			<input
				onChange={handleChange}
				value={value}
				type='text'
				placeholder='управляемый'
			/>
			<input type='text' placeholder='неуправляемый' ref={inputRef} />
			<button onClick={clickhandler}>BUTTON</button>
			<div
				onDrag={dragHandler}
				draggable
				style={{ width: 200, height: 200, background: 'red', marginTop: 15 }}></div>
			<div
				onDrag={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
				style={{
					width: 200,
					height: 200,
					background: isDrag ? 'blue' : 'red',
					marginTop: 15,
				}}></div>
		</div>
	)
}

export default EventsExample
