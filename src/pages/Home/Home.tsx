import React from "react"
import Header from "../../components/Header"
import Main from "../../components/Main"

import * as Styled from "./styles"

export default function Home() {
	return (
		<Styled.Container>
			<Header />
			<Main />
		</Styled.Container>

	)
}
