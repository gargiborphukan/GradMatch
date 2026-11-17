import React from 'react'
import Link  from 'next/link'

//receives the label,description and icon from the parent

export default function HeaderItem({title, address, Icon}) {
  return (
    <Link href={address} 
    //giving icon-only links an accessible name
    aria-label={title} /*used AI to fix*/
    className=" inline-flex items-center gap-2 rounded-lg px-3 text-foreground transition-colors
    hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-ring">

        {/*displaying icon when supplied */}
        {Icon &&(
        <Icon className="shrink-0 text-xl"
        aria-hidden="true"
        />
        )}

        <span className='text-sm font-medium'></span>
    </Link>
  )
}
