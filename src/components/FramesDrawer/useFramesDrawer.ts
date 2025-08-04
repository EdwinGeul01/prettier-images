import React from 'react'

export const useFramesDrawer = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return {
        isOpen,
        setIsOpen,
    }
}
