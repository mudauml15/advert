"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import AdminListingForm from "../components/AdminListingForm"

export default function AdminPage() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    const fetchListings = async () => {
      const response = await axios.get("http://localhost:1337/api/listings")
      setListings(response.data.data)
    }
    fetchListings()
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:1337/api/listings/${id}`)
    setListings(listings.filter((listing) => listing.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <AdminListingForm onSuccess={() => setListings([...listings])} />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Manage Listings</h2>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id} className="flex justify-between items-center border-b py-2">
            <span>{listing.attributes.title}</span>
            <button
              onClick={() => handleDelete(listing.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

