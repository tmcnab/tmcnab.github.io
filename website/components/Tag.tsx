import { ReactNode } from "react"
import Flex from "./Flex"
import Head from "next/head"
import Link from "next/link"
import Container from "./Container"

interface Metadata {
    date?: Date,
    tags: string[],
    title: string,
}

export default function Tag({ label }: { label: string }) {
	return <span className="ui-tag">{label}</span>
}