import { useState } from 'react'

export default function CheckoutConfirmation() {
  const [checkbox, setCheckbox] = useState(false)
  return(
    <>
      <label>
        I have transferred the money
        <input type="checkbox" checked={checkbox} onChange={() = setCheckbox(!checkbox)} />
        <span className="checkmark/>
      </label>
    </>
  )
}