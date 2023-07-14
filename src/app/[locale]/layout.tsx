
export async function generateStaticParams(): Promise<
	{
		locale: string
	}[]
> {
	return [{locale: 'nl'}, {locale: 'en'}]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}