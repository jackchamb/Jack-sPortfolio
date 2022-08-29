import {render} from 'react-dom'
import './index.css'
import { ThemeProvider } from './contexts/theme'
import App from './app'


render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
)