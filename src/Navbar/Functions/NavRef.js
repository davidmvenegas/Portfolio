import { useRef, useContext, useEffect } from 'react'
import Observer from './Observer'
import { NavContext } from './NavContext'

function NavRef(navLinkId) {
	const ref = useRef(null)
	const { setActiveNavLinkId } = useContext(NavContext)
	const isOnScreen = Observer(ref)

	useEffect(() => {
		if (isOnScreen) {
			setActiveNavLinkId(navLinkId)
		}
	}, [isOnScreen, setActiveNavLinkId, navLinkId])

	return ref
}

export default NavRef