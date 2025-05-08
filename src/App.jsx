import React, { useState, useEffect } from 'react'
import { cssToJss } from '@utils/cssToJss'
import Button from '@components/Button'
import { Card, CardContent } from '@components/Card'
import Textarea from '@components/textArea'
import Sidebar from '@components/Sidebar'

export default function App() {
  const [cssInput, setCssInput] = useState('')
  const [jssOutput, setJssOutput] = useState('')
  const [history, setHistory] = useState([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('conversionHistory'))
    if (storedHistory) {
      setHistory(storedHistory)
    }
  }, [])

  const handleConvert = () => {
    try {
      const jss = cssToJss(cssInput)
      const formatted = JSON.stringify(jss, null, 2)
      setJssOutput(formatted)

      if (!history.includes(formatted)) {
        const updatedHistory = [formatted, ...history]
        setHistory(updatedHistory)
        localStorage.setItem(
          'conversionHistory',
          JSON.stringify(updatedHistory),
        )
      }
    } catch (err) {
      setJssOutput('// Error parsing CSS')
    }
  }

  const handleCopy = () => {
    if (jssOutput) {
      navigator.clipboard.writeText(jssOutput).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000) // Hide the "Copied!" message after 2 seconds
      })
    }
  }

  return (
    <div className="flex bg-gray-100">
      <Sidebar history={history} setHistory={setHistory} />
      <main className="flex-1 p-4">
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
              <Button onClick={handleCopy} className="mt-2">
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
