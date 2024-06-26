import React, { useCallback } from 'react'
import { Layout } from 'src/layouts/default'

import { styled } from '@mui/system'
import { Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'

// import { Landingpage } from '../containers/Landingpage'

export function Page() {
	return (
		<Layout showFooter showHeader>
			<Box>
				<Typography variant="h3">Introducing GAME3 Foundation</Typography>

				<Typography variant="body1">
					GAME3 Foundation is a non profit organization dedicated to supporting the
					creative industries in gaming, arts, music, and entertainment. Its primary
					objective is to utilize the web3 stack of technological and economical
					primitives to foster the development of sustainable content, products, and
					relationships that benefit everyone involved.
				</Typography>

				<Typography variant="body1">
					Furthermore, the GAME3 Foundation serves as the governing body for GameDAO, a
					decentralized autonomous organization (DAO) protocol. This protocol establishes
					coordination, fundraising, and reward systems to promote the sustainable
					creation of video games and creative content. These initiatives are based on
					community curation and ownership, ensuring that the interests of the community
					are prioritized.
				</Typography>
				<Typography variant="body1">
					The overarching goal of GAME3 is to provide a comprehensive product stack that
					empowers creators to generate ideas, receive community support, and deploy
					projects anywhere they desire. By leveraging new collaboration opportunities and
					economic incentives that align with the community's interests, GAME3 aims to
					facilitate a mutually beneficial environment for all stakeholders.
				</Typography>
				<Typography variant="body1" id="research"></Typography>
				<Typography variant="body1" id="publications"></Typography>
				<Typography variant="body1" id="about"></Typography>
			</Box>
		</Layout>
	)
}

export default Page
