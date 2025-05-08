import React, { useState } from 'react'
import { cssToJss } from './utils/cssToJss'
import Button from './components/Button'
import { Card, CardContent } from './components/Card'
import Textarea from './components/textArea'

export default function App() {
  const [cssInput, setCssInput] = useState('')
  const [jssOutput, setJssOutput] = useState('')

  const handleConvert = () => {
    try {
      const jss = cssToJss(cssInput)
      setJssOutput(JSON.stringify(jss, null, 2))
    } catch (err) {
      setJssOutput('// Error parsing CSS')
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto grid gap-4">
        <h1 className="text-2xl font-bold">CSS to JSS Converter</h1>

        <Card>
          <CardContent className="p-4 grid gap-2">
            <label className="font-medium">CSS Input</label>
            <Textarea
              rows={10}
              value={cssInput}
              onChange={(e) => setCssInput(e.target.value)}
              placeholder="Paste your CSS here..."
            />
            <Button onClick={handleConvert}>Convert</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 grid gap-2">
            <label className="font-medium">JSS Output</label>
            <Textarea
              readOnly
              rows={10}
              value={jssOutput}
              className="font-mono bg-white"
            />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
