import { useState, useEffect } from 'react'

function Observer(ref) {
	const [isOnScreen, setOnScreen] = useState(false)

	const observer = new IntersectionObserver(
		([entry]) => setOnScreen(entry.isIntersecting),
		{threshold: [.0, .025, .05, .075, .1, .125, .15, .175, .2, .225, .25, .275, .3, .325, .35, .375, .4, .425, .45, .475, .5, .525, .55, .575, .6, .625, .65, .675, .7, .725, .75, .775, .8, .825, .85, .875, .9, .925, .95, .975, 1.0] }
	)

	useEffect(() => {
		observer.observe(ref.current)
		return () => {
			observer.disconnect()
		}
	})

	return isOnScreen
}

export default Observer