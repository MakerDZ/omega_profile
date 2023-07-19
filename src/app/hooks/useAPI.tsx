'use client'

import { useEffect, useState } from 'react'

// data type
type SpotifyType = null | {
  track_id: string
  timestamps: {
    start: number
    end: number
  }
  song: string
  artist: string
  album_art_url: string
  album: string
}

type UserType = {
  id: string
  username: string
  avatar: string
  discriminator: string
  bot: boolean
  global_name: string
  avatar_decoration: unknown // todo: fix avatar_decoration type
  display_name: string,
  public_flags: number
}

type DataType = {
  success: boolean
  data: {
    active_on_discord_web: boolean
    active_on_discord_desktop: boolean
    active_on_discord_mobile: boolean
    listening_to_spotify: boolean
    kv: object
    spotify: SpotifyType
    discord_user: UserType
    discord_status: string
    /* 
      As I see from ProfileSection, you use only some activities elements
      So, I'll just describe only emoji and state
    */
    activities: {
      emoji: { name: string }
      state: string
    }[]
  }
}


export type UseFetchReturnType = {
  data: DataType | null
  isLoading: boolean
  error: string | null
};

const useAPI = (url: string, interval: number): UseFetchReturnType => {
  const [data, setData] = useState<DataType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const jsonData = await response.json()

        setData(jsonData)
        setIsLoading(false)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        }
        setIsLoading(false)
      }
    }

    fetchData()

    const intervalId = setInterval(fetchData, interval)

    return () => clearInterval(intervalId)
  }, [url, interval])

  return { data, isLoading, error }
}

export default useAPI