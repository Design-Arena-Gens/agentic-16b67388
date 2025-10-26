'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [topic, setTopic] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')
  const [logs, setLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`])
  }

  const generateVideo = async () => {
    if (!topic.trim()) {
      alert('Please enter a topic')
      return
    }

    setLoading(true)
    setStatus('Starting AI agent...')
    setLogs([])
    setVideoUrl('')

    try {
      addLog('Initializing video generation pipeline')
      const response = await fetch('/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate video')
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          const lines = chunk.split('\n\n')

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.slice(6))
                if (data.status) {
                  setStatus(data.status)
                  addLog(data.status)
                }
                if (data.videoUrl) {
                  setVideoUrl(data.videoUrl)
                }
                if (data.error) {
                  throw new Error(data.error)
                }
              } catch (e) {
                // Skip invalid JSON
              }
            }
          }
        }
      }

      setStatus('✅ Video generated and posted to YouTube!')
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      setStatus(`❌ Error: ${errorMessage}`)
      addLog(`Error: ${errorMessage}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>🎬 AI Video Agent</h1>
        <p className={styles.subtitle}>
          Generate scripts, enhance them with AI, create videos, and auto-post to YouTube
        </p>

        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Enter a video topic (e.g., '5 Amazing Facts About Space')"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className={styles.input}
            disabled={loading}
            onKeyPress={(e) => e.key === 'Enter' && !loading && generateVideo()}
          />
          <button
            onClick={generateVideo}
            disabled={loading}
            className={styles.button}
          >
            {loading ? '⏳ Processing...' : '🚀 Generate & Post Video'}
          </button>
        </div>

        {status && (
          <div className={styles.statusCard}>
            <h3>Current Status</h3>
            <p>{status}</p>
          </div>
        )}

        {logs.length > 0 && (
          <div className={styles.logsCard}>
            <h3>📋 Process Logs</h3>
            <div className={styles.logs}>
              {logs.map((log, i) => (
                <div key={i} className={styles.logEntry}>{log}</div>
              ))}
            </div>
          </div>
        )}

        {videoUrl && (
          <div className={styles.successCard}>
            <h3>🎉 Success!</h3>
            <p>Your video has been posted to YouTube</p>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              View on YouTube →
            </a>
          </div>
        )}

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📝</span>
            <h4>Script Generation</h4>
            <p>AI generates engaging video scripts</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>✨</span>
            <h4>AI Enhancement</h4>
            <p>Scripts are refined and optimized</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🎥</span>
            <h4>Video Creation</h4>
            <p>Automatic video generation with voiceover</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📤</span>
            <h4>Auto Upload</h4>
            <p>Direct posting to YouTube</p>
          </div>
        </div>
      </div>
    </main>
  )
}
