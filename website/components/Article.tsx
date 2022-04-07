import { ReactNode } from "react"
import Flex from "./Flex"
import Head from "next/head"
import Link from "next/link"
import Container from "./Container"
import { useRouter } from "next/router"
import Tag from "./Tag"

interface Metadata {
    date?: Date,
    tags: string['meta'],
    title: string,
}

export default function Layout({ children, meta }: { children: ReactNode, metadata: Metadata }) {
    const router = useRouter()
    
	return (
		<>
			<Head>
				<title>{`${meta.title} - neuromancer.io`}</title>
			</Head>
			<Flex justifyContent="center">
				<Container>
                    <header>
                        <h1>
                            <a>netdir://</a>
							<Link href='/'>tmcnab.pub</Link>
                            <a>/</a>
                            <Link href='/articles'>articles</Link>
                            <a>/</a>
                            <Link href={router.pathname}>{meta.title}</Link>
						</h1>
                        {meta.tags.map(tag => <Tag key={tag} label={tag} />)}
                    </header>
					<Flex as='main' flexDirection='column' justifyContent='center'>
						{children}
					</Flex>
				</Container>
			</Flex>
		</>
	)
}