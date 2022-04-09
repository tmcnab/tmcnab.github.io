interface FlexProps {
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch',
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch',
    as?: string,
    children: React.ReactNode,
    className?: string
    flexDirection?: 'row' | 'column',
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    style?: React.CSSProperties,
}


export default function Flex ({ alignContent, as = 'div', children, className, flexDirection, justifyContent, style}: FlexProps) {
    const Component = as

    const styles = {
        ...style,
        alignContent,
        display: 'flex',
        flexDirection,
        justifyContent,
    }
    
    // @ts-ignore
    return <Component className={className} style={styles}>{children}</Component>
}

export function Center (props: FlexProps) {
    return <Flex {...props} alignContent='center' />
}

export function Column (props: FlexProps) {
    return <Flex {...props} flexDirection='column' />
}

export function Row (props: FlexProps) {
    return <Flex {...props} flexDirection='row' />
}