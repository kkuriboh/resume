import { RichText, Elements } from 'prismic-reactjs'
import ReactMarkdown from 'react-markdown'

import { BodySliceType } from '../types/post'
import PostSection from './postSection'

type Props = {
	body: BodySliceType
}

export default function RichTextFilter({ body }: Props) {
	return (
		<>
			{body.items.map((item, index) => {
				const content = RichText.asText(item.content)
				//#region test
				// item.content.map((item2) => {
				// 	if (item2.type === Elements.image) {
				// 		return (
				// 			<Image
				// 				key={index}
				// 				src={item2.url!}
				// 				alt={item2.alt!}
				// 				width={item2.dimensions?.width}
				// 				height={item2.dimensions?.height}
				// 			/>
				// 		)
				// 	}
				// })
				//#endregion
				if (content.slice(0, 3) === '$md')
					return (
						<PostSection key={index}>
							<ReactMarkdown>{content.slice(3)}</ReactMarkdown>
						</PostSection>
					)
				else
					return (
						<PostSection key={index}>
							<RichText render={item.content} />
						</PostSection>
					)
			})}
		</>
	)
}