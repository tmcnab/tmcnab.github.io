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
						<h1>neuromancer.io</h1>
						<Flex as='nav'>
							<Link href='/'>Index</Link>
							<Link href='/about'>About</Link>
						</Flex>
					</Flex>
					<Flex as='main' justifyContent='center'>
						{children}
					</Flex>
				</Container>
			</Flex>
		</>
	)
}