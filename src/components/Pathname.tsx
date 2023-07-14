'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

export const Pathname: React.FC<{}> = () => {
    const pathname = usePathname()
    console.log({pathname}) // we log the pathname here to see it while building the app
    return <div>
        <p>The current pathname is: {pathname}</p>
        {pathname === '/nl/bug' && <>
            <p>While building, the console.log is printing /nl/error as a pathname. We&#39;re getting a hydration error here because /nl/error is not matching the current pathname /nl/bug.</p>
            <p>Navigating directly to <Link href='/en/error' target='_blank'>/en/error</Link> however, is not causing an hydration error because /[locale]/error is the destination (and error is matching).</p>
        </>}
    </div>
}