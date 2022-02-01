import { useState, useEffect } from 'react'

function Observer(ref) {
	const [isOnScreen, setOnScreen] = useState(false)

	const observer = new IntersectionObserver (
		([entry]) => setOnScreen(entry.isIntersecting),
		{threshold: [0.25, 0.5, 0.75]}
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