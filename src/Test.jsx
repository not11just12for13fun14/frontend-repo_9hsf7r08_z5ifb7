import { useState, useEffect } from 'react'
import './components/ThemeTokens.css'

function Test() {
  const [backendStatus, setBackendStatus] = useState('checking...')
  const [backendUrl, setBackendUrl] = useState('')
  const [databaseStatus, setDatabaseStatus] = useState(null)

  useEffect(() => {
    checkBackendConnection()
  }, [])

  const checkBackendConnection = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      setBackendUrl(baseUrl)
      const response = await fetch(`${baseUrl}`)
      if (response.ok) {
        const data = await response.json()
        setBackendStatus(`✅ Connected - ${data.message || 'OK'}`)
        await checkDatabaseConnection(baseUrl)
      } else {
        setBackendStatus(`❌ Failed - ${response.status} ${response.statusText}`)
        setDatabaseStatus({ error: 'Backend not accessible' })
      }
    } catch (error) {
      setBackendStatus(`❌ Error - ${error.message}`)
      setDatabaseStatus({ error: 'Backend not accessible' })
    }
  }

  const checkDatabaseConnection = async (baseUrl) => {
    try {
      const response = await fetch(`${baseUrl}/test`)
      if (response.ok) {
        const dbData = await response.json()
        setDatabaseStatus(dbData)
      } else {
        setDatabaseStatus({ error: `Failed to check database - ${response.status}` })
      }
    } catch (error) {
      setDatabaseStatus({ error: `Database check failed - ${error.message}` })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
      <div className="bg-white/5 border border-white/10 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">System Test</h1>

        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold mb-1">Backend URL</h3>
            <p className="break-all bg-white/5 border border-white/10 p-2 rounded">{backendUrl || 'Detecting...'}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Backend Status</h3>
            <p className="font-mono bg-white/5 border border-white/10 p-2 rounded">{backendStatus}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Database Status</h3>
            <div className="bg-white/5 border border-white/10 p-3 rounded">
              {databaseStatus ? (
                databaseStatus.error ? (
                  <p className="text-red-300 font-mono">{databaseStatus.error}</p>
                ) : (
                  <div className="space-y-2">
                    <p><span className="font-semibold">Backend:</span> {databaseStatus.backend}</p>
                    <p><span className="font-semibold">Database:</span> {databaseStatus.database}</p>
                    <p><span className="font-semibold">DB URL:</span> {databaseStatus.database_url}</p>
                    <p><span className="font-semibold">DB Name:</span> {databaseStatus.database_name}</p>
                    <p><span className="font-semibold">Connection:</span> {databaseStatus.connection_status}</p>
                    {databaseStatus.collections && databaseStatus.collections.length > 0 && (
                      <p><span className="font-semibold">Collections:</span> {databaseStatus.collections.join(', ')}</p>
                    )}
                  </div>
                )
              ) : (
                <p className="text-gray-300 font-mono">Checking database...</p>
              )}
            </div>
          </div>

          <button onClick={checkBackendConnection} className="w-full bg-primary/30 border border-primary/50 text-foreground font-semibold py-2 px-4 rounded transition-colors">Test Again</button>

          <a href="/home" className="block w-full text-center bg-white/5 border border-white/10 text-foreground font-semibold py-2 px-4 rounded transition-colors">Back to Home</a>
        </div>
      </div>
    </div>
  )
}

export default Test
