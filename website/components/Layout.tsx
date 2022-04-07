import { ReactNode } from "react"
import Flex from "./Flex"
import Head from "next/head"
import Link from "next/link"
import Container from "./Container"

export default function Layout({ children, title }: { children: ReactNode, title: string }) {
	return (
		<>
			<Head>
				<title>{`${title} - neuromancer.io`}</title>
			</Head>
			<Flex justifyContent="center">
				<Container>
					<Flex alignItems='center' as='header' flexDirection='row' justifyContent='space-between'>
						<h1>
							<Link href='/'>web.log</Link>
						</h1>
						<Flex alignItems='center' justifyContent='center'>
							<form action='/' method='get' >
									<input placeholder='Search' type='search' />
									<button type='submit'>GO</button>
							</form>
						</Flex>
					</Flex>
					<Flex as='main' flexDirection='column' justifyContent='center'>
						{children}
					</Flex>
				</Container>
			</Flex>
		</>
	)
}