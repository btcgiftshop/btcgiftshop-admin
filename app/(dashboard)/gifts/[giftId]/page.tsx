"use client"

import Loader from '@/components/custom ui/Loader'
import GiftForm from '@/components/gifts/GiftForm'
import React, { useEffect, useState } from 'react'

const GiftDetails = ({ params }: { params: { giftId: string } }) => {
  const [loading, setLoading] = useState(true)
  const [giftDetails, setGiftDetails] = useState<GiftType | null>(null)

  const getGiftDetails = async () => {
    try {
      const res = await fetch(`/api/gifts/${params.giftId}`, {
        method: "GET"
      })
      const data = await res.json()
      setGiftDetails(data)
      setLoading(false)
    } catch (err) {
      console.log("[giftId_GET]", err)
    }
  }

  useEffect(() => {
    getGiftDetails()
  }, [])

  return loading ? <Loader /> : (
    <GiftForm initialData={giftDetails} />
  )
}

export default GiftDetails