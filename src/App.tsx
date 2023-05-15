import Main from 'components/Main'
import { ThemeProvider } from 'context/ThemeContext'

function App() {
	return (
		<ThemeProvider>
			<Main />
		</ThemeProvider>
	)
}

export default App
