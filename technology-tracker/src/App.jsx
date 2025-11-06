import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const technologies = [
    {
      id: 1, title: 'React Components', description: 'Изучение базовых компонентов',
      status: 'completed'
    },
    {
      id: 2, title: 'JSX Syntax', description: 'Освоение синтаксиса JSX', status:
        'in-progress'
    },
    {
      id: 3, title: 'State Management', description: 'Работа с состоянием компонентов', status: 'not - started' }
];


  
}

export default App
