import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from 'src/theme/createEmotionCache'
import { DocumentContext, DocumentInitialProps } from 'next/dist/shared/lib/utils'

export default class MyDocument extends Document {
	// `getInitialProps` belongs to `_document` (instead of `_app`),
	// it's compatible with static-site generation (SSG).
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const originalRenderPage = ctx.renderPage
		const cache = createEmotionCache()
		const { extractCriticalToChunks } = createEmotionServer(cache)

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App: any) =>
					function EnhanceApp(props) {
						return <App emotionCache={cache} {...props} />
					},
			})

		const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx)

		// This is important. It prevents emotion to render invalid HTML.
		// See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
		const emotionStyles = extractCriticalToChunks(initialProps.html)
		const emotionStyleTags = emotionStyles.styles.map((style) => (
			<style
				data-emotion={`${style.key} ${style.ids.join(' ')}`}
				key={style.key}
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: style.css }}
			/>
		))

		return {
			...initialProps,
			// Styles fragment is rendered after the app and page rendering finish.
			styles: (
				<>
					{initialProps.styles}
					{emotionStyleTags}
					<style>{`
						#__next {
							height: 100%;
							width: 100%;
							margin: 0;
							padding: 0;
						}
					`}</style>
				</>
			),
		} as any
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,400;1,600;1,800&display=swap" rel="stylesheet"/>
				</Head>
				<body
					style={{
						height: '100vh',
						width: '100vw',
						overflowX: 'hidden',
						margin: 0,
						padding: 0,
					}}
				>
					<Main />
					<NextScript />
					<style jsx global>{`
						#__next {
							height: 100%;
							margin: 0;
							padding: 0;
						}
					`}</style>
				</body>
			</Html>
		)
	}
}
