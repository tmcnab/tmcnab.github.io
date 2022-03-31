interface FlexProps {
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch',
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch',
    as?: string,
    children: React.ReactNode,
    flexDirection?: 'row' | 'column',
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
}


export default function Flex ({ alignContent, as = 'div', children, flexDirection, justifyContent }: FlexProps) {
    const Component = as

    const style = {
        alignContent,
        display: 'flex',
        flexDirection,
        justifyContent,
    }
    
    return <Component style={style}>{children}</Component>
}