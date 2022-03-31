interface ContainerProps {
    children: React.ReactNode,
}

export default function Container ({ children }: ContainerProps) {
    return (
        <div style={{ maxWidth: 800 }}>
            {children}
        </div>
    )
}