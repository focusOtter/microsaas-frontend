import Head from 'next/head'
import { View, withAuthenticator } from '@aws-amplify/ui-react'
import { API } from 'aws-amplify'
import { useState } from 'react'
import { createRecipe } from '../../src/graphql/mutations'
import { CreateRecipeMutation } from '@/src/API'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { RecipeForm } from '@/components/RecipeForm'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

type CreateRecipePageProps = {
	user: any
	signOut: () => void
}
const CreateRecipePage = ({ user }: CreateRecipePageProps) => {
	const [recipe, setRecipe] = useState({
		title: 'my first recipe',
		description: 'something great is cooking!',
		ingredients: {
			items: ['chicken', 'bread'],
		},
		steps: [{ item: 'buy it' }, { item: 'cook it' }, { item: 'serve it' }],
		status: 'PRIVATE',
		userRecipesId: user.attributes.sub,
		servings: 4,
	})

	const handleFileUploadSuccess = (key: string) => {}
	const handleFormSubmit = () => {}

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<View>
				<Navbar isAuthPage />
				<RecipeForm
					handleFileUploadSuccess={handleFileUploadSuccess}
					handleFormSubmit={handleFormSubmit}
				/>
			</View>
			<Footer />
		</>
	)
}

export default withAuthenticator(CreateRecipePage)