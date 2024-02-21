import { React, useEffect } from 'react'
function Error() {
  useEffect(() => {
    alert("Page Not Found!");
  }, [])
  return (
    <div>
    </div>
  )
}
export default Error
