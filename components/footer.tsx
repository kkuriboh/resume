import styled from 'styled-components'

export default function Footer() {
	return (
		<FooterStyle>
			&copy;Augusto do Monte Pieper - All the source code is under the{' '}
			<a target="_blank" rel="noreferrer" href="https://mit-license.org/">
				MIT
			</a>{' '}
			license.
		</FooterStyle>
	)
}

const FooterStyle = styled.footer`
	width: 100%;
	text-align: center;
	padding: 1rem;
	margin-top: 1rem;
	border-top: 1px solid ${({ theme }) => theme.colors.links};
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.secondary};
`
