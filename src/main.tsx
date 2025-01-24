import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { configureStore } from '@reduxjs/toolkit'
import userPageReducer from "./Components/Dashboard/redux/userPage.tsx"
import { Provider } from 'react-redux'



const store = configureStore({
   reducer: {
     userPage: userPageReducer
   },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
