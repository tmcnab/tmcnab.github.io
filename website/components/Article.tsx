import { ReactNode } from "react"
import Layout from './Layout'

interface Metadata {
    date?: Date,
    tags: string[],
    title: string,
}

export default function Article ({ children, meta }: { children: ReactNode, metadata: Metadata }) {
    return (
		<article>
			{children}
		</article>
	)
}