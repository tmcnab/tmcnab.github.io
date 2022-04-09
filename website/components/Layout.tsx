import { Center, Column } from "./Flex"
import { ReactNode } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"

export default function Layout({ children, title }: { children: ReactNode, title: string }) {
	const router = useRouter()
	console.info(router)

	return (
		<>
			<Head>
				<title>{`${title} - neuromancer.io`}</title>
			</Head>
			<Center className='container'>
				<Column>
					<header>
						<nav>
							<Link href='/'>netdir://tmcnab.github.io</Link>
						</nav>
					</header>
					<main>
						{children}
					</main>
				</Column>
			</Center>
		</>
	)
}