import { Lobster, Poppins, Raleway } from 'next/font/google'
import './globals.scss'
import Web_icon from './assets/skills/Html.png'


const lobster = Lobster({ subsets: ['latin'], weight: '400', })
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Zeeshan Afridi | Web Developer',
  description: 'Front-End Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[lobster.className, poppins.className, raleway.className]}>{children}</body>
    </html>
  )
}
