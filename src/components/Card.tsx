import React, { FC } from 'react'

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary',
}

interface CardProps {
	width?: string
	height?: string
	variant: CardVariant
}

const Card: FC<CardProps> = ({ width, height, children, variant }) => {
	return (
		<div
			style={{
				width: width,
				height: height,
				border: variant === CardVariant.outlined ? '1px solid #f8f8f8' : 'none',
				background: variant === CardVariant.primary ? 'lightgray' : '',
			}}>
			{children}
		</div>
	)
}

export default Card
