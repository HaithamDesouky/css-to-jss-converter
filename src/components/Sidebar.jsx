import React from 'react'

export default function Sidebar({ history, setHistory }) {
  const handleCopy = (jss) => {
    navigator.clipboard.writeText(jss).then(() => {
      alert('Copied to clipboard!')
    })
  }

  const handleDelete = (index) => {
    const updatedHistory = history.filter((_, idx) => idx !== index)
    setHistory(updatedHistory)
    localStorage.setItem('conversionHistory', JSON.stringify(updatedHistory))
  }

  const handleClearHistory = () => {
    setHistory([])
    localStorage.removeItem('conversionHistory')
  }

  return (
    <aside className="max-w-[400px] bg-white shadow-md border-r p-4 overflow-auto overflow-y-auto h-full">
      <h2 className="text-lg font-semibold mb-4">History</h2>

      {history.length === 0 ? (
        <p className="text-sm text-gray-500">No conversions yet.</p>
      ) : (
        <>
          <button
            className="mb-4 text-red-500 text-sm"
            onClick={handleClearHistory}
          >
            Clear History
          </button>

          <ul className="space-y-2 text-sm font-mono">
            {history.map((item, idx) => (
              <li
                key={idx}
                className="bg-gray-100 p-2 rounded whitespace-pre-wrap relative"
              >
                <button
                  onClick={() => handleCopy(item)}
                  className="absolute top-2 right-2 text-blue-500 text-xs"
                >
                  Copy
                </button>
                <button
                  onClick={() => handleDelete(idx)}
                  className="absolute top-2 right-16 text-red-500 text-xs"
                >
                  Delete
                </button>
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  )
}
